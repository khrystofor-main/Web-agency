# PF Café — Website · Project State

> Last updated: 2026-07-18 · Status: 🟢 v1.1 deployed (branch `fix/badge-alignment-scroll-hint`)

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
| Hosting | GitHub Pages | https://khrystofor-main.github.io/pf-cafe-lex/ — source branch `fix/badge-alignment-scroll-hint` |

## Locked decisions (grill-me, 2026-07-18)

1. **One-pager** with anchor nav (Filozofie / Nabídka / Galerie / Návštěva)
2. **Real site** (real address, phone, map) — not a demo
3. **Palette:** warm paper cream `#F6F1E7` bg, ink `#23201A`, green `#33523E` / `#22382B`, accent orange `#C8742C` (NOT dark #1A1A1E — café = cozy)
4. **Fonts:** Playfair Display + Inter
5. **Menu without prices** — philosophy + categories only ("ask at the counter")
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

### 2026-07-18 — v1.1 (branch `fix/badge-alignment-scroll-hint`, deployed)
- Hero badge: all items now vertically centered on one axis (`align-items:center`, was `baseline` — texts jumped)
- Scroll hint "posouvejte / scroll": centered horizontally via full-width flex (animation `fadeUp` used to override `translateX(-50%)` and break centering)
- Scroll hint: added visible static down-arrow SVG under the text (16px, explicit size attrs, `display:block`)
- Bug: SVG inside flex column without width/height attrs could collapse — fixed

## Next steps / open ideas

- [ ] User review pass: colors, animation timing, copy
- [ ] Possibly: real menu with prices if owner provides
- [ ] Possibly: OG meta tags + favicon before any public deploy
- [ ] Deploy target TBD (Netlify/Vercel/GitHub Pages) — repo is private for now

## Conventions

- Czech copy is source of truth; EN follows
- Animations: 0.7–0.9s, `cubic-bezier(.19,1,.22,1)` easing
- Radius 18px cards, 99px pills
- No frameworks, no build — keep it one file
