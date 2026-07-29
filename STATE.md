# PF Café — Website · Project State

> Last updated: 2026-07-29 · Status: 🟢 v2.0.3 deployed (branch `main-v2-fix-visuals`): https://khrystofor-main.github.io/pf-cafe-lex/ · дизайн-варианты переведены в переиспользуемые шаблоны (`templates/`)

## 2026-07-29 — `variants/` → `templates/`: шаблоны вместо сайта одного кафе

Пять вариантов перестали быть сайтом PF Café и стали заготовками, которые наполняются данными любого заведения. Решения пользователя: общий внешний конфиг + общий движок; контент PF Café остаётся демо-данными; темизация ограничена контентом и бренд-цветом (структура секций не переключается).

```
templates/assets/site.config.js          — ВСЕ данные заведения (demo: PF Café)
templates/assets/site.config.example.js  — пустой скелет с комментариями
templates/assets/site.js                 — движок: i18n, часы, галерея, меню, карусель, nav, reveal
templates/variant-1..5-*.html            — только разметка + CSS + свой JS варианта
templates/index.html                     — хаб (добавлена недостающая карточка варианта 3)
templates/README.md                      — инструкция «как сделать сайт для своего кафе»
```

- Подстановка через data-атрибуты: `data-site`, `data-site-href/-src/-alt`, `data-site-letters` (hero по буквам), `data-site-split` (двухцветное лого `PF <span>Café</span>`), `data-site-map`, `data-site-if`. `data-cs`/`data-en` остались для копирайта, принадлежащего дизайну варианта
- Массив `MENU` (~120 строк) был продублирован 5 раз и разошёлся между файлами — теперь единственный источник `SITE.menu.groups`, эталон взят из варианта 1
- Скрипты подключены как классические `<script src>` без модулей и `fetch`, чтобы шаблоны открывались по `file://`
- CSS-токены приведены к общему контракту: в каждом варианте добавлен `--brand`, старое имя акцента стало алиасом (`--accent:var(--brand)`, `--oxblood`, `--coral`, `--terra`, `--gold`). `SITE.brand.color` переопределяет `--brand`
- JS, специфичный для варианта (GSAP в 2/3/5, marquee в 3, parallax солнца в 4), остался в `<script>` в конце своего файла; на смену языка подписывается через `window.SITE_ON_LANG`
- Мелкие расхождения копирайта, которые накопились между вариантами, унифицированы по конфигу (hero-подзаголовок v5, подписи галереи v5, бейджи с часами в v3/v4)
- Корневой `index.html` (боевой сайт PF Café) не изменялся

## 2026-07-23 — Design-варианты (branch `claude/website-design-variants-087cb0`, папка позже переименована в `templates/`)

4 альтернативных дизайна текущего сайта (v2-структура: Hero → Galerie-карусель → Nabídka с ценами и фото → Návštěva) + хаб сравнения. Решения grill-me 2026-07-23: отдельные самодостаточные HTML-файлы; полный рестайл при том же порядке секций и дословном CZ/EN контенте; GSAP+ScrollTrigger с CDN разрешён (используют варианты 2 и 3, guard через `gsap.matchMedia('prefers-reduced-motion')`).

```
variants/index.html                 — хаб: 5 карточек (текущий v2 + 4 новых), свотчи палитр, ссылки
variants/variant-1-swiss.html       — Swiss Minimal: белый/чёрный/#E8442E, Space Grotesk+Inter, hairlines, vanilla
variants/variant-2-editorial.html   — Editorial Magazine: masthead-газета, Fraunces+Newsreader, номера секций, GSAP
variants/variant-3-playful.html     — Playful Retro: горчица/коралл/шоколад, Baloo 2+Nunito, стикеры/marquee, GSAP
variants/variant-4-terracotta.html  — Terracotta Mediterranean: песок/терракота/олива, Marcellus+Work Sans, арки, vanilla
```

- Все варианты содержат полный v2-функционал: карусель (стрелки/точки/счётчик/свайп/ping-pong autoplay/клавиатура), меню из `MENU`-массива (10 категорий, таб-поведение, note-блоки, dessert-strip, аллергены), CZ/EN (общий ключ `pf-cafe-lang`), часы с подсветкой «сегодня»
- Пути из `variants/`: фото `../photos/optimized/`, `../photos/menu-optimized/`
- Первая итерация вариантов была ошибочно собрана на v1-структуре (worktree создан от `main`); пересобрано на v2 после сверки с `main-v2`

