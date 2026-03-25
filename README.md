# Derek Hansen Portfolio (v2)

A clean, cinematic, dark-themed **four-page** personal portfolio website for **Derek Hansen**. This version is employer-facing, responsive, and easy to self-host on a single machine with no database required.

## Why this stack

### Chosen stack
- **HTML5** for semantic page structure
- **CSS3** for custom dark theme and responsive UI
- **Vanilla JavaScript** for lightweight interactions (portfolio filtering, mobile nav, reveal animations)

### Why it fits this project
- Fast static deployment on nearly any server
- No framework complexity for v1/v2 portfolio needs
- Easy to maintain and expand later
- Runs immediately without a database or build step

## Site pages

1. **About** (`index.html`) – professional bio, profile image placeholder, specialties
2. **Portfolio** (`portfolio.html`) – filterable project cards driven by a data file
3. **Contact** (`contact.html`) – contact links + optional static-ready form
4. **Resume** (`resume.html`) – stylized resume overview + embedded/drop-in PDF support

## Features included

- Sticky top navigation across all pages
- Dark cinematic theme with cyan/orange accents
- Reusable shared layout and footer
- Portfolio card filtering by category
- Optional front-end-only contact form handler
- Resume page with drop-in PDF integration path
- Responsive design for desktop/tablet/mobile

## Recommended file structure

```text
Portfolio_DerekHansen/
├── index.html
├── portfolio.html
├── contact.html
├── resume.html
├── README.md
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   ├── main.js
    │   └── portfolio-data.js
    ├── images/
    │   ├── derek-placeholder.svg
    │   ├── project-narrative.svg
    │   ├── project-corporate.svg
    │   ├── project-tech.svg
    │   ├── project-educational.svg
    │   ├── project-collab.svg
    │   └── project-collab-2.svg
    └── resume/
        └── derek-hansen-resume.pdf  (add this file)
```

## Run locally

No build/install required.

### Option 1: Python static server
```bash
python3 -m http.server 8080
```
Open: `http://localhost:8080`

### Option 2: Node static server
```bash
npx serve .
```

## Self-hosting on a single machine

1. Upload project to server (example: `/var/www/derek-portfolio`).
2. Serve directory as static files via Nginx/Caddy/Apache.
3. Optionally put behind reverse proxy + TLS.
4. Optionally configure router port forwarding.

### Nginx example
```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /var/www/derek-portfolio;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

## Where to edit content

### About/contact/resume text
- Edit directly in `index.html`, `contact.html`, and `resume.html`.

### Portfolio entries (primary expansion point)
- Edit `assets/js/portfolio-data.js`.
- Fields per entry:
  - `title`
  - `category`
  - `image`
  - `description`
  - `roles` (optional)
  - `link` (optional)

### Theme + layout
- Edit `assets/css/styles.css`.

## Resume PDF drop-in workflow

To update Derek’s resume regularly:
1. Export a new PDF.
2. Save it as `assets/resume/derek-hansen-resume.pdf`.
3. Replace the old file using the same name.
4. Refresh `resume.html`.

No additional code changes are required.

