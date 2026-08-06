# Šablony webu pro kavárnu — Project State

> Last updated: 2026-07-30 · Status: 🟢 пять переиспользуемых шаблонов + хаб-портфолио · деплой v2.0.3: https://khrystofor-main.github.io/pf-cafe-lex/ · текущая ветка `templates-auto-theme`

> Проект начинался как сайт одного заведения (PF Café). Записи ниже 2026-07-29
> описывают ту стадию и оставлены как история — актуальную картину дают
> шапка, свежая запись и справочные разделы (Goal / Stack / Site structure / Files).

## 2026-08-06 — единая раскладка шаблонов: `templates/<вертикаль>/` + `_engine/`

Структура наслоилась исторически и к трём вертикалям пришла в трёх разных видах. Кафе было единственной вертикалью без своей папки: четыре шаблона лежали прямо в `templates/`, пятая (Warm Paper) — вообще вне, в `site/`, как остаток от времён, когда проект был сайтом одного заведения. Бар и бистро при этом давно стояли в `templates/<вертикаль>/`.

- **Фаза 1** — пять шаблонов кафе переехали в `templates/kavarna/`, папка `site/` удалена. Номера ушли из имён файлов: после удаления `variant-3` осталась череда `variant-1, -2, -4, -5`, а таблица в README говорила о шаблонах 1–5. Теперь имена по стилю (`swiss`, `editorial`, `terracotta`, `corporate-luxury`, `warm-paper`)
- **Фаза 2** — движок отделён от контента. `assets/` → `_engine/` (только `site.js`, `theme.js`, `config.example.js`), а конфиг демо-кафе уехал к шаблонам как `kavarna/cfg.kavarna.js`. Теперь все 20 шаблонов подключаются одинаково: свой `cfg.*.js` рядом + `../_engine/`
- **Конфиг кафе намеренно остался один на пять шаблонов** и на пять копий не разбивался: это пять дизайнов одного заведения, в том и смысл сравнения. Дублирование контента по вариантам уже случалось раньше и разъехалось (см. запись 2026-07-29), возвращать это не стали. У бара и бистро конфиги свои, потому что там пять *разных* заведений
- Ловушка, которую поймал чекер ссылок: после переноса `../index.html` в шаблонах кафе вёл в никуда — на глубине 2 нужен `../../index.html`, как у бара
- Оригиналы `photos/menu photos/` (18 PNG, 18,7 МБ) убраны из индекса; комментарий в `.gitignore` это утверждал давно, но правило покрывало только `photos/demo/`

## 2026-08-06 — блок «Web na míru» + страница услуги

Ветка `worktree-web-na-miru`. Хаб продавал одну модель — аренда готовой шаблоны за 300 Kč/měsíc; из сайта не было видно, что можно заказать сайт с нуля. Решения пользователя: отдельная страница, а не якорь; пунктирная рамка как отличие от витрин; ярлык «Na míru» вместо «Šablona 6».

Ветка была написана до перехода хаба на витрины с табами и опиралась на сетку `.card`, которой в `index.html` больше нет. Поэтому интеграция переписана с нуля поверх текущего `main`, а не смёржена: два исходных коммита сохранены в `backup/web-na-miru-pre-rebase`.

- `index.html` — четвёртый блок `.showcase.showcase--custom` в конце `#sablony`, после витрин кафе/бистро/бара. Переиспользует оболочку `.showcase` и типографику `.showcase-info`, но без табов и iframe-превью: услуга одна, переключать нечего. Отличается пунктирной рамкой на `--line-strong` (обычная `--line` на тёмном фоне не читается) и крупным `+` вместо свотчей
- Цена «1000 Kč» стоит бейджем рядом с плюсом, а не отдельной строкой; секция `#cena` осталась одной панелью — сайт на заказ подробно описан на своей странице, дублировать его в прайсе незачем
- `na-miru.html` — страница услуги в стиле хаба: hero, «Co je součástí» (индивидуальный дизайн, расширенные функции), «Jak to probíhá» (4 шага), прайс, CTA на `mailto:` с заполненными темой и телом. Переключатель темы и анти-FOUC скопированы из хаба, ключ `localStorage` тот же (`theme`), поэтому тема переносится между страницами

