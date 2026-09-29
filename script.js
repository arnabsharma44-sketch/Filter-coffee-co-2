/* ============================================================
   FILTER COFFEE CO. — JAVASCRIPT
   Interactions: Nav scroll, mobile menu, scroll reveal,
   cursor tracking, form validation, smooth animations
   ============================================================ */

(function () {
  'use strict';

  /* ---------- CURSOR GLOW TRACKING ---------- */
  document.addEventListener('mousemove', (e) => {
    document.body.style.setProperty('--cursor-x', e.clientX + 'px');
    document.body.style.setProperty('--cursor-y', e.clientY + 'px');
  });

  /* ---------- NAVBAR SCROLL BEHAVIOR ---------- */
  const navbar = document.getElementById('navbar');

  const handleNavbarScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  /* ---------- MOBILE NAV TOGGLE ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));

      // Animate hamburger → X
      const spans = navToggle.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      }
    });

    // Close on nav link click
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        const spans = navToggle.querySelectorAll('span');
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        const spans = navToggle.querySelectorAll('span');
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
  }

  /* ---------- SMOOTH SCROLL FOR ANCHOR LINKS ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--nav-h'), 10) || 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ---------- SCROLL REVEAL ANIMATION ---------- */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  // Attach reveal to key elements
  const revealTargets = [
    '.section-header',
    '.blurb-text',
    '.work-card',
    '.service-card',
    '.logo-slot',
    '.stat-card',
    '.ceo-grid',
    '.team-card',
    '.contact-inner',
    '.team-roles',
    '.team-desc',
    '.stats-header',
    '.client-logo-wall',
    '.ceo-section .section-eyebrow',
  ];

  revealTargets.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.classList.add('reveal');
      revealObserver.observe(el);
    });
  });

  /* ---------- STAGGER CHILDREN ON REVEAL ---------- */
  const staggerParents = document.querySelectorAll(
    '.work-grid, .services-grid, .logo-grid, .stats-grid, .team-grid'
  );

  staggerParents.forEach((parent) => {
    const children = parent.querySelectorAll(
      '.work-card, .service-card, .logo-slot, .stat-card, .team-card'
    );

    const staggerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            children.forEach((child, i) => {
              setTimeout(() => {
                child.classList.add('visible');
              }, i * 70);
            });
            staggerObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    // Remove individual observers and observe the parent
    children.forEach((child) => {
      child.classList.add('reveal');
      revealObserver.unobserve(child);
    });

    staggerObserver.observe(parent);
  });

  /* ---------- ACTIVE NAV HIGHLIGHT (SCROLL SPY) ---------- */
  const sections = document.querySelectorAll('section[id], div[id]');
  const navAnchors = document.querySelectorAll('.nav-link');

  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navAnchors.forEach((a) => {
            a.classList.remove('active');
            if (a.getAttribute('href') === '#' + entry.target.id) {
              a.classList.add('active');
            }
          });
        }
      });
    },
    { rootMargin: '-40% 0px -40% 0px' }
  );

  sections.forEach((section) => spyObserver.observe(section));

  /* ---------- CONTACT FORM VALIDATION & SUBMISSION ---------- */
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name  = document.getElementById('name');
      const email = document.getElementById('email');
      const brief = document.getElementById('brief');

      let valid = true;

      // Simple validation
      [name, email, brief].forEach((field) => {
        field.style.borderColor = '';
        if (!field.value.trim()) {
          field.style.borderColor = 'rgba(255, 255, 255, 0.6)';
          valid = false;
        }
      });

      if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.style.borderColor = 'rgba(255, 255, 255, 0.6)';
        valid = false;
      }

      if (!valid) return;

      // Success state
      const submitBtn = contactForm.querySelector('[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'BRIEF RECEIVED. WE'RE BREWING. ☕';
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';

      // Reset after 4 seconds (placeholder — wire to your backend)
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '';
        contactForm.reset();
      }, 4000);
    });

    // Live border color on focus
    contactForm.querySelectorAll('input, select, textarea').forEach((field) => {
      field.addEventListener('input', () => {
        field.style.borderColor = '';
      });
    });
  }

  /* ---------- WORK CARD TILT EFFECT (subtle) ---------- */
  document.querySelectorAll('.work-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 6;
      const y = ((e.clientY - rect.top)  / rect.height - 0.5) * -6;
      card.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${y}deg) scale(1.01)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      setTimeout(() => { card.style.transition = ''; }, 500);
    });
  });

  /* ---------- STAT CARD NUMBER ANIMATION ---------- */
  // Animates visible stat values when they come into view
  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateStatCard(entry.target);
          statObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('.stat-card').forEach((card) => {
    statObserver.observe(card);
  });

  function animateStatCard(card) {
    const valueEl = card.querySelector('.stat-value');
    if (!valueEl) return;

    const text = valueEl.textContent;
    const match = text.match(/^(\d+)/);
    if (!match) return;

    const target = parseInt(match[1], 10);
    const suffix = text.replace(match[1], '');
    const duration = 1400;
    const start = performance.now();

    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const current  = Math.floor(easeOut(progress) * target);
      valueEl.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }

  /* ---------- SERVICE CARD EXPAND ON CLICK (mobile) ---------- */
  if (window.innerWidth <= 768) {
    document.querySelectorAll('.service-card').forEach((card) => {
      card.addEventListener('click', () => {
        card.classList.toggle('expanded');
      });
    });
  }

  /* ---------- LOGO SLOT HOVER RIPPLE ---------- */
  document.querySelectorAll('.logo-slot').forEach((slot) => {
    slot.addEventListener('click', () => {
      slot.classList.add('pulse');
      setTimeout(() => slot.classList.remove('pulse'), 600);
    });
  });

  /* ---------- INIT ---------- */
  console.log('%c☕ Filter Coffee Co. — We make brands addictive.', 
    'font-family: serif; font-size: 14px; color: #f5f5f0; background: #0a0a0a; padding: 8px 16px;'
  );

})();
