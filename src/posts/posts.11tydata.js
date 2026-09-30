import { readFileSync } from "node:fs";

// Plain-text summary of the Markdown source, used for <meta name="description">.
const summarize = (inputPath, length = 160) => {
  const text = readFileSync(inputPath, "utf8")
    .replace(/^---[\s\S]*?---/, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[*_#>`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= length) return text;
  return text.slice(0, text.lastIndexOf(" ", length)).replace(/[,.;:!?]$/, "") + "…";
};

export default {
  layout: "layouts/post.njk",
  tags: ["posts"],
  eleventyComputed: {
    description: (data) => data.description || summarize(data.page.inputPath),
  },
};
