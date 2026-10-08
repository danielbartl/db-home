// Renders the 1200×630 social preview image (og:image) for a page.
// Fonts and avatar live next to this file; they are only used at build time.
import { readFileSync } from "node:fs";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const file = (name) => readFileSync(new URL(name, import.meta.url));

const fonts = [
  { name: "Newsreader", data: file("fonts/newsreader-500.ttf"), weight: 500 },
  { name: "Geist", data: file("fonts/geist-500.ttf"), weight: 500 },
  { name: "Geist Mono", data: file("fonts/geist-mono-500.ttf"), weight: 500 },
];
const avatar = `data:image/jpeg;base64,${file("avatar.jpg").toString("base64")}`;

// Light theme tokens from src/assets/css/style.css
const color = {
  bg: "#faf8f4",
  text: "#1d1b18",
  muted: "#6f685e",
  line: "#e6e0d5",
  orange: "#f7a54a",
  blue: "#8fc8f0",
  green: "#a9dc9d",
};

// Tiny hyperscript helper: satori takes React-like element objects.
const h = (type, style, ...children) => ({
  type,
  props: { style, children: children.length > 1 ? children : children[0] },
});

const titleSize = (title) => (title.length > 90 ? 52 : title.length > 55 ? 62 : 76);

const sticky = (background, width, rotate) =>
  h("div", { width, height: width, background, transform: `rotate(${rotate}deg)`, boxShadow: "0 6px 14px -4px rgba(0,0,0,0.22)" });

export async function renderOgImage({ title, kicker, footer }) {
  const svg = await satori(
    h(
      "div",
      {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background: color.bg,
        fontFamily: "Geist",
        color: color.text,
      },
      h(
        "div",
        { display: "flex", justifyContent: "space-between", alignItems: "flex-start" },
        h(
          "div",
          {
            display: "flex",
            padding: "14px 20px",
            background: color.orange,
            fontFamily: "Geist Mono",
            fontSize: 26,
            transform: "rotate(-2deg)",
            boxShadow: "0 6px 14px -4px rgba(0,0,0,0.22)",
          },
          kicker
        ),
        h("div", { display: "flex", gap: 14 }, sticky(color.orange, 34, -4), sticky(color.blue, 34, 3), sticky(color.green, 34, -2))
      ),
      h(
        "div",
        {
          display: "block",
          fontFamily: "Newsreader",
          fontSize: titleSize(title),
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          maxWidth: 1000,
          lineClamp: 4,
        },
        title
      ),
      h(
        "div",
        { display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 28, borderTop: `2px solid ${color.line}` },
        h(
          "div",
          { display: "flex", alignItems: "center", gap: 20 },
          { type: "img", props: { src: avatar, width: 64, height: 64, style: { borderRadius: 999 } } },
          h("div", { fontFamily: "Newsreader", fontSize: 32 }, "Daniel Bartl")
        ),
        h("div", { fontFamily: "Geist Mono", fontSize: 24, color: color.muted }, footer)
      )
    ),
    { width: 1200, height: 630, fonts }
  );
  return new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
}
