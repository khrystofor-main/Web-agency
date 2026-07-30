# Šablony webu pro kavárnu

Čtyři hotové jednostránkové šablony se stejnou strukturou a různým vizuálním
charakterem. Veškerý obsah konkrétního podniku je v **jednom souboru** —
`assets/site.config.js`. HTML šablon se nemusí sahat.

| Soubor | Styl | Písma | Animace |
|---|---|---|---|
| `variant-1-swiss.html` | Swiss Minimal — bílá, černý grotesk, červený akcent | Space Grotesk + Inter | CSS |
| `variant-2-editorial.html` | Editorial — novinový masthead, čísla sekcí | Fraunces + Newsreader | GSAP |
| `variant-4-terracotta.html` | Terracotta — písek, oliva, oblouky | Marcellus + Work Sans | CSS |
| `variant-5-corporate-luxury.html` | Corporate Luxury — námořnická modř a zlatá | Playfair Display + Lato | GSAP |

`index.html` je rozcestník pro porovnání všech čtyř.
Demo obsah = PF Café, Brno. Kořenový `../index.html` je hotový web toho podniku,
není to šablona.

## Struktura

```
templates/
  assets/
    site.config.js          ← ZDE se upravuje obsah
    site.config.example.js  ← prázdný skeleton s komentáři
    site.js                 ← sdílený engine (neupravovat pro běžný projekt)
  variant-*.html            ← rozvržení + styl (jedna šablona = jeden soubor)
  index.html
../photos/optimized/        ← fotky hero a galerie
../photos/menu-optimized/   ← fotky jídel a nápojů
```

## Nový web za pár kroků

1. Zkopírujte celou složku (nebo celý repozitář) do nového projektu.
2. `cp assets/site.config.example.js assets/site.config.js` a vyplňte:
   název, kontakty, otevírací dobu, hero text, galerii, menu, alergeny.
3. Nahrajte fotky do `photos/optimized/` (hero + galerie) a
   `photos/menu-optimized/` (položky menu). Doporučeno `.webp`, šířka ~1600 px
   pro galerii a ~800 px pro položky menu.
4. Smažte šablony, které nepoužijete, a přejmenujte tu zvolenou na `index.html`.
   Pak upravte cesty k fotkám v konfiguraci (`../photos/…` → `photos/…`),
   pokud soubor přesunete o úroveň výš.
5. Otevřete v prohlížeči a projděte všechny sekce.

## Co se dá nastavit z konfigurace

| Chci… | Kde |
|---|---|
| změnit název, telefon, adresu, mapu | `brand`, `contact` |
| jinou otevírací dobu po dnech | `hours.perDay` (7 položek od pondělí, `''` = zavřeno) |
| skrýt hodnocení Google | `rating: null` |
| přidat/ubrat kategorii menu | položka v `menu.groups` (unikátní `id`) |
| menu bez fotek | u položky prostě nevyplňujte `photo` |
| jiný počet fotek v galerii | pole `gallery` (karusel se přizpůsobí) |
| změnit hlavní barvu šablony | `brand.color` (přepíše CSS proměnnou `--brand`) |
| jednojazyčný web | `lang.available:['cs']` — přepínač CZ/EN pak zmizí z logiky, tlačítko odstraňte z HTML |
| vypnout noční téma | `theme.auto:false` (web zůstane v `theme.default`) |
| schovat přepínač témat | `theme.toggle:false` |

Vše ostatní (typografie, rozvržení, animace) je záměrně v HTML/CSS jednotlivé
šablony — tam se ladí charakter designu.

## Noční téma podle času v Česku

Každá šablona má druhou, tmavou paletu. Přepíná se sama: přes den světlá,
po soumraku tmavá. Čas se čte pro `Europe/Prague` (letní čas řeší `Intl`),
takže výsledek nezávisí na tom, odkud se host dívá. Hranice dne a noci
sleduje skutečný východ a západ slunce v ČR po měsících (v prosinci se
stmívá kolem 16:30, v červnu až po 21:00) — tabulka je v `assets/theme.js`.

- Návštěvník může téma přepnout tlačítkem v navigaci. Ruční volba má vždy
  přednost a drží 12 hodin (`theme.manualTtlHours`), pak se web vrátí
  k automatice.
- Systémové nastavení zařízení (`prefers-color-scheme`) se **nepoužívá**:
  spousta lidí má telefon v tmavém režimu nastálo a web kavárny by pak
  vypadal tmavě i v poledne.
- Skript běží v `<head>` před vykreslením stránky, aby v noci neproblesklo
  světlé pozadí. Proto se `site.config.js` načítá také v hlavičce.
- Barvy noční varianty jsou v CSS bloku `html[data-theme="dark"]` v každé
  šabloně — tam se ladí, stejně jako zbytek designu.
- Vlastní `brand.color` funguje i v noci: akcent se přes `color-mix`
  zesvětlí, aby si na tmavém podkladu udržel kontrast.

## Poznámky k provozu

- Bez buildu a frameworků. Skripty jsou klasické `<script src>`, takže soubor
  jde otevřít i dvojklikem přes `file://`.
- Šablony 2 a 5 načítají GSAP z CDN; animace jsou pod
  `prefers-reduced-motion` guardem a bez internetu se web jen nehýbe.
- Lokální náhled celého repozitáře:

```bash
python -m http.server 8000
```

  a otevřít `http://localhost:8000/templates/index.html`.

## Rozšíření enginu

`assets/site.js` rozumí těmto atributům v HTML:

| Atribut | Efekt |
|---|---|
| `data-site="contact.phone"` | text prvku z konfigurace |
| `data-site-href` / `-src` / `-alt` | odpovídající atribut |
| `data-site-letters="brand.name"` | rozseká text na `<span>` písmena (animace hero) |
| `data-site-split="brand.name"` | „PF Café“ → `PF <span>Café</span>` (dvoubarevné logo) |
| `data-site-map` | `src` vložené mapy z `contact.mapCoords` |
| `data-site-if="rating"` | prvek se skryje, když je hodnota prázdná |
| `data-cs` / `data-en` | statická copy patřící k designu šablony, ne k podniku |

Vlastní JS varianty (běžící pruh, parallax, GSAP) žije v `<script>` bloku na
konci daného HTML. Funkci, která má reagovat na přepnutí jazyka, přidejte do
`window.SITE_ON_LANG`.
