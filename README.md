# AtlasFlow Static Template Catalog

A static, GitHub-Pages-friendly catalog of five polished pitch/presentation HTML templates for the fictional product **AtlasFlow**.

## What is included

- `index.html` — catalog landing page with links to each template.
- `templates/swiss-consultant.html`
- `templates/linear-startup.html`
- `templates/interactive-manual.html`
- `templates/editorial-deep-dive.html`
- `templates/scrollyteller.html`
- Shared design and rendering assets:
  - `assets/css/tokens.css` (design tokens)
  - `assets/css/base.css` (reusable layout/components)
  - `assets/css/template-themes.css` (style variants)
  - `assets/css/catalog.css` (catalog page styles)
  - `assets/js/atlasflow-data.js` (single narrative/data source)
  - `assets/js/template-render.js` (renders shared data into all templates)

## Narrative consistency

All five templates share the same AtlasFlow narrative and data model:

- Hero
- Executive summary
- Problem
- Insight
- Solution architecture
- Proof / metrics
- CTA

Only the visual treatment changes by template style.

## Edit content

1. Open `assets/js/atlasflow-data.js`.
2. Update product copy, bullets, architecture blocks, metrics, and testimonial.
3. Save — all five templates automatically reflect the same content.

## Edit styles

- Update reusable tokens in `assets/css/tokens.css`.
- Update shared structure/components in `assets/css/base.css`.
- Adjust template-specific visual systems in `assets/css/template-themes.css`.

## Run locally

Because this is static HTML, any static server works:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

### Option A: Deploy from root (recommended)

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or your default branch)
   - **Folder:** `/ (root)`
4. Save and wait for the Pages URL to appear.

### Option B: Deploy from `/docs`

If your repository expects Pages from `/docs`, copy these files into `docs/` and set Pages folder to `/docs`.

## Accessibility and responsiveness notes

- Semantic sectioning and heading hierarchy are used throughout.
- A skip link is provided on each page.
- Layouts use fluid grids and collapse for narrow viewports.
- Color and spacing are tokenized for maintainable theming.

---

This project is intentionally static-first: no backend, no build pipeline required.