## v2.0.3 (branch `main-v2-fix-visuals`)

- **Smooth hero parallax/zoom on mobile.** Hero image transform was applied directly from `scrollY` inside the scroll event; mobile scroll events arrive in bursts, so the zoom looked jerky on fast swipes. Now the scroll handler only records a target value and the image lerps toward it each frame (factor 0.12) — buttery smooth even on abrupt scrolls.
- **Fix: page auto-scrolled down to the menu/gallery on load.** The menu script called `setActive()` on page load, whose mobile tab-centering `scrollIntoView` pulled the viewport away from the hero. Tab centering now only happens on an actual tab click.

## v2.0.2 (branch `main-v2-fix-menu`)

- **Menu categories on mobile → single horizontal scrollable strip.** Previously the category pills wrapped onto many rows and covered half the phone screen. Now `flex-wrap:nowrap; overflow-x:auto` (scrollbar hidden) so all 10 categories sit in one line, swipeable left/right. Tapping a category auto-scrolls it to the center of the strip.
- **Menu shows only the selected category.** Replaced the scrollspy/all-groups-long-list with tab behavior: clicking a category switches which group is displayed (`display:none` on the others). Initial view shows "Kávové nápoje". Applies to both mobile and desktop. Switching a category always smooth-scrolls to the top of the items list.
- **Menu item cards redesigned.** Photo is now full-width on top (`aspect-ratio:4/3`, like gallery images) instead of a 72px side thumbnail; name + price sit in one row below the photo. Cards are vertical (`flex-direction:column`).
- **Menu item font: Playfair Display → Inter (600).** Playfair Display uses oldstyle (text) figures where digits have ascenders/descenders and visually "jump" up and down; Inter has lining figures, so names and prices now sit on one level. Headings elsewhere keep Playfair.
- **Menu items now translate on CZ→EN toggle.** Every MENU item got an English name (4th data slot); rendered `<b>` carries `data-cs`/`data-en` so `setLang()` picks it up like the rest of the page.
- **"Něco sladkého" photo strip fixed.** The 7 loose dessert photos (`dessert-strip`) are now rendered as regular menu-item cards (big photo, label "Domácí dezert — výběr na baru", price "—") instead of a bare image grid that looked like a bug.

## v2.0.1 (branch `main-v2-fix-galerie`)

- **Fix: touch swipe in gallery carousel on mobile.** Carousel drag used Pointer Events, but the viewport was missing `touch-action`, so the browser intercepted horizontal finger swipes as page scroll/pan and fired `pointercancel` — mouse drag worked, touch swipe didn't. Added `touch-action: pan-y` (vertical page scroll still works, horizontal swipes go to the carousel) + `-webkit-user-select: none` on `.carousel__viewport` (index.html:136).
- **Carousel no longer loops at the edges.** `go()` now clamps to `[0, N-1]` instead of modulo-wrapping, so slide 6 can't flip further (and slide 1 can't flip back) — no more fast rewind through all photos. Prev/next arrows get `disabled` + dimmed style at the edges; edge drags get rubber-band resistance (dx × 0.35) so the user feels the wall. Autoplay changed to ping-pong (reverses direction at the edges) instead of rewinding 6→1.

## v2.0 overview (branch `main-v2`)

Alternative version with simplified structure — only 3 content sections, in this order:

1. **Hero** — unchanged from v1.3
2. **Galerie** — **classic carousel** (arrows, dots, counter, swipe/drag, autoplay 5s, keyboard ←/→). No scroll-scrub drift. Same 6 photos.
3. **Nabídka (Menu)** — full real menu with **prices + photos**, rendered from a `MENU` JS data array (source: `cafe info/Menu.md`). 10 categories (Kávové nápoje … Nealkoholické drinky) with sticky sidebar/pills + scrollspy (same pattern as v1). Items with a photo show a 72px thumb; items without one show a dashed placeholder frame. Dessert photos that don't map to a single menu item are shown as a photo strip under "Něco sladkého". Allergen list at the bottom.
4. **Návštěva** — unchanged (also fixed `tel:` links to real number, was `+420****9064`).

