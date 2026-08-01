# Fotky pro šablony baru

Každý typ podniku má vlastní složku a v ní dvě skupiny snímků: hero
(`01`–`06`) a interiér (`interier/01`–`04`).

## Kam co patří

| Kde leží | Kde se objeví | Formát |
|---|---|---|
| `01`–`06` | hero — každá šablona jinak (sloupy, prolínačka, regál, stopka, výřezy) | podle šablony, viz tabulka níže |
| `interier/01`–`04` | listovací galerie v sekci „Atmosféra" | `.webp`, na šířku, delší strana do 1920 px, do ~300 kB |

Pořadí snímků řídí konfigurace v `templates/bar/cfg.*.js`
(`gallery` = hero, `interior` = galerie), ne názvy souborů.

## Formáty fotek pro hero

Každá šablona má jinou kompozici hero a potřebuje jiný poměr stran:

| Šablona | Složka | Hero formát | Proč |
|---|---|---|---|
| Kraftový pub | `kraftovy-pub/` | **na výšku, 2:3** | šest svislých sloupů přes celou výšku okna |
| Koktejlový bar | `koktejlovy-bar/` | — | hero je bez fotek; použije se jen galerie interiéru |
| Vinný bar | `vinny-bar/` | **na výšku, 2:3** | překrývající se řada nakloněných fotek jako láhve v regálu |
| Sportovní bar | `sportovni-bar/` | **na šířku, 16:10** | tři sloupce vedle sebe, fotky ve svislé stopce vpravo |
| Rumovna | `rumovna/` | **čtverec, 1:1** | malé čtvercové výřezy v dolní části plakátu |

## Formáty fotek interiéru

Všechny šablony používají pro interiér `.webp` na šířku, delší strana
do 1920 px, do ~300 kB. Poměr stran se liší:

| Šablona | Interiér formát |
|---|---|
| Kraftový pub | 16:9 |
| Koktejlový bar | 2:1 |
| Vinný bar | 16:9 |
| Sportovní bar | 21:9 |
| Rumovna | 16:9 |

Ideální jsou čtyři záběry: celek sálu, detail baru/pultu, náladový
záběr s hosty a detail, který podnik odliší (tanky, lahve, obrazovky).

## Chybějící fotka nikdy nedělá díru

Když soubor chybí, engine na jeho místo nakreslí zástupný vzor ve stylu
šablony — nýtovaný plech, kužel světla, prázdnou etiketu, pruhy
obrazovky, šrafuru. Web je plně funkční i bez fotek.

## Stav sady

Všech pět složek je naplněných — hero (`01`–`06.webp`) i interiér
(`interier/01`–`04.webp`) v poměrech z tabulek výše. Fotky jsou ukázkové
(z Unsplashe), takže se obsah některých slotů liší od původního zadání
v README jednotlivých složek — alt texty a popisky v `cfg.*.js` odpovídají
skutečným snímkům, ne zadání.
