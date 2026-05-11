# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio + blog at https://saurabhmisra.dev. Gatsby v5 site built on top of the `@lekoarts/gatsby-theme-minimal-blog` theme.

The repo is a public GitHub repository, and Netlify auto-deploys on every push to `main`. **A `git push` to `main` is a production deploy** — there is no staging environment or manual promotion step. Always confirm with the user before pushing, and prefer running `npm run build` locally first to catch build failures before they hit production.

**Package manager**: this project uses **npm** (the lockfile is `package-lock.json`; there is no `yarn.lock`). Despite "yarn" appearing in some `package.json` script bodies (e.g. `develop:cypress`), those are pre-existing artifacts of the upstream theme starter — actual installs and builds run through npm both locally and on Netlify.

## Commands

- `npm run develop` (or `npm start`) — run the Gatsby dev server at http://localhost:8000
- `npm run build` — production build into `public/`
- `npm run serve` — serve the production build locally
- `npm run clean` — wipe `.cache/` and `public/` (run this when `develop` shows stale content or schema/plugin errors)
- `npx cross-env ANALYSE_BUNDLE=1 npm run build` — emit `_bundle.html` via webpack-bundle-analyser (gated by env var in `gatsby-config.js`; `cross-env` works on both PowerShell and bash)

There is no test suite, linter, or typecheck script wired up. The `develop:cypress` / `build:cypress` scripts set `CYPRESS_SUPPORT=y` for the underlying theme but no Cypress specs live in this repo.

## Architecture

### Gatsby theme + component shadowing

Almost all rendering logic lives in the upstream `@lekoarts/gatsby-theme-minimal-blog` package. This repo customizes it through **Gatsby component shadowing** under `src/@lekoarts/gatsby-theme-minimal-blog/`. To customize a theme component, mirror its path inside that directory — Gatsby will use the local file in place of the theme's. Currently shadowed:

- `components/homepage.tsx`, `components/list.tsx`, `components/post.tsx` — page-level layouts; `post.tsx` injects custom `Author`, `SocialSharing`, and `Discuss` (no-op) sections around the theme's `PostFooter`.
- `components/Author.js`, `SocialSharing.js`, `Discuss.js`, `TrophyPanel.js` — custom additions used inside the shadowed pages and from MDX content.
- `gatsby-plugin-theme-ui/index.js` — merges into the theme's theme-ui object; sets `initialColorModeName: 'dark'`.
- `texts/hero.mdx`, `texts/projects.mdx`, `texts/publications.mdx` — MDX snippets rendered on the homepage.

When changing site appearance or page structure, prefer adding/modifying a shadow file over reaching into `node_modules`. The `theme-ui` `sx` prop is the styling system; `src/styles/global.css` (loaded from `gatsby-browser.js`) handles the few global selectors that aren't easy to express via theme-ui (author block, social sharing layout, etc.).

### Configuration quirk

`gatsby-config.js` defines `siteMetadata.navigation` *and* a separate `navigation` array passed to the theme options. The theme reads its options array — the `siteMetadata.navigation` entries are effectively unused. If you change navigation, update the theme-options block.

`gatsby-plugin-google-analytics` is currently commented out in `gatsby-config.js`.

### Content

All authored content is MDX under `content/`:

- `content/posts/<slug-folder>/index.mdx` — blog posts. Frontmatter: `title`, `date` (YYYY-MM-DD), `slug` (URL path, e.g. `/javascript-operators-null-undefined`), `tags` (array), `description`. Optional `canonicalUrl` and `banner` are consumed by the shadowed `post.tsx`.
- `content/pages/<page>/index.mdx` — standalone pages (about, subscription confirmation, privacy policy). Slugs come from the theme's pages plugin convention.

Post images live in `content/posts/<slug>/assets/images/` and are imported as ES modules at the top of the MDX file (see `html-layout-semantic-tags/index.mdx` for the pattern). Many post folders also contain an `assets/images/orig/` subfolder holding the unoptimized source images — these are intentionally **not** committed (they appear as untracked in `git status` across many posts). Only the optimized variants outside `orig/` ship with the site.

### Static assets and redirects

Files in `static/` are copied verbatim to the site root. `static/_redirects` is the Netlify redirects file — add path rewrites there, not in `gatsby-config.js`.

### External integrations

- Newsletter signup form posts to Buttondown (`saurabhmisra.dev`) inside `Author.js`.
- Netlify hosts the site (`gatsby-plugin-netlify`); offline support via `gatsby-plugin-offline`.
- Sitemap excludes the privacy-policy and subscription-flow pages (see `gatsby-config.js`).

## Conventions

- Commit message style for new posts (matches recent history): `Commit new blog post: <Post Title>`.
- Post slugs are absolute paths (start with `/`) and are kebab-case; the folder name under `content/posts/` is conventionally similar but not required to match the slug.
