# Šablony webu pro bar a hospodu

**Pět** jednostránkových šablon, každá pro jiný typ podniku. Sdílí stejný
engine jako šablony pro kavárnu a bistro (`../assets/site.js`,
`../assets/theme.js`), obsah konkrétního podniku je vždy v jednom souboru
`cfg.*.js`.

| Šablona | Soubor | Podnik | Styl | Písma |
|---|---|---|---|---|
| 1 | `kraftovy-pub.html` | kraftová pivnice | Tankovna — beton, ocel, měď, pravé úhly | Oswald + Barlow |
| 2 | `koktejlovy-bar.html` | koktejlový bar | Půlnoc — tma, mosaz, jeden kužel světla | Cormorant Garamond + Jost |
| 3 | `vinny-bar.html` | vinný bar | Regál — krém, vinná červeň, vše mírně nakřivo | Spectral + Work Sans |
| 4 | `sportovni-bar.html` | sportovní bar | Tabule — výsledková tabule, signální červená | Anton + IBM Plex Sans |
| 5 | `rumovna.html` | rumovna / stojáková výčepna | Plakát — okrový papír, dvojité rámy, tisková červená | Alfa Slab One + Rubik |

Demo obsah je ilustrační — žádný skutečný podnik. Zásady pro tvorbu dalších
šablon jsou v [`../../TEMPLATE-PRINCIPLES.md`](../../TEMPLATE-PRINCIPLES.md).

## Hero — pětkrát jinak

Podle 3. zásady se kompozice mezi šablonami neopakují, uvnitř sady ani
napříč sadami (bistro má svých pět dalších):

| Šablona | Hero |
|---|---|
| kraftový pub | fotky jako svislé sloupy přes celé okno, text v desce přes ně dole vlevo |
| koktejlový bar | prázdná tma bez jediné fotky, text uprostřed v mosazném rámečku |
| vinný bar | překrývající se řada nakloněných fotek, text v úzkém sloupci pod nimi |
| sportovní bar | tři sloupce vedle sebe: program zápasů, text, stopka fotek |
| rumovna | vše uvnitř jednoho plakátu, fotky jako malé čtvercové výřezy dole |

## Fotky

Všechny cesty jsou v `cfg.*.js`, do HTML se kvůli nim nesahá. Soubory leží
v `../../photos/bar/<podnik>/` (ukázkové snímky z Unsplashe); když některý
chybí, šablona na jeho místo nakreslí zástupný vzor (viz níž). Zadání pro
fotografa je v README uvnitř každé složky.

- `gallery: [{ src, alt, caption }]` → fotky v hero, každá šablona jinak.
  **Koktejlový bar je výjimka:** jeho hero je záměrně bez fotek, takže
  se tenhle klíč u něj nikde nevykreslí (v configu zůstává pro případ,
  že by si někdo hero s fotkami vrátil).
- `interior: [{ src, alt, caption }]` → listovací galerie v sekci atmosféry.
  Ovládá se šipkami, tečkami, tažením i klávesnicí a sama se posouvá; při
  najetí myší se zastaví. Prázdné pole = engine celou sekci skryje.
- `photo` u položky nabídky → fotka u položky. Bary ji většinou nechtějí,
  takže bez ní se nekreslí nic (jen vinný bar má zástupnou etiketu).

### Chybějící fotka nikdy nedělá díru

Engine u vygenerovaných obrázků poslouchá událost `error`
(`markMissingPhotos` v `../assets/site.js`): když se soubor nenačte,
obal dostane třídu `is-missing`, obrázek se schová a šablona na to místo
nakreslí vzor ve svém duchu — nýtovaný plech, kužel světla, prázdnou
etiketu, pruhy obrazovky, šrafuru. Sady, které fotky mají (kavárna,
bistro), se toho nedotknou.

## Program zápasů (jen sportovní bar)

Tabuli v hero plní krátký skript uvnitř `sportovni-bar.html`, ne engine —
je to schopnost jedné šablony, takže do sdíleného kódu nepatří (4. a 5.
zásada). Data jsou v `cfg.sportovni-bar.js`:

```js
matches: {
  channel: 'LIVE',
  items: [
    { time:'19:00', match:'Plzeň – Baník', league:{cs:'Fortuna liga',en:'Czech league'}, live:true }
  ]
}
```

Prázdné pole `items` (nebo chybějící klíč `matches`) tabuli vůbec
nezobrazí a hero se sesype do dvou sloupců.

## Paměť regálu (jen vinný bar)

Fotka, na kterou host najede, se v regálu plynule prosune dopředu
a **zůstane tam** i po odjetí myši. Plán neurčuje `z-index` — ten se
animovat nedá a přeskakoval by — ale hloubka: pořadí se přepočítá na malé
`translateZ` a `transition` ho přesune hladce. Perspektivní zvětšení se
zpátky vyruší protisměrným `scale`, takže fotky nemění velikost.
Pořadí drží krátký skript uvnitř `vinny-bar.html`, ne engine (4. a 5.
zásada).

## Nový web za pár kroků

1. Vyberte šablonu a zkopírujte ji spolu s `cfg.*.js` a složkou
   `../assets/` do nového projektu.
2. Vyplňte `cfg.*.js`: název, kontakty, otevírací dobu, hero text, nabídku.
   Struktura a komentáře jsou v `../assets/site.config.example.js`.
3. Přejmenujte zvolenou šablonu na `index.html` a opravte cesty ke skriptům
   (`../assets/…` → `assets/…`) a k fotkám.
4. Otevřete v prohlížeči a projděte všechny sekce, oba jazyky a obě témata.

## Co šablony umí

Všechno, co umí sada pro kavárnu a bistro — přepínač CZ/EN, noční téma podle
času v Česku s ručním přepínačem, záložky kategorií nabídky, vloženou mapu,
reveal animace a `prefers-reduced-motion`. Popis enginu a seznam datových
atributů je v `../README.md`.

Rozdíly proti ostatním sadám:

- **žádná sekce „Alergeny“** — stejně jako u bister. Data (`menu.allergens`)
  v configech zůstávají; kdo je chce zobrazit, vrátí do sekce nabídky blok
  `<div class="menu-group"><h3>Alergeny</h3><p class="allergens"
  id="allergenList"></p></div>`, engine ho naplní sám,
- **koktejlový bar je tmavý i v denním tématu** — světlá varianta by popřela
  nápad šablony. Noční téma jde ještě hlouběji do tmy, nikoli do světla,
- **žádné GSAP** — všechny animace jsou CSS, aby náhledy na rozcestníku
  zůstaly lehké.

## Nedodělky

- Fotky jsou ukázkové (Unsplash) — pro reálný podnik je vyměnit za vlastní
  ve stejných poměrech stran (poměry jsou v README u fotek).
- Program zápasů ve sportovním baru je statický seznam z configu. Napojení
  na živý zdroj (kalendář, API) zatím nikdo neřešil.
