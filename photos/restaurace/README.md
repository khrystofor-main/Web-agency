# Fotky pro šablony restaurací

Sada teprve vzniká. Než se dohodne pět konceptů, **nahrávejte všechno do
`nesetrideno/`** — roztřídíme to do složek podle konceptu později.

## Kam co patří (až budou složky hotové)

Struktura bude stejná jako u bistra (`../bistro/`):

| Kde leží | Kde se objeví | Formát |
|---|---|---|
| `<koncept>/01`–`06` | mřížka nebo pás fotek v hero | `.webp`, na výšku, delší strana do 1600 px, do ~250 kB |
| `<koncept>/interier/01`–`05` | listovací galerie v sekci „Atmosféra" | `.webp`, na šířku 16:9, delší strana do 1920 px, do ~300 kB |
| `<koncept>/menu/*.webp` | fotka u položky jídelního lístku | `.webp`, na šířku 4:3, delší strana do 1200 px, do ~150 kB |

Pořadí a výběr snímků řídí konfigurace `templates/restaurace/cfg.*.js`,
ne názvy souborů. Fotka, která není v configu, se nikde nezobrazí.

## Co je u restaurací navíc proti bistru

Podle toho, které sekce nakonec šablony dostanou, se může hodit i:

- **jeden široký záběr na celou obrazovku** (na šířku, do 2400 px) — několik
  konceptů počítá s hero přes celé okno, tam se malá fotka rozpadne,
- **portrét šéfkuchaře nebo týmu** (na výšku, do 1200 px),
- **detail sklenice / lahve** pro vinnou kartu,
- **večerní světlo** — u restaurací je noční téma důležitější než u bistra,
  ať je čím ho naplnit.

## Na co si dát pozor

Fotka musí odpovídat kuchyni a popisku (viz zásada 9
v [`../../TEMPLATE-PRINCIPLES.md`](../../TEMPLATE-PRINCIPLES.md)).
Vyhněte se snímkům s čitelnou obchodní značkou na obalu a záběrům
s rozpoznatelnými hosty.
