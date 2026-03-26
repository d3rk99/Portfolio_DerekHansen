(function () {
  const portfolioItems = window.portfolioItems || [];
  const grid = document.getElementById('portfolio-grid');
  const filterBar = document.querySelector('.filter-bar');
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.getElementById('site-nav');
  const contactForm = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  function normalizeTags(item) {
    if (Array.isArray(item.tags) && item.tags.length > 0) {
      return item.tags;
    }

    if (item.category) {
      return [item.category];
    }

    return [];
  }

  function getFilterList(items) {
    const discoveredTags = new Set();

    items.forEach((item) => {
      normalizeTags(item).forEach((tag) => discoveredTags.add(tag));
    });

    return ['all', ...Array.from(discoveredTags)];
  }

  function renderFilterButtons() {
    if (!filterBar) return;

    const filters = getFilterList(portfolioItems);

    filterBar.innerHTML = filters
      .map(
        (filter, index) => `
          <button class="filter-btn ${index === 0 ? 'is-active' : ''}" data-filter="${filter}">
            ${filter === 'all' ? 'All' : filter}
          </button>
        `
      )
      .join('');
  }

  function renderTags(item) {
    const tags = normalizeTags(item);

    return tags
      .map((tag) => `<p class="category-tag">${tag}</p>`)
      .join('');
  }

  function getYouTubeEmbedUrl(url) {
    if (!url) return '';

    try {
      const parsed = new URL(url);
      const host = parsed.hostname.replace('www.', '');
      let videoId = '';

      if (host === 'youtu.be') {
        videoId = parsed.pathname.slice(1);
      } else if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtube-nocookie.com') {
        if (parsed.pathname === '/watch') {
          videoId = parsed.searchParams.get('v') || '';
        } else if (parsed.pathname.startsWith('/embed/')) {
          videoId = parsed.pathname.split('/embed/')[1] || '';
        }
      }

      if (!videoId) return '';

      const params = new URLSearchParams({
        rel: '0',
        modestbranding: '1'
      });

      if (window.location?.origin && window.location.origin.startsWith('http')) {
        params.set('origin', window.location.origin);
      }

      return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
    } catch (_error) {
      return '';
    }
  }

  function renderProjectMedia(item) {
    if (item.media?.type === 'youtube' && item.media.url) {
      const embedUrl = getYouTubeEmbedUrl(item.media.url);

      if (embedUrl) {
        return `
          <div class="card-media media-frame">
            <iframe
              src="${embedUrl}"
              title="${item.title} video preview"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              referrerpolicy="origin"
            ></iframe>
          </div>
        `;
      }
    }

    if (item.media?.type === 'video' && item.media.src) {
      const posterAttr = item.media.poster ? `poster="${item.media.poster}"` : '';
      return `
        <div class="card-media media-frame">
          <video controls preload="metadata" ${posterAttr}>
            <source src="${item.media.src}" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      `;
    }

    if (item.image) {
      return `<img class="card-media" src="${item.image}" alt="${item.title} thumbnail" loading="lazy" />`;
    }

    return '';
  }

  function renderCards(filter = 'all') {
    if (!grid) return;

    const showDescription = filter !== 'all';
    const activeFilter = filter.toLowerCase();
    grid.classList.toggle('is-all', activeFilter === 'all');

    const filtered =
      activeFilter === 'all'
        ? portfolioItems
        : portfolioItems.filter((item) => normalizeTags(item).some((tag) => tag.toLowerCase() === activeFilter));

    grid.innerHTML = filtered
      .map(
        (item) => `
          <article class="portfolio-card">
            ${renderProjectMedia(item)}
            <div class="card-content">
              <div class="card-top">
                <div class="category-tags">${renderTags(item)}</div>
                <h3>${item.title}</h3>
              </div>
              ${showDescription ? `<p>${item.description}</p>` : ''}
              ${item.roles ? `<p class="roles"><strong>Role:</strong> ${item.roles}</p>` : ''}
              ${item.link ? `<a href="${item.link}" target="_blank" rel="noreferrer" class="card-link">View project</a>` : '<p class="muted">Link coming soon</p>'}
            </div>
          </article>
        `
      )
      .join('');
  }

  filterBar?.addEventListener('click', (event) => {
    const button = event.target.closest('.filter-btn');
    if (!button) return;

    filterBar.querySelectorAll('.filter-btn').forEach((btn) => btn.classList.remove('is-active'));
    button.classList.add('is-active');
    renderCards(button.dataset.filter || 'all');
  });

  // Mobile nav toggle.
  navToggle?.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav?.classList.toggle('open');
  });

  siteNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  // Highlight current page in nav.
  const currentPage = document.body.dataset.page;
  if (currentPage) {
    document.querySelector(`.site-nav a[data-nav="${currentPage}"]`)?.classList.add('is-current');
  }

  // Lightweight static form handler for v1.
  contactForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (feedback) {
      feedback.textContent = 'Thanks for your message. Connect this form to a backend service when ready.';
    }
    contactForm.reset();
  });

  // Subtle reveal animation.
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.01 }
    );
    reveals.forEach((item) => observer.observe(item));
  }

  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  renderFilterButtons();
  renderCards();
})();
