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
