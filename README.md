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
  index.njk               home page
  notes.njk               archive, grouped by year
  about.md                about page
  assets/                 CSS, JS, fonts (self-hosted), images
  static/                 copied to the site root (favicon, robots.txt)
```

Fonts are self-hosted (Newsreader, Geist, Geist Mono), so the site makes no third-party requests and uses no cookies or analytics.

## Deploy: GitHub Pages

1. Push this folder to a GitHub repository (branch `main`).
2. In the repository go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`.
4. For the custom domain, enter `danielbartl.com` under **Settings → Pages → Custom domain** and point DNS at GitHub Pages
   (apex `A` records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, and/or a `www` `CNAME` to `<user>.github.io`).

## Deploy: Cloudflare Pages

1. **Workers & Pages → Create → Pages → Connect to Git** and select the repository.
2. Build command: `npm run build`, build output directory: `_site`. Node version comes from `.node-version`.
3. Add `danielbartl.com` under **Custom domains**.

## Old URLs

All posts keep their write.as URLs (e.g. `/story-points-ii`), so existing links keep working.
The feed moved from `/feed/` to `/feed.xml`.
