# danielbartl.com

Personal website and notes of Daniel Bartl, built with [Eleventy](https://www.11ty.dev/) as a fully static site.

## Local development

```sh
npm install
npm start          # dev server with live reload on http://localhost:8080
npm run build      # production build into _site/
```

## Writing a new note

Add a Markdown file to `src/posts/`:

```md
---
title: "My new note"
date: 2026-10-01
permalink: /my-new-note/
---

Text goes here. Bare URLs are linked automatically.
```

It shows up on the home page, in `/notes/`, in the feed (`/feed.xml`) and in the sitemap.

## Structure

```
src/
  _data/site.js           name, description, email, social links
  _includes/layouts/      base + post layouts
  posts/                  one Markdown file per note
  _data/work.js           text of the "Work with me" page, English and German
  _data/certifications.js certifications and badge images for that page
  _data/projects.js       open-source projects on the home page
  _data/fullstack4j.js    the fullstack4j offering (home and Work with me), English and German
  _includes/schema.njk    structured data (schema.org JSON-LD) for search engines
  _includes/fullstack4j.njk  the fullstack4j section, shared by home and Work with me
  index.njk               home page
  notes.njk               archive, grouped by year
  about.md                about page
  work-with-me.njk        /work-with-me/ (English)
  de/zusammenarbeit.njk   /de/zusammenarbeit/ (German)
  impressum.njk           legal notice
  datenschutz.njk         privacy policy
  assets/                 CSS, JS, fonts (self-hosted), images
  static/                 copied to the site root (favicon, robots.txt)
og/                       social preview image renderer (build time only)
```

## Social preview images

Every page gets its own 1200×630 preview image at `/og/<page>.png`, rendered at build time
by `og/render.js` (Satori + resvg) from the page title. Notes are labeled with their date;
other pages can set the label and headline in front matter:

```md
ogKicker: Work with me
ogTitle: An engineer who has built the code, the teams and the company
```

`og/fonts/` holds TTF copies of the site fonts (Satori can't read WOFF2), licensed under the
SIL Open Font License (see the `OFL-*.txt` files).

Fonts are self-hosted (Newsreader, Geist, Geist Mono), so the site makes no third-party requests and uses no cookies or analytics.

## Old URLs

All posts keep their write.as URLs (e.g. `/story-points-ii`), so existing links keep working.
The feed moved from `/feed/` to `/feed.xml`.