- Section **Filozofie removed** (nav, HTML, CSS).
- Menu photos: `photos/menu photos/*.png` (originals) → compressed to `photos/menu-optimized/*.webp` (max 800px, q80, ~971 KB total, from ~13 MB).
- Photo mapping: 11 menu items have photos (Caffè e latte, Flat white, Espresso tonic, Chai/Matcha latte, 2× limonáda, Croissant, slaný francouzský toast, Lívance, Full English, Chléb s medem, Grilovaný Camembert); all others → placeholder.

## Goal

Real one-page scroll-driven animated website for **PF Café**, Brno (Dominikánské nám. 685/1A).
Mobile-first. Primary language Czech, EN toggle. Static photos only — animation is text + scroll-driven elements.

## Stack

| Layer | Choice | Notes |
|---|---|---|
| Markup | Single `index.html` (HTML+CSS+JS inline) | No build step, no frameworks |
| Fonts | Playfair Display (headings) + Inter (body) | Google Fonts CDN |
| Photos | WebP, q80, longest side 1920px | `photos/optimized/` (771 KB total, from 18.5 MB originals) |
| Animations | IntersectionObserver + vanilla JS scroll handlers | `prefers-reduced-motion` respected |
| i18n | `data-cs` / `data-en` attributes + `setLang()` | Persisted in `localStorage` (`pf-cafe-lang`) |
| Hosting | GitHub Pages | https://khrystofor-main.github.io/pf-cafe-lex/ — source branch `main-v2` |

## Locked decisions (grill-me, 2026-07-18)

