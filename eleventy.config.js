import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { renderOgImage } from "./og/render.js";
import site from "./src/_data/site.js";

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

const stripHtml = (html = "") =>
  html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });

  eleventyConfig.amendLibrary("md", (md) =>
    md.set({ linkify: true, typographer: true, breaks: true })
  );

  eleventyConfig.addFilter("readableDate", (d) => dateFormat.format(new Date(d)));
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString());
  eleventyConfig.addFilter("year", (d) => new Date(d).getUTCFullYear());
  eleventyConfig.addFilter("absoluteUrl", (path, base) => new URL(path, base).href);

  eleventyConfig.addFilter("excerpt", (html, length = 180) => {
    const text = stripHtml(html);
    if (text.length <= length) return text;
    return text.slice(0, text.lastIndexOf(" ", length)).replace(/[,.;:!?]$/, "") + "…";
  });

  eleventyConfig.addFilter("readingTime", (html) => {
    const words = stripHtml(html).split(" ").length;
    return `${Math.max(1, Math.round(words / 220))} min read`;
  });

  // Social preview images: pages call `ogImage` while rendering, the PNGs are
  // written after the build. Unchanged images are not re-rendered in --serve.
  const ogPending = new Map();
  const ogRendered = new Map();
  eleventyConfig.addFilter("ogImage", function (title, kicker) {
    const slug = this.page.url.replace(/\.html$/, "").replace(/^\/|\/$/g, "").replaceAll("/", "-") || "home";
    ogPending.set(slug, { title, kicker, footer: new URL(site.url).host });
    return `/og/${slug}.png`;
  });
  eleventyConfig.on("eleventy.after", async ({ dir }) => {
    const outDir = path.join(dir.output, "og");
    await mkdir(outDir, { recursive: true });
    for (const [slug, input] of ogPending) {
      const file = path.join(outDir, `${slug}.png`);
      const key = JSON.stringify(input);
      if (ogRendered.get(slug) === key && existsSync(file)) continue;
      await writeFile(file, await renderOgImage(input));
      ogRendered.set(slug, key);
    }
  });

  // JSON for <script type="application/ld+json">, safe to inline in HTML
  eleventyConfig.addFilter("jsonScript", (value) => JSON.stringify(value).replace(/</g, "\\u003c"));

  // Group posts by year, newest first: [{ year, posts }]
  eleventyConfig.addFilter("groupByYear", (posts) => {
    const groups = new Map();
    for (const post of posts) {
      const y = post.date.getUTCFullYear();
      if (!groups.has(y)) groups.set(y, []);
      groups.get(y).push(post);
    }
    return [...groups].map(([year, posts]) => ({ year, posts }));
  });

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
