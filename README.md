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
- Portfolio cards that support **YouTube embeds**, **self-hosted video**, or **image fallback**
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
    ├── videos/
    │   └── your-video-file.mp4      (optional, for self-hosted project media)
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
Edit `assets/js/portfolio-data.js`.

Each project object supports these fields:
- `title` (string)
- `category` (string)
- `description` (string)
- `roles` (string, optional)
- `link` (string URL, optional)
- `image` (string path, used as fallback thumbnail)
- `media` (object, optional)

`media` can be one of the following:

#### 1) YouTube video
Use this when the project can be hosted on YouTube.

```js
{
  title: 'Project Name',
  category: 'Narrative',
  media: {
    type: 'youtube',
    url: 'https://www.youtube.com/watch?v=VIDEO_ID'
  },
  image: 'assets/images/project-narrative.svg',
  description: '...',
  roles: '...',
  link: 'https://example.com'
}
```

Accepted YouTube URL formats:
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/embed/VIDEO_ID`

#### 2) Self-hosted/raw video file
Use this when the video cannot be on YouTube.

1. Add your video file to `assets/videos/` (example: `assets/videos/client-cut.mp4`).
2. Reference it in the project entry with `media.type = 'video'`.
3. Optionally provide a `poster` image shown before playback starts.

```js
{
  title: 'Project Name',
  category: 'Corporate',
  media: {
    type: 'video',
    src: 'assets/videos/client-cut.mp4',
    poster: 'assets/images/project-corporate.svg' // optional
  },
  image: 'assets/images/project-corporate.svg',
  description: '...',
  roles: '...',
  link: ''
}
```

#### 3) Image-only fallback
If `media` is missing or invalid, the card renders `image` as a static thumbnail.

```js
{
  title: 'Project Name',
  category: 'Educational',
  image: 'assets/images/project-educational.svg',
  description: '...',
  roles: '...',
  link: 'https://example.com'
}
```

### Theme + layout
- Edit `assets/css/styles.css`.

## Resume PDF drop-in workflow

To update Derek’s resume regularly:
1. Export a new PDF.
2. Save it as `assets/resume/derek-hansen-resume.pdf`.
3. Replace the old file using the same name.
4. Refresh `resume.html`.

No additional code changes are required.
