# Fotky pro šablony bistra

Každá kuchyně má vlastní složku (`ceska/`, `vietnamska/`, `japonska/`,
`italska/`, `plant-based/`) a v ní tři skupiny snímků.

## Jak se čísla a složky používají

| Kde leží | Kde se objeví |
|---|---|
| `01`–`06` (na výšku) | mřížka fotek jídel v hero; každá šablona ji zobrazuje jinak |
| `interier/01`–`05` (na šířku) | listovací galerie v sekci „Atmosféra" |
| `menu/*.webp` (na šířku) | fotka u jednotlivé položky jídelního lístku |
| `07`, `08` | **momentálně se nepoužívají** — patřily k pásům, které jsme ze šablon odstranili |

Pořadí snímků řídí konfigurace v `templates/bistro/cfg.*.js`
(`gallery` = hero, `interior` = galerie), ne názvy souborů.

## Kam nahrávat fotky interiéru

Do `<kuchyne>/interier/`. Teď je v každé složce pět snímků (`01`–`05`);
`02`–`05` jsou zatím ve všech šablonách stejné, protože jde o demo.
Další přidávejte pod dalšími čísly a ke každé doplňte řádek do pole
`interior` v příslušném configu — jinak ji galerie nezobrazí:

```js
{ src:'../../photos/bistro/ceska/interier/02.webp',
  alt:{cs:'…',en:'…'},
  caption:{cs:'…',en:'…'} }
```

Formát: `.webp`, na šířku, poměr 16:9, delší strana do 1920 px, do ~300 kB.
Ideální jsou čtyři až šest záběrů: celek sálu, detail stolu, pult nebo
kuchyň a večerní světlo.

## Fotky jídel do menu

Do `<kuchyne>/menu/`, návod je v README uvnitř každé té složky.
Dokud fotka chybí, engine kreslí zástupný vzor ve stylu šablony.

## Co v sadě chybí

Ve složce `plant-based/` se **nepoužívají snímky `04` a `05`**:
na `04` je vidět obal konkrétní obchodní značky a na `05` leží v míse
losos — na webu bistra, které slibuje sto procent rostlin, by obojí
působilo špatně. Mřížka v hero tam proto jede na čtyřech fotkách.

Ve složce `ceska/` je obsah spíš mezinárodní než český (`04` je snídaňový
stůl s hranolky a vejci benedikt). Pro ukázkovou šablonu to projde, pro
skutečné bistro s českou kuchyní by chtěl vyměnit.