1. **One-pager** with anchor nav (Filozofie / Nabídka / Galerie / Návštěva)
2. **Real site** (real address, phone, map) — not a demo
3. **Palette:** warm paper cream `#F6F1E7` bg, ink `#23201A`, green `#33523E` / `#22382B`, accent orange `#C8742C` (NOT dark #1A1A1E — café = cozy)
4. **Fonts:** Playfair Display + Inter
5. ~~**Menu without prices** — philosophy + categories only ("ask at the counter")~~ **Revised in v2:** full real menu **with prices + photos** (10 categories, ~90 items), rendered from the `MENU` JS array (source: `cafe info/Menu.md`)
6. **Photos compressed** to WebP (originals stay in `photos/demo/`, gitignored)
7. **Full CZ/EN dual** — every string translated, CZ default
8. **Animations:** IntersectionObserver base + vanilla JS for effects (option C — no GSAP, no pure CSS scroll-timeline)
9. **Scroll effects chosen:** B (sticky menu categories + scrollspy), C (horizontal gallery drift on vertical scroll), D (side slide-in text)
10. **Hours rounded to 9:00–22:00** (source JSON had quirky 9:09)
11. **No reservation button** — phone + map only
12. **Footer:** logo, address, phone, Google Maps link, photo credits

## Site structure

- **Hero** — full-viewport dark green, photo bg with parallax+slow-zoom on scroll, "PF Café" letters rise in one-by-one, badge ★4.7 (518 reviews), CTA "Kde nás najdete" → #navsteva, vertical scroll hint
- **Filozofie** — "Káva není spěch." text slides from left, photo un-zooms from right, stats row (4.7★ / 518 / 7/7)
- **Nabídka** — sticky category sidebar (desktop) / sticky chip pills (mobile), 4 groups: Káva, Snídaně, Dezerty, Nejen káva. Cards cascade in with 70ms stagger. Scrollspy highlights active category, click scrolls to group
- **Galerie** — dark green section, 6 photos in horizontal track; vertical page scroll drives `translateX` drift (scroll-driven horizontal gallery). Captions on gradient overlay
- **Návštěva** — address card, hours list (today highlighted in accent orange, computed via JS), phone card (`tel:` link), embedded Google Map (iframe from JSON's `mapsEmbedUrl`)
- **Footer** — logo, address, phone, Maps link, photo credits (Nathan Dumlao, Nadia Valko, Toa Heftiba / Unsplash)

## Data source

`cafe info/pf-cafe.json` — Google Places export. Key facts used:
- Name: PF Café · Rating 4.7 (518) · Daily 9:00–22:00 (rounded from 9:09)
- Address: Dominikánské nám. 685/1A, 602 00 Brno-střed
- Phone: +420 605 289 064
- Coords: 49.1937524, 16.6070308 (map embed)

## Files

```
index.html                 — entire site (32.6 KB)
photos/optimized/*.webp    — 6 compressed photos (771 KB total)
photos/demo/*.jpg          — originals, GITIGNORED (18.5 MB)
cafe info/pf-cafe.json     — source data
STATE.md                   — this file
IDEA.md                    — original one-line brief
```

## Changelog

### 2026-07-22 — v2.0 (branch `main-v2`)
- **Structure change:** removed Filozofie section; order is now Hero → Galerie → Nabídka → Návštěva (nav updated)
- **Galerie:** replaced scroll-driven horizontal drift with a classic carousel — prev/next buttons, pagination dots, 1/6 counter, pointer swipe/drag, keyboard arrows, 5s autoplay (pauses on hover). Same 6 photos and captions
- **Nabídka:** replaced 4 teaser categories with the full real menu from `cafe info/Menu.md` — 10 categories, ~90 items, all with prices. Menu data lives in a `MENU` JS array; section renders dynamically
- **Menu photos:** new `photos/menu-optimized/` (WebP, ≤800px, q80, 971 KB total, from ~13 MB PNGs in `photos/menu photos/`). 11 items matched to photos by name; 7 more dessert photos shown as a strip under "Něco sladkého"; missing photos get a dashed placeholder frame
- **Allergen list** added at bottom of menu
- Fixed `tel:` links to the real number +420 605 289 064 (was masked `+420****9064`)
- Verified: Playwright smoke test (desktop 1280px + mobile 390px), zero JS errors, no overflow

### 2026-07-18 — v1.3 (branch `fix/mobile-overflow-load`, deployed)
- **Mobile overflow fix:** page no longer zoomable/shifted on load in Safari (WebKit)
- Root cause: `overflow-x:hidden` ignored by Safari for transformed elements
- Fix: `overflow-x:clip` on html/body + `.gallery-sec`, `.gtrack-wrap`, `.philo-sec`, `.menu-sec`, `.visit-sec`
- Gallery track: added `translate3d(0,0,0)` initial state for compositor layer
- Performance: unified 3 scroll handlers into 1 rAF-throttled handler
- Verified: WebKit overflowAmount 24px → 0px, all smoke tests pass

### 2026-07-18 — v1.2 (branch `fix/badge-typography-layout`, deployed)
- Hero badge typography: ★ 4.7 now uses same sans font (Inter) and same .8rem size as "518 recenzí" / "Otevřeno denně 9–22" (was serif Playfair 1.15rem — visual mismatch)
- Badge layout: split into 2 stacked rows — rating+reviews on top, opening hours moved to bottom row
- Removed unused `|` separator (`.sep` now `display:none`, HTML cleaned)

### 2026-07-18 — v1.1 (branch `fix/badge-alignment-scroll-hint`, deployed)
- Hero badge: all items now vertically centered on one axis (`align-items:center`, was `baseline` — texts jumped)
- Scroll hint "posouvejte / scroll": centered horizontally via full-width flex (animation `fadeUp` used to override `translateX(-50%)` and break centering)
- Scroll hint: added visible static down-arrow SVG under the text (16px, explicit size attrs, `display:block`)
- Bug: SVG inside flex column without width/height attrs could collapse — fixed

## Next steps / open ideas

- [ ] User review pass: colors, animation timing, copy
- [x] ~~Possibly: real menu with prices if owner provides~~ — done in v2 (full menu with prices + photos)
- [ ] Possibly: OG meta tags + favicon before any public deploy
- [ ] Deploy target TBD (Netlify/Vercel/GitHub Pages) — repo is private for now

## Conventions

- Czech copy is source of truth; EN follows
- Animations: 0.7–0.9s, `cubic-bezier(.19,1,.22,1)` easing
- Radius 18px cards, 99px pills
- No frameworks, no build — keep it one file
