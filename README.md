# Curious Club — STEM projects for curious kids

A cheerful, responsive five-page static website concept for kids and the grown-ups exploring STEM with them. It is built with plain HTML, CSS, and JavaScript—no framework, backend, package install, or API keys required.

## Pages

- `index.html` — welcome page and STEM category introductions
- `projects.html` — project cards with category filters and live search
- `project.html` — Rainbow in a Jar instructions, supply list, safety reminder, and a checklist saved in the browser
- `safety.html` — general safety reminders for kids and adults
- `about.html` — the Curious Club approach to playful learning

## Run locally

From the repository root, start a local static web server:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>. You can also open `index.html` directly, though some browsers limit local storage on `file://` URLs.

The site is static and does **not** implement a REST API or require a server-side application. “Responsive” describes the layout adapting to phone, tablet, and desktop screens. If you meant a backend REST API as well, that would be a separate addition.

## Notes

The page design uses Google Fonts when online and falls back to system fonts. No build step is needed. The featured experiment is for educational use with adult supervision; see `safety.html` before trying activities.
