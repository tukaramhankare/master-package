/* ═══════════════════════════════════════════════════════════
   JARVIS STUDIO — app.js
   Filter · Theme Toggle · Card Mouse Glow · Count Update
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── THEME ─── */
  const themeToggle = document.getElementById('themeToggle');
  const THEME_KEY = 'jarvis-theme';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  // Init from storage or system preference
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) {
    applyTheme(saved);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  }

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });

  // Listen to system changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem(THEME_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  /* ─── FILTER ─── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');
  const emptyState = document.getElementById('emptyState');
  const visibleCount = document.getElementById('visible-count');

  function updateCount() {
    const visible = document.querySelectorAll('.card:not(.hidden)').length;
    visibleCount.textContent = visible;
  }

  function filterCards(category) {
    let shown = 0;

    cards.forEach((card, i) => {
      const match = category === 'all' || card.dataset.category === category;
      if (match) {
        card.classList.remove('hidden');
        // Re-trigger animation
        card.style.animation = 'none';
        card.offsetHeight; // reflow
        card.style.animation = '';
        card.style.animationDelay = `${i * 0.06}s`;
        shown++;
      } else {
        card.classList.add('hidden');
      }
    });

    emptyState.style.display = shown === 0 ? 'flex' : 'none';
    updateCount();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterCards(btn.dataset.filter);
    });
  });

  /* ─── CARD MOUSE GLOW ─── */
  // Track mouse per-card for the radial glow effect
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    });
  });

  /* ─── CARD TILT (subtle 3D on desktop) ─── */
  const isTouchDevice = () => window.matchMedia('(pointer: coarse)').matches;

  cards.forEach(card => {
    if (isTouchDevice()) return;

    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const tiltX = dy * -4;
      const tiltY = dx * 4;
      card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* ─── SCROLL REVEAL ─── */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) scale(1)';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    // Observe cards that start off-screen
    cards.forEach(card => io.observe(card));
  }

  /* ─── KEYBOARD FILTER SHORTCUT ─── */
  // 1=All, 2=Tools, 3=Farm, 4=Edu&Fin
  document.addEventListener('keydown', e => {
    const map = { '1': 'all', '2': 'tool', '3': 'farm', '4': 'edu' };
    if (map[e.key] && !e.ctrlKey && !e.metaKey && !e.altKey) {
      const target = document.querySelector(`.filter-btn[data-filter="${map[e.key]}"]`);
      if (target) target.click();
    }
  });

  /* ─── FOOTER YEAR ─── */
  // Already hardcoded but keep dynamic fallback
  const yearEls = document.querySelectorAll('.footer-copy');
  const currentYear = new Date().getFullYear();
  yearEls.forEach(el => {
    el.textContent = el.textContent.replace(/\d{4}/, currentYear);
  });

  /* ─── CARD LINK RIPPLE ─── */
  document.querySelectorAll('.card-link').forEach(link => {
    link.addEventListener('click', function (e) {
      const rect = link.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position:absolute;
        width:6px;height:6px;
        left:${e.clientX - rect.left - 3}px;
        top:${e.clientY - rect.top - 3}px;
        border-radius:50%;
        background:rgba(255,255,255,0.5);
        transform:scale(0);
        animation:rippleOut 0.4s ease forwards;
        pointer-events:none;
      `;
      // Inject animation if not present
      if (!document.getElementById('ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `@keyframes rippleOut{to{transform:scale(20);opacity:0;}}`;
        document.head.appendChild(style);
      }
      link.style.position = 'relative';
      link.style.overflow = 'hidden';
      link.appendChild(ripple);
      setTimeout(() => ripple.remove(), 500);
    });
  });

  /* ─── HERO NUMBER COUNTER ANIMATION ─── */
  function animateCounter(el, from, to, duration) {
    const start = performance.now();
    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(from + (to - from) * eased);
      el.textContent = value;
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  // Animate the stat numbers on load
  window.addEventListener('load', () => {
    const stats = document.querySelectorAll('.stat-num');
    stats.forEach(stat => {
      const val = parseInt(stat.textContent);
      if (!isNaN(val)) {
        stat.textContent = '0';
        setTimeout(() => animateCounter(stat, 0, val, 900), 400);
      }
    });
  });

  // Initial count
  updateCount();

})();