## 2026-07-30 — ночная тема по времени + Warm Paper как пятая шаблона

Ветка `templates-auto-theme`. Решения пользователя: автосмену темы делать **только** в шаблонах, хаб оставить с ручным переключателем; Warm Paper — не демо-сайт PF Café, а полноценная пятая шаблона, в которую так же вставляются данные любого кафе.

- `templates/assets/theme.js` — общий движок темы. Час читается через `Intl` для `Europe/Prague` (летнее время само), граница дня/ночи — по реальным восходу/закату в ЧР по месяцам + 30 мин сумерек. Скрипт в `<head>` до отрисовки, поэтому ночью не мелькает светлый фон; из-за этого `site.config.js` тоже подключён в шапке
- Приоритет: ручной выбор (кнопка в навигации, TTL 12 ч) → время в Праге → `theme.default`. `prefers-color-scheme` **сознательно не используется**: у многих телефон в тёмном режиме постоянно, и сайт кафе выглядел бы тёмным в полдень
- У каждой из пяти шаблон своя ночная палитра в блоке `html[data-theme="dark"]`; цвета натвердо заменены семантическими токенами (`--on-ink`, `--deep`, `--card-bg`, `--raised-bg`, `--on-terra`, `--on-cream`…), карты в тёмной теме инвертируются фильтром
- `brand.color` работает и ночью: акцент осветляется через `color-mix`, а не переопределяется фиксированным цветом
- **Warm Paper (`site/index.html`) переведён на общий движок** — 749 → 493 строки. Меню (10 категорий, ~90 позиций), галерея, аллергены, часы, карта строятся из `site.config.js` через `data-site`; свой JS остался только на параллакс героя и боковые наезды `.reveal-left/-right`. Убран `<base href="../">`, добавлен `--brand`
- Нумерация шаблон 1–5 приведена к карточкам хаба (Warm Paper = 1); в хабе снят ярлык «Referenční web»
- Починена ссылка «← Všechny šablony» во всех вариантах: вела на несуществующий `templates/index.html` вместо корневого хаба
- Хаб (`index.html`) получил ночную тему отдельно: ручной переключатель + `prefers-color-scheme`, без привязки ко времени

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

**Five reusable one-page templates** for cafés and small businesses, plus the
hub of the **Rosa Web** studio that shows them off (agency voice, team section
with both designers at the bottom). A new client site = fill in one config file,
pick a template. Mobile-first, Czech primary with an EN toggle, static photos
only — animation is text + scroll-driven elements.

PF Café (Brno, Dominikánské nám. 685/1A) is the **demo content** every template
ships with, not the product.

## Stack

| Layer | Choice | Notes |
|---|---|---|
| Markup | One self-contained HTML per template (HTML+CSS inline) | No build step, no frameworks |
| Content | `templates/kavarna/cfg.kavarna.js` | Single source for all five templates |
| Engine | `templates/_engine/site.js` | i18n, hours, gallery, menu, carousel, nav, reveal |
| Theme | `templates/_engine/theme.js` | Light by day / dark after dusk, `Europe/Prague` |
| Fonts | Per template, Google Fonts CDN | Warm Paper: Playfair Display + Inter |
| Photos | WebP, q80, longest side 1920px (menu ≤800px) | `photos/optimized/`, `photos/menu-optimized/` |
| Animations | IntersectionObserver + vanilla JS; GSAP in templates 3 and 5 | `prefers-reduced-motion` respected |
| i18n | `data-cs` / `data-en` attributes + `setLang()` | Persisted in `localStorage` (`pf-cafe-lang`) |
| Hosting | GitHub Pages | https://khrystofor-main.github.io/pf-cafe-lex/ — source branch `main-v2` |

## Locked decisions (grill-me, 2026-07-18)

1. **One-pager** with anchor nav ~~(Filozofie / Nabídka / Galerie / Návštěva)~~ **Revised in v2:** Galerie / Nabídka / Návštěva — Filozofie dropped
2. ~~**Real site** (real address, phone, map) — not a demo~~ **Revised 2026-07-29/30:** the deliverable is a set of templates; PF Café data stays as demo content
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

