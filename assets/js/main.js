(function () {
  const portfolioItems = window.portfolioItems || [];
  const grid = document.getElementById('portfolio-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.getElementById('site-nav');
  const contactForm = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  function renderCards(filter = 'all') {
    if (!grid) return;

    const filtered =
      filter === 'all' ? portfolioItems : portfolioItems.filter((item) => item.category.toLowerCase() === filter.toLowerCase());

    grid.innerHTML = filtered
      .map(
        (item) => `
          <article class="portfolio-card">
            <img src="${item.image}" alt="${item.title} thumbnail" loading="lazy" />
            <div class="card-content">
              <div class="card-top">
                <p class="category-tag">${item.category}</p>
                <h3>${item.title}</h3>
              </div>
              <p>${item.description}</p>
              ${item.roles ? `<p class="roles"><strong>Role:</strong> ${item.roles}</p>` : ''}
              ${item.link ? `<a href="${item.link}" target="_blank" rel="noreferrer" class="card-link">View project</a>` : '<p class="muted">Link coming soon</p>'}
            </div>
          </article>
        `
      )
      .join('');
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.remove('is-active'));
      button.classList.add('is-active');
      renderCards(button.dataset.filter);
    });
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
      { threshold: 0.15 }
    );
    reveals.forEach((item) => observer.observe(item));
  }

  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  renderCards();
})();
