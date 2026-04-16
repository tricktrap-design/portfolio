# Portfolio Site

This project now runs as a plain static site using only:

- `index.html`
- `styles.css`
- `script.js`

There is no build step required for GitHub Pages.

## Publish to GitHub Pages

1. Push this folder to a GitHub repository.
2. In GitHub, open `Settings > Pages`.
3. Under `Build and deployment`, choose `Deploy from a branch`.
4. Select your default branch and the `/ (root)` folder.
5. Save. GitHub Pages will publish the site from the root files.

## Local preview

You can open `index.html` directly in the browser, or run a tiny local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Notes

- The site uses hash navigation (`#home` and `#case-study`) so it works cleanly on GitHub Pages.
- Older Vite/React files are still in the repo for reference, but the live site now uses only the static root files.
