# Derek Hansen Portfolio (v1)

A clean, cinematic, dark-themed personal portfolio website for **Derek Hansen**. This first version is employer-facing, responsive, and easy to self-host on a single machine with no database required.

## Why this stack

### Chosen stack
- **HTML5** for semantic structure and accessibility
- **CSS3** for custom dark theme styling and responsive layout
- **Vanilla JavaScript** for lightweight interactivity (portfolio rendering/filtering, mobile nav, subtle animations)

### Why it fits this project
- Fast to deploy on almost any server (Nginx, Apache, Caddy, static hosting, or simple Node static server)
- Minimal maintenance overhead for v1
- Easy to customize later without framework lock-in
- Works immediately with no database, no build step, and no API dependencies

## Features included

- Sticky top navigation with smooth scrolling
- Hero section with professional tagline
- About section with headshot placeholder, intro, career-focused bio, and specialties
- Portfolio grid with category filtering
- Contact section with placeholder professional links
- Optional lightweight front-end-only contact form (easy to connect/disable)
- Responsive design for desktop, tablet, and mobile
- Subtle reveal/hover animations for polish

## Recommended file structure

```text
Portfolio_DerekHansen/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   ├── main.js
    │   └── portfolio-data.js
    └── images/
        ├── derek-placeholder.svg
        ├── project-narrative.svg
        ├── project-corporate.svg
        ├── project-tech.svg
        ├── project-educational.svg
        ├── project-collab.svg
        └── project-collab-2.svg
```

## Run locally

No build or install is required.

### Option 1: Python static server
```bash
python3 -m http.server 8080
```
Open: `http://localhost:8080`

### Option 2: Node static server (if preferred)
```bash
npx serve .
```

## Self-hosting on a single machine

### Basic approach
1. Copy the project folder to your server (e.g., `/var/www/derek-portfolio`).
2. Serve the directory with a web server (Nginx/Caddy/Apache) as static files.
3. (Optional) Put behind a reverse proxy and domain with TLS.
4. (Optional) Use port forwarding from your router to the server.

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

### About + contact text
- Edit directly in `index.html`.

### Portfolio entries (main content expansion point)
- Edit: `assets/js/portfolio-data.js`
- Each project item supports:
  - `title`
  - `category`
  - `image`
  - `description`
  - `roles` (optional)
  - `link` (optional)

### Styling and theme
- Edit colors, spacing, and typography in `assets/css/styles.css` under `:root` and relevant section styles.

## Optional contact form integration

Current form behavior is static-only (no backend). To enable real submissions later:
- Connect the form in `index.html` to services like Formspree/Netlify Forms, or
- Add your own endpoint and update `assets/js/main.js` submit handler.

If you prefer no form in v1, remove or comment out the `<form>` block in the Contact section.

## Next-step ideas
- Add real headshot and project thumbnails
- Replace placeholder links with live work (Vimeo/YouTube/project pages)
- Add dedicated project detail pages
- Add resume download link
- Add analytics and SEO metadata tuning

