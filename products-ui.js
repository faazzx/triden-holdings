// Renders product cards from CATALOGUE (see products.js).
// Must load BEFORE script.js so the scroll-reveal picks up the new cards.

(function () {
  if (typeof CATALOGUE === 'undefined') return;

  const PLACEHOLDER_SVG =
    '<svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">' +
    '<path d="M32 6 56 19v26L32 58 8 45V19z"/><path d="M8 19l24 13 24-13M32 32v26"/></svg>';

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));

  const norm = (item) => (typeof item === 'string' ? { name: item } : item);

  function enquiryLink(name, sectorName) {
    return 'contact.html?product=' + encodeURIComponent(name) +
           '&sector=' + encodeURIComponent(sectorName) + '#inquiry-form';
  }

  function cardHTML(item, number, sector) {
    const p = norm(item);
    const img = p.image
      ? '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" loading="lazy">'
      : '<div class="product-placeholder">' + PLACEHOLDER_SVG + '</div>';
    return (
      '<article class="product-card reveal">' +
        '<div class="product-img">' + img +
          '<span class="product-num">' + String(number).padStart(2, '0') + '</span>' +
        '</div>' +
        '<div class="product-body">' +
          (sector.showSector ? '<div class="product-sector">' + esc(sector.name) + '</div>' : '') +
          '<h4>' + esc(p.name) + '</h4>' +
          '<a class="product-enquire" href="' + enquiryLink(p.name, sector.name) + '">Request quote →</a>' +
        '</div>' +
      '</article>'
    );
  }

  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  // ---------- Sector page ----------
  const groupsEl = document.getElementById('product-groups');
  if (groupsEl) {
    const sector = CATALOGUE.find((s) => s.id === groupsEl.dataset.sector);
    if (sector) {
      let n = 0;
      const jump = document.getElementById('group-jump');
      if (jump && sector.groups.length > 1) {
        jump.innerHTML = sector.groups
          .map((g) => '<a href="#' + slug(g.name) + '">' + esc(g.name) + '</a>').join('');
      }
      groupsEl.innerHTML = sector.groups.map((g) => {
        const cards = g.items.map((it) => cardHTML(it, ++n, sector)).join('');
        return (
          '<div class="product-group" id="' + slug(g.name) + '">' +
            '<div class="group-head"><h3>' + esc(g.name) + '</h3>' +
            '<span>' + g.items.length + ' products</span></div>' +
            '<div class="product-grid">' + cards + '</div>' +
          '</div>'
        );
      }).join('');
    }
  }

  // ---------- Hub: sector cards ----------
  const sectorCardsEl = document.getElementById('sector-cards');
  if (sectorCardsEl) {
    sectorCardsEl.innerHTML = CATALOGUE.map((s, i) => {
      const count = s.groups.reduce((t, g) => t + g.items.length, 0);
      return (
        '<a class="sector-card reveal" href="' + s.page + '">' +
          '<div class="sector-num">0' + (i + 1) + '</div>' +
          '<h3>' + esc(s.name) + '</h3>' +
          '<p>' + esc(s.blurb) + '</p>' +
          '<div class="sector-foot"><span>' + count + ' products</span><span>View range →</span></div>' +
        '</a>'
      );
    }).join('');
  }

  // ---------- Hub: searchable full list ----------
  const allEl = document.getElementById('all-products');
  if (allEl) {
    const searchEl = document.getElementById('product-search');
    const filtersEl = document.getElementById('sector-filters');
    const countEl = document.getElementById('result-count');
    let activeSector = 'all';

    filtersEl.innerHTML =
      '<button class="filter-btn active" data-sector="all">All</button>' +
      CATALOGUE.map((s) => '<button class="filter-btn" data-sector="' + s.id + '">' + esc(s.name) + '</button>').join('');

    function render() {
      const q = searchEl.value.trim().toLowerCase();
      let html = '';
      let total = 0;
      CATALOGUE.forEach((s) => {
        if (activeSector !== 'all' && activeSector !== s.id) return;
        let n = 0;
        s.groups.forEach((g) => g.items.forEach((it) => {
          n++;
          const p = norm(it);
          if (q && (p.name + ' ' + g.name + ' ' + s.name).toLowerCase().indexOf(q) === -1) return;
          total++;
          html += cardHTML(it, n, { name: s.name, showSector: true });
        }));
      });
      allEl.innerHTML = html || '<p class="no-results">No products match your search. We source hard-to-find items — <a href="contact.html">send us your requirement</a>.</p>';
      countEl.textContent = total + (total === 1 ? ' product' : ' products');
      // cards injected after load: reveal them straight away
      allEl.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
    }

    filtersEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      filtersEl.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeSector = btn.dataset.sector;
      render();
    });
    searchEl.addEventListener('input', render);
    render();
  }
})();