All five templates share the same section order and content; only the visual
character differs. Everything below is built by `site.js` from the config.

- **Hero** — brand name animated letter by letter, subtitle, CTA → #navsteva, rating badge (★ score + review count, hidden when `rating:null`), hours summary
- **Galerie** — classic carousel: arrows, dots, 1/6 counter, pointer swipe/drag, keyboard ←/→, 5s ping-pong autoplay. Slides come from `SITE.gallery`
- **Nabídka** — category tabs (sidebar in Warm Paper, pills/strip elsewhere), one group visible at a time, note blocks, dessert strip, allergen list. 10 categories, ~90 items from `SITE.menu.groups`
- **Návštěva** — address card, hours list (today highlighted, computed via JS), phone card (`tel:` link), embedded Google Map from `contact.mapCoords`
- **Footer** — logo, address, phone, Maps link, photo credits, back-link to the hub
- **Nav** — logo, section anchors, CZ/EN toggle, theme toggle; gains `.scrolled` past 40px

Hub (`index.html`) is a separate portfolio page: hero with portrait, three
tabbed showcases (kavárna / bistro / bar) with lazy iframe previews, a
"web na míru" block linking to `na-miru.html`, price, contacts + message form.

## Data source

`cafe info/pf-cafe.json` — Google Places export, source of the **demo** content
that now lives in `templates/kavarna/cfg.kavarna.js`. Key facts used:
- Name: PF Café · Rating 4.7 (518) · Daily 9:00–22:00 (rounded from 9:09)
- Address: Dominikánské nám. 685/1A, 602 00 Brno-střed
- Phone: +420 605 289 064
- Coords: 49.1937524, 16.6070308 (map embed)

## Files

```
index.html                          — hub Rosa Web (own dark theme, manual toggle)
na-miru.html                        — landing page for the custom-build add-on service
templates/
  _engine/site.js                   — shared engine, knows nothing about content
  _engine/theme.js                  — light/dark by time in Czechia
  _engine/config.example.js         — empty skeleton with comments
  kavarna/                          — 5 templates, one venue type, 5 design styles
    cfg.kavarna.js                  — ALL café data (demo: generic "Kavárna"),
                                      shared by all five on purpose
    warm-paper.html                 — Warm Paper (paper cream, greenery)
    swiss.html                      — Swiss Minimal
    editorial.html                  — Editorial (GSAP)
    terracotta.html                 — Terracotta
    corporate-luxury.html           — Corporate Luxury (GSAP)
  bistro/<cuisine>.html + cfg.*.js  — 5 templates by cuisine, one config each
  bar/<venue>.html + cfg.*.js       — 5 templates by venue type, one config each
  README.md                         — "how to build a site for your café"
photos/optimized/*.webp             — hero + gallery (café)
photos/menu-optimized/*.webp        — menu items (café)
photos/bar/, photos/bistro/         — per-template photo sets
photos/demo/, photos/menu photos/   — originals, GITIGNORED (kept on disk)
cafe info/pf-cafe.json              — demo source data (Google Places export)
STATE.md                            — this file
IDEA.md                             — original one-line brief
```

All three verticals follow one layout: `templates/<vertical>/<name>.html` with
its `cfg.*.js` next to it; the engine sits apart in `templates/_engine/` and
holds no content. Café templates are named by design style, bar and bistro by
venue subtype — the axis differs because the café set is one venue in five
looks, the other two are five venues. For the same reason the café templates
share a single config while bar and bistro get one per template.

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
- [ ] Merge `templates-auto-theme` into `main-v2`

## Conventions

- Czech copy is source of truth; EN follows
- Content belongs in the vertical's `cfg.*.js`; typography, layout and animation belong in the template
- Both themes share one rule — colors go through tokens, never hardcoded per theme
- Animations: 0.7–0.9s, `cubic-bezier(.19,1,.22,1)` easing (Warm Paper; other templates set their own)
- Radius 18px cards, 99px pills (Warm Paper)
- No frameworks, no build — one template = one file, openable over `file://`
