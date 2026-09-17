# Tappal Faizan — Portfolio

A single-page portfolio website built with plain HTML, CSS and JavaScript — no build step, no framework, no dependencies. Static files only, so it deploys directly on GitHub Pages.

## Structure

```
.
├── index.html              # All page content and sections
├── css/
│   └── styles.css          # Design system (colors, type, layout)
├── js/
│   └── script.js           # Footer year + active nav highlighting
├── assets/
│   ├── resume/
│   │   └── Faizan_Tappal_JavaBackendDeveloper_3.5YOE.pdf
│   └── certs/
│       ├── azure-fundamentals.jpg
│       └── gcp-ace.jpg
└── README.md
```

## Sections

Summary, Skills, Experience, Certifications, Contact. (No GitHub Activity or Featured Projects sections, by design.)

## Running locally

No build tools needed. Either:

- Open `index.html` directly in a browser, or
- Serve it locally so relative paths behave exactly like production:
  ```bash
  python3 -m http.server 8000
  # then visit http://localhost:8000
  ```

## Updating content

- **Text/sections** — edit `index.html` directly.
- **Colors/fonts/spacing** — edit the `:root` variables at the top of `css/styles.css`.
- **Resume** — replace `assets/resume/Faizan_Tappal_JavaBackendDeveloper_3.5YOE.pdf` (keep the same filename, or update the `href` in `index.html`).
- **Certificates** — drop a new image into `assets/certs/` and update the corresponding `<a class="cert-card">` block in `index.html`.

## Deploying to GitHub Pages

See the step-by-step guide provided alongside this project. In short:

1. Push this folder to a GitHub repository.
2. In the repo settings, enable **GitHub Pages** from the `main` branch, root folder.
3. GitHub will publish the site at `https://<username>.github.io/<repo-name>/`.
