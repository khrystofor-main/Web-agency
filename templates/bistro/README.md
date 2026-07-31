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

## Fotky

Všechny cesty k fotkám jsou v `cfg.*.js`, do HTML se kvůli nim nesahá.
Soubory leží v `../../photos/bistro/<kuchyne>/` (podrobnosti v README té
složky).

- `gallery: [{ src, alt, caption }]` → mřížka fotek jídel v hero. Každá
  šablona má jiné rozvržení i jiné umístění textu:
  | Šablona | Hero |
  |---|---|
  | česká | text uprostřed nahoře, pod ním nástěnka se špendlíky přes celou šířku |
  | vietnamská | text vlevo, pod ním nekonečný pás fotek přes celé okno |
  | japonská | pás fotek nahoře, text až pod ním u pravého okraje |
  | italská | text vlevo, mřížka oken s oblouky vpravo (prostřední sloupec výš) |
  | rostlinná | text uprostřed, listy po obou stranách |
- `interior: [{ src, alt, caption }]` → **listovací galerie interiéru**
  v sekci „Atmosféra“. Ovládá se šipkami, tečkami, tažením i šipkami na
  klávesnici a sama se posouvá; při najetí myší se zastaví. Když je pole
  prázdné, engine celou sekci skryje.
- `photo` u položky menu → fotka jídla. Karta má fotku nahoře a pod ní
  název s cenou; dokud fotka chybí, kreslí se na jejím místě zástupný vzor
  (`.menu-item__ph--empty`) laděný do stylu šablony.

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

- dvě sady fotek místo jedné — `gallery` (mřížka jídel v hero) a
  `interior` (listovací galerie v sekci „Atmosféra“),
- žádné GSAP — všechny animace jsou CSS, aby náhledy na rozcestníku
  zůstaly lehké.
