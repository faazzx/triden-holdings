// Scroll reveal animations
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(el => observer.observe(el));
}

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.style.display === 'flex';
    mainNav.style.display = isOpen ? 'none' : 'flex';
    mainNav.style.flexDirection = 'column';
    mainNav.style.position = 'absolute';
    mainNav.style.top = '80px';
    mainNav.style.left = '0';
    mainNav.style.right = '0';
    mainNav.style.background = '#0D0D0D';
    mainNav.style.padding = '1.5rem 24px';
    mainNav.style.borderBottom = '1px solid #2E2E2E';
    mainNav.style.gap = '1.2rem';
  });
}

// Contact form submission via Formspree (AJAX so we can show inline feedback)
const form = document.getElementById('inquiry-form');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('.submit-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    status.className = 'form-status';
    status.textContent = '';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.className = 'form-status success';
        status.textContent = "Thanks — your inquiry has been sent. We'll be in touch shortly.";
        form.reset();
      } else {
        const data = await response.json().catch(() => null);
        status.className = 'form-status error';
        status.textContent = (data && data.errors)
          ? data.errors.map(err => err.message).join(', ')
          : 'Something went wrong. Please try again or email us directly.';
      }
    } catch (err) {
      status.className = 'form-status error';
      status.textContent = 'Network error — please try again or email us directly.';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Inquiry →';
    }
  });
}

// Contact page: prefill from a product "Request quote" link (?product=...&sector=...)
(function () {
  const params = new URLSearchParams(window.location.search);
  const product = params.get('product');
  const typeSel = document.getElementById('inquiry-type');
  const msg = document.getElementById('message');
  if (product && typeSel && msg) {
    typeSel.value = 'Product Enquiry';
    const sector = params.get('sector');
    msg.value = "I'd like a quote for: " + product + (sector ? ' (' + sector + ')' : '') + '.\n\nQuantity / specification: ';
  }
})();
