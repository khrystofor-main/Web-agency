# Fotky pro šablony bistra

Fotky jsou nahrané a zapojené. Tenhle soubor zůstává jako popis toho,
kam který snímek patří — až budete něco vyměňovat.

## Jak se čísla používají

| Soubory | Kde se objeví |
|---|---|
| `01`–`06` (na výšku) | galerie v hero; každá šablona ji zobrazuje jinak |
| `07`, `08` (na šířku) | dva pásy přes celou šířku stránky |
| `09` (na šířku) | fotka interiéru v sekci „Atmosféra" |

Pořadí v galerii se řídí polem `gallery` v `templates/bistro/cfg.*.js`,
ne názvem souboru — snímky jsou tam seřazené tak, aby vedle sebe neseděly
dva podobné záběry. Popisky a `alt` texty jsou psané podle toho, co na
fotce opravdu je.

## Když budete fotky měnit

Zachovejte formát: `.webp`, na výšku 1400×1800 a méně, na šířku 1920 px
po delší straně, do ~300 kB. Novou fotku nahrajte pod stejným číslem
a doplňte jí popisek v konfiguraci.

## Co v sadě chybí

Ve složce `plant-based/` se **nepoužívají snímky `04` a `05`**:
na `04` je vidět obal konkrétní obchodní značky a na `05` leží v míse
losos — na webu bistra, které slibuje sto procent rostlin, by obojí
působilo špatně. Galerie tam proto jede na čtyřech fotkách. Až budou
náhrady, stačí je doplnit do `gallery` v `cfg.plant-based.js`.

Ve složce `ceska/` je obsah spíš mezinárodní než český (`04` je snídaňový
stůl s hranolky a vejci benedikt, `07` a `08` jsou prkénka se sýry a
kalamáry). Pro ukázkovou šablonu to projde, pro skutečné bistro
s českou kuchyní by chtěly vyměnit.

