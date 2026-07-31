# Šablony webu pro bistro

**Pět** jednostránkových šablon, každá pro jinou kuchyni. Sdílí stejný engine
jako šablony pro kavárnu (`../assets/site.js`, `../assets/theme.js`), obsah
konkrétního podniku je vždy v jednom souboru `cfg.*.js`.

| Šablona | Soubor | Kuchyně | Styl | Písma |
|---|---|---|---|---|
| 1 | `ceska.html` | česká | Hospodská tabule — papír, křídová deska, smaltové cedule | Bitter + Source Sans 3 |
| 2 | `vietnamska.html` | vietnamská | Street Food — indigo, limetka, oblé karty, miska phở | Be Vietnam Pro + Manrope |
| 3 | `japonska.html` | japonská | Ma — prázdno, vlásečnicové linky, rumělkový kruh | Noto Serif JP + Inter |
| 4 | `italska.html` | italská | Trattoria — markýza, dlaždice cementine, dvojité rámečky | Libre Baskerville + Karla |
| 5 | `plant-based.html` | veganská / rostlinná | Zelený minimal — matcha, hlína, měkké tvary, listy | DM Serif Display + Nunito Sans |

Číslování odpovídá tabům na kartě „Šablony pro bistro“ v rozcestníku
(`../../index.html`). Demo obsah je ilustrační — žádný skutečný podnik.

## Fotky: zatím žádné

Tahle sada je záměrně **bez fotografií**. Hero, sekce „Atmosféra“ i zástupné
destičky u položek menu jsou kreslené čistě v CSS (gradienty, vzory, tvary),
takže šablona vypadá hotově i bez fotobanky a funguje offline.

Až budou fotky konkrétního podniku, doplní se do `cfg.*.js` a engine je
vykreslí sám — HTML se nemusí sahat, jen se odkomentuje/přidá:

- `hero.image` + `hero.imageAlt` → hero fotka (v HTML doplňte
  `<img data-site-src="hero.image" data-site-alt="hero.imageAlt">` místo
  kresleného objektu, případně jako pozadí)
- `gallery: [{ src, alt, caption }]` → karusel; pak do HTML přidejte blok
  `#carViewport` / `#carTrack` / `#carDots` podle
  `../variant-1-swiss.html`
- `menu.photoBase`, `menu.photoExt` a `photo` u položek → fotky jídel;
  `.menu-item__ph--empty` se sám přestane používat

## Nový web za pár kroků

1. Vyberte šablonu a zkopírujte ji spolu s `cfg.*.js` a složkou
   `../assets/` do nového projektu.
2. Vyplňte `cfg.*.js`: název, kontakty, otevírací dobu, hero text, menu,
   alergeny. Struktura a komentáře jsou v `../assets/site.config.example.js`.
3. Přejmenujte zvolenou šablonu na `index.html` a opravte cesty ke skriptům
   (`../assets/…` → `assets/…`).
4. Otevřete v prohlížeči a projděte všechny sekce, oba jazyky a obě témata.

## Co šablony umí

Všechno, co umí sada pro kavárnu — přepínač CZ/EN, noční téma podle času
v Česku s ručním přepínačem, záložky kategorií menu, alergeny, vloženou mapu,
reveal animace a `prefers-reduced-motion`. Popis enginu a seznam datových
atributů je v `../README.md`.

Rozdíly proti kavárenské sadě:

- žádný fotogalerijní karusel (místo něj sekce „Atmosféra“ se třemi
  kreslenými dlaždicemi přímo v HTML dané šablony),
- žádné GSAP — všechny animace jsou CSS, aby náhledy na rozcestníku
  zůstaly lehké.
