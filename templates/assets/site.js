/* ============================================================
   SITE ENGINE — sdílená logika všech šablon.
   Data čte z window.SITE (assets/site.config.js).
   Vzhled a rozvržení zůstávají v HTML/CSS každé varianty.

   Volitelné nastavení varianty (před načtením tohoto souboru):
     window.TEMPLATE = {
       letterClass:'ch',        // třída písmen v hero titulku
       letterIndexVar:true,     // nastavit --i na každém písmenu
       placeholderIcon:'☕'      // zástupný obsah karty jídla bez fotky
     };

   Hooky varianty (marquee apod.):
     window.SITE_ON_LANG = [];  // pole funkcí volaných při změně jazyka

   Datové atributy v HTML:
     data-site="brand.name"        → textContent (objekt {cs,en} se přeloží)
     data-site-href / -src / -alt  → atribut
     data-site-letters="brand.name"→ rozsekat na <span> písmena
     data-site-map                 → src embedované mapy z contact.mapCoords
     data-site-if="rating"         → prvek se skryje, když je hodnota prázdná
   ============================================================ */
(function () {
  'use strict';

  var S = window.SITE;
  if (!S) { console.error('[site] window.SITE není definováno — chybí assets/site.config.js'); return; }

  var T = window.TEMPLATE || {};
  var LETTER_CLASS = T.letterClass || 'ch';
  var PH_ICON = T.placeholderIcon ||
    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg>';

  var LANGS = (S.lang && S.lang.available) || ['cs'];
  var DEFAULT_LANG = (S.lang && S.lang.default) || LANGS[0];
  var LANG_KEY = (S.lang && S.lang.storageKey) || 'site-lang';
  var LANG = DEFAULT_LANG;

  var DAY_NAMES = {
    cs: ['pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota', 'neděle'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  };

  /* ---------- helpers ---------- */
  function get(path) {
    return path.split('.').reduce(function (o, k) {
      return (o === null || o === undefined) ? o : o[k];
    }, S);
  }
  function t(v, lang) {
    if (v === null || v === undefined) return '';
    if (typeof v === 'object') return v[lang] !== undefined ? v[lang] : (v[DEFAULT_LANG] || '');
    return String(v);
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }
  function $(id) { return document.getElementById(id); }
  function all(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }
  function langAttrs(v) {
    // vrátí data-cs="…" data-en="…" pro dvojjazyčnou hodnotu
    return LANGS.map(function (l) { return 'data-' + l + '="' + esc(t(v, l)) + '"'; }).join(' ');
  }
  function menuPhoto(file) {
    if (!file) return null;
    var base = (S.menu && S.menu.photoBase) || '';
    var ext = (S.menu && S.menu.photoExt) || '';
    var name = ext ? file.replace(/\.(png|jpg|jpeg|webp)$/i, ext) : file;
    return encodeURI(base + name);
  }

  /* ---------- obsah z konfigu do statické značky ---------- */
  function applyContent(lang) {
    all('[data-site]').forEach(function (el) {
      el.textContent = t(get(el.dataset.site), lang);
    });
    all('[data-site-href]').forEach(function (el) { el.setAttribute('href', t(get(el.dataset.siteHref), lang)); });
    all('[data-site-src]').forEach(function (el) { el.setAttribute('src', t(get(el.dataset.siteSrc), lang)); });
    all('[data-site-alt]').forEach(function (el) { el.setAttribute('alt', t(get(el.dataset.siteAlt), lang)); });
    // "PF Café" → "PF <span>Café</span>" (dvoubarevné logo některých variant)
    all('[data-site-split]').forEach(function (el) {
      var text = t(get(el.dataset.siteSplit), lang).trim();
      var sp = text.indexOf(' ');
      el.textContent = '';
      if (sp === -1) { el.textContent = text; return; }
      el.appendChild(document.createTextNode(text.slice(0, sp + 1)));
      var s = document.createElement('span');
      s.textContent = text.slice(sp + 1);
      el.appendChild(s);
    });
    all('[data-site-if]').forEach(function (el) {
      var v = get(el.dataset.siteIf);
      if (v === null || v === undefined || v === '' || (Array.isArray(v) && !v.length)) el.hidden = true;
    });
  }

  function applyHead(lang) {
    if (S.brand && S.brand.title) {
      var suffix = document.documentElement.dataset.variantName;
      document.title = t(S.brand.title, lang) + (suffix ? ' · ' + suffix : '');
    }
    var meta = document.querySelector('meta[name="description"]');
    if (meta && S.brand && S.brand.description) meta.setAttribute('content', t(S.brand.description, lang));
    document.documentElement.lang = lang;
  }

  /* ---------- hero titulek po písmenech ---------- */
  function buildLetterTitles() {
    all('[data-site-letters]').forEach(function (el) {
      var text = t(get(el.dataset.siteLetters), LANG);
      el.setAttribute('aria-label', text);
      el.innerHTML = '';
      text.split('').forEach(function (ch, i) {
        var s = document.createElement('span');
        s.className = LETTER_CLASS;
        if (T.letterIndexVar) s.style.setProperty('--i', i);
        s.textContent = ch === ' ' ? ' ' : ch;
        el.appendChild(s);
      });
    });
  }

  /* ---------- otevírací doba ---------- */
  function buildHours(lang) {
    var ul = $('hoursList');
    if (!ul) return;
    var names = DAY_NAMES[lang] || DAY_NAMES[DEFAULT_LANG] || DAY_NAMES.en;
    var h = S.hours || {};
    var todayIdx = (new Date().getDay() + 6) % 7;
    ul.innerHTML = names.map(function (d, i) {
      var val = h.perDay ? h.perDay[i] : h.uniform;
      if (!val) val = (lang === 'cs' ? 'zavřeno' : 'closed');
      return '<li class="' + (i === todayIdx ? 'today' : '') + '"><span>' + esc(d) + '</span><span>' + esc(val) + '</span></li>';
    }).join('');
  }

  /* ---------- galerie ---------- */
  function buildGallery() {
    var track = $('carTrack');
    if (!track || !S.gallery) return;
    track.innerHTML = S.gallery.map(function (g) {
      return '<figure class="carousel__slide"><img src="' + esc(g.src) + '" alt="' + esc(t(g.alt, DEFAULT_LANG)) + '" loading="lazy">' +
        (g.caption ? '<figcaption ' + langAttrs(g.caption) + '>' + esc(t(g.caption, DEFAULT_LANG)) + '</figcaption>' : '') +
        '</figure>';
    }).join('');
  }

  /* ---------- mapa ---------- */
  function buildMap() {
    all('[data-site-map]').forEach(function (el) {
      var c = S.contact || {};
      if (!c.mapCoords) { el.hidden = true; return; }
      el.src = 'https://www.google.com/maps?q=' + encodeURIComponent(c.mapCoords) + '&z=' + (c.mapZoom || 16) + '&output=embed';
      el.title = (S.brand ? S.brand.name : '') + ' map';
    });
  }

  /* ---------- alergeny ---------- */
  function buildAllergens() {
    var box = $('allergenList');
    if (!box) return;
    var list = (S.menu && S.menu.allergens) || [];
    if (!list.length) { var sec = box.closest('.menu-group'); if (sec) sec.hidden = true; return; }
    box.innerHTML = list.map(function (a) {
      return '<b>' + esc(a.code) + '</b> – <span ' + langAttrs(a.label) + '>' + esc(t(a.label, DEFAULT_LANG)) + '</span>';
    }).join(' · ');
  }

  /* ---------- menu (záložky kategorií) ---------- */
  function buildMenu() {
    var catsBox = $('menuCats');
    var groupsBox = $('menuGroups');
    if (!catsBox || !groupsBox) return;
    var groups = (S.menu && S.menu.groups) || [];
    var stripLabel = (S.menu && S.menu.stripLabel) || { cs: '', en: '' };

    catsBox.innerHTML = '';
    groupsBox.innerHTML = '';

    groups.forEach(function (g, i) {
      var b = document.createElement('button');
      b.className = 'menu-cat' + (i === 0 ? ' active' : '');
      b.dataset.target = g.id;
      LANGS.forEach(function (l) { b.dataset[l] = t(g.title, l); });
      b.textContent = t(g.title, DEFAULT_LANG);
      catsBox.appendChild(b);

      var grp = document.createElement('div');
      grp.className = 'menu-group';
      grp.id = g.id;

      var html = '<h3 ' + langAttrs(g.title) + '>' + esc(t(g.title, DEFAULT_LANG)) + '</h3>';
      if (g.note) html += '<div class="menu-note" ' + langAttrs(g.note) + '>' + esc(t(g.note, DEFAULT_LANG)) + '</div>';

      html += '<div class="menu-items">';
      (g.items || []).forEach(function (it) {
        var url = menuPhoto(it.photo);
        var ph = url
          ? '<div class="menu-item__ph"><img src="' + url + '" alt="" loading="lazy"></div>'
          : '<div class="menu-item__ph menu-item__ph--empty">' + PH_ICON + '</div>';
        html += '<div class="menu-item">' + ph +
          '<div class="menu-item__body"><b ' + langAttrs(it.name) + '>' + esc(t(it.name, DEFAULT_LANG)) + '</b>' +
          '<div class="menu-item__price">' + esc(it.price || '') + '</div></div></div>';
      });
      html += '</div>';

      if (g.strip && g.strip.length) {
        html += '<div class="menu-items">' + g.strip.map(function (s) {
          return '<div class="menu-item in"><div class="menu-item__ph"><img src="' + menuPhoto(s) + '" alt="" loading="lazy"></div>' +
            '<div class="menu-item__body"><b ' + langAttrs(stripLabel) + '>' + esc(t(stripLabel, DEFAULT_LANG)) + '</b>' +
            '<div class="menu-item__price">—</div></div></div>';
        }).join('') + '</div>';
      }

      grp.innerHTML = html;
      groupsBox.appendChild(grp);
    });

    var cats = Array.prototype.slice.call(catsBox.children);
    if (!cats.length) return;
    var groupEls = cats.map(function (c) { return $(c.dataset.target); });

    function setActive(id, centerTab) {
      cats.forEach(function (c) { c.classList.toggle('active', c.dataset.target === id); });
      groupEls.forEach(function (g) { g.style.display = (g.id === id) ? '' : 'none'; });
      var active = cats.filter(function (c) { return c.dataset.target === id; })[0];
      if (centerTab && active) active.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
    setActive(cats[0].dataset.target, false);

    cats.forEach(function (c) {
      c.addEventListener('click', function () {
        setActive(c.dataset.target, true);
        var nav = $('nav');
        var top = groupsBox.getBoundingClientRect().top + window.scrollY - (nav ? nav.offsetHeight : 0) - 70;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });

    all('.menu-items').forEach(function (gr) {
      Array.prototype.slice.call(gr.children).forEach(function (it, i) {
        it.style.transitionDelay = Math.min(i * 50, 500) + 'ms';
      });
    });
  }

  /* ---------- i18n ---------- */
  function setLang(l) {
    if (LANGS.indexOf(l) === -1) l = DEFAULT_LANG;
    LANG = l;
    try { localStorage.setItem(LANG_KEY, l); } catch (e) { /* private mode */ }

    var sel = LANGS.map(function (x) { return '[data-' + x + ']'; }).join(',');
    all(sel).forEach(function (el) {
      var v = el.dataset[l];
      if (v !== undefined) el.textContent = v;
    });

    LANGS.forEach(function (x) {
      var btn = $('btn-' + x);
      if (btn) btn.classList.toggle('active', x === l);
    });

    applyContent(l);
    applyHead(l);
    buildHours(l);
    (window.SITE_ON_LANG || []).forEach(function (fn) { try { fn(l); } catch (e) { console.error(e); } });
  }
  window.setLang = setLang;

  /* ---------- nav scroll state ---------- */
  function initNav() {
    var nav = $('nav');
    if (!nav) return;
    var ticking = false;
    addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () { nav.classList.toggle('scrolled', scrollY > 40); ticking = false; });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ---------- karusel ---------- */
  function initCarousel() {
    var track = $('carTrack');
    var viewport = $('carViewport');
    if (!track || !viewport) return;
    var slides = Array.prototype.slice.call(track.children);
    if (!slides.length) return;
    var dotsBox = $('carDots');
    var counter = $('carCounter');
    var btnPrev = $('carPrev');
    var btnNext = $('carNext');
    var idx = 0;

    var dots = [];
    if (dotsBox) {
      dotsBox.innerHTML = '';
      slides.forEach(function (_, i) {
        var d = document.createElement('button');
        d.className = 'carousel__dot' + (i === 0 ? ' active' : '');
        d.setAttribute('aria-label', 'Slide ' + (i + 1));
        d.addEventListener('click', function () { go(i); resetAuto(); });
        dotsBox.appendChild(d);
      });
      dots = Array.prototype.slice.call(dotsBox.children);
    }

    function go(i) {
      idx = Math.max(0, Math.min(slides.length - 1, i));
      track.style.transform = 'translateX(' + (-idx * 100) + '%)';
      dots.forEach(function (d, j) { d.classList.toggle('active', j === idx); });
      if (counter) counter.textContent = (idx + 1) + ' / ' + slides.length;
      if (btnPrev) btnPrev.disabled = (idx === 0);
      if (btnNext) btnNext.disabled = (idx === slides.length - 1);
    }
    if (btnPrev) btnPrev.addEventListener('click', function () { go(idx - 1); resetAuto(); });
    if (btnNext) btnNext.addEventListener('click', function () { go(idx + 1); resetAuto(); });
    go(0);

    // drag / swipe
    var startX = null, dx = 0;
    viewport.addEventListener('pointerdown', function (e) {
      startX = e.clientX; dx = 0;
      viewport.classList.add('dragging');
      track.style.transition = 'none';
      viewport.setPointerCapture(e.pointerId);
    });
    viewport.addEventListener('pointermove', function (e) {
      if (startX === null) return;
      dx = e.clientX - startX;
      if ((idx === 0 && dx > 0) || (idx === slides.length - 1 && dx < 0)) dx *= 0.35;
      track.style.transform = 'translateX(calc(' + (-idx * 100) + '% + ' + dx + 'px))';
    });
    function endDrag() {
      if (startX === null) return;
      viewport.classList.remove('dragging');
      track.style.transition = '';
      if (Math.abs(dx) > 60) go(idx + (dx < 0 ? 1 : -1)); else go(idx);
      startX = null; dx = 0; resetAuto();
    }
    viewport.addEventListener('pointerup', endDrag);
    viewport.addEventListener('pointercancel', endDrag);

    // klávesnice
    viewport.tabIndex = 0;
    viewport.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { go(idx - 1); resetAuto(); }
      if (e.key === 'ArrowRight') { go(idx + 1); resetAuto(); }
    });

    // autoplay (ping-pong)
    var dir = 1, auto = null;
    function tick() { if (idx === slides.length - 1) dir = -1; else if (idx === 0) dir = 1; go(idx + dir); }
    function resetAuto() { clearInterval(auto); auto = setInterval(tick, 5000); }
    resetAuto();
    viewport.addEventListener('pointerenter', function () { clearInterval(auto); });
    viewport.addEventListener('pointerleave', resetAuto);

    addEventListener('resize', function () { go(idx); });
  }

  /* ---------- reveal ---------- */
  function initReveal() {
    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    all('.reveal,.menu-item,.rule').forEach(function (el) { io.observe(el); });
  }

  /* ---------- init ---------- */
  if (S.brand && S.brand.color) document.documentElement.style.setProperty('--brand', S.brand.color);

  buildGallery();
  buildMenu();
  buildAllergens();
  buildMap();
  initNav();
  initCarousel();

  var saved = null;
  try { saved = localStorage.getItem(LANG_KEY); } catch (e) { /* ignore */ }
  setLang(saved || DEFAULT_LANG);
  buildLetterTitles();   // až po setLang — GSAP animace písmen běží jen jednou

  var y = $('year');
  if (y) y.textContent = new Date().getFullYear();

  initReveal();
})();
