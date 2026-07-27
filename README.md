# ME

A portfolio-first personal site that doubles as a navigation hub and leaves a clean placeholder for a future knowledge base.

## What is included

- `index.html`: main shell and route structure
- `styles.css`: responsive visual system and layout
- `app.js`: routing, spotlight, search, filters, and content rendering
- `.github/workflows/pages.yml`: GitHub Pages deployment workflow

## Current logic

- Hash-based navigation for `home`, `projects`, `explore`, `notes`, and `about`
- Search and category filters for project cards
- Spotlight module with shuffle interaction
- Mobile navigation
- Copy-email action
- Placeholder knowledge-base roadmap

## Customization

Most content lives in the `siteConfig`, `projects`, `exploreGroups`, `roadmap`, `noteTopics`, and `timeline` objects inside `app.js`.

## Deployment

Push to `main` and let the GitHub Pages workflow deploy the site.

If GitHub Pages is not active yet in the repository settings, set the Pages source to `GitHub Actions`.
