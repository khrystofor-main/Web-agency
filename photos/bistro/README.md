# Fotky pro šablony bistra — co sem nahrát

Každá z pěti šablon dostane místo velkého kresleného objektu v hero
**galerii šesti fotek**. Do složky podle kuchyně nahrajte přesně šest
souborů s níže uvedenými názvy — konfigurace se pak na ně napojí beze změny
šablony.

```
photos/bistro/
  ceska/        vietnamska/   japonska/   italska/   plant-based/
```

## Technické zadání (platí pro všechny)

| Parametr | Hodnota |
|---|---|
| Formát | `.webp` (nebo `.jpg`, převedeme) |
| Orientace | na šířku |
| Poměr stran | 3:2 nebo 4:3 — jednotně v rámci jedné složky |
| Šířka | 1600 px (menší než 1200 px nepoužívat) |
| Velikost | ideálně do 300 kB na soubor |
| Názvy | přesně jak je uvedeno níže, včetně čísla a pomlček |

Číslo v názvu určuje pořadí v galerii. **Fotka `01-` je zároveň hlavní** —
objeví se největší a použije se v náhledu na rozcestníku, tak ať je to ta
nejsilnější.

Zdroje: Unsplash, Pexels — obojí zdarma i komerčně. U Unsplash si poznamenejte
jméno autora, doplní se do patičky (`footer.credits`).

Co hledat obecně: přirozené světlo, žádné tvrdé blesky, jídlo shora nebo
z úrovně stolu, v interiérech spíš detail než širokoúhlý záběr celé místnosti.

---

## 1. Česká kuchyně → `ceska/`

Teplé dřevo, smetanové omáčky, pivo, útulná hospůdka. Vyhýbat se
naaranžovaným „fine dining" talířům — má to působit poctivě a domácky.

| Soubor | Co má být na fotce |
|---|---|
| `01-svickova.webp` | Svíčková s houskovým knedlíkem a brusinkami, shora nebo ze strany |
| `02-gulas.webp` | Guláš v misce či hrnci, vedle krajíc chleba |
| `03-rizek.webp` | Smažený řízek s bramborovým salátem, plátek citronu |
| `04-interier.webp` | Interiér: dřevěné stoly, židle, křídová tabule s menu |
| `05-pivo.webp` | Čepované pivo — sklenice s pěnou, výčep v pozadí |
| `06-moucnik.webp` | Ovocné knedlíky, buchty nebo štrúdl s cukrem |

## 2. Vietnamská kuchyně → `vietnamska/`

Sytá zeleň bylinek, pára, kontrastní barvy. Klidně trochu „streetový"
neuklizený stůl — sedí to k charakteru šablony.

| Soubor | Co má být na fotce |
|---|---|
| `01-pho.webp` | Miska phở shora: nudle, hovězí, jarní cibulka, hůlky |
| `02-banh-mi.webp` | Bánh mì rozpůlené, vidět nádivka a nakládaná zelenina |
| `03-bun.webp` | Bún bò nam bộ nebo bún chả — rýžové nudle s bylinkami |
| `04-bylinky.webp` | Svazky koriandru, máty a thajské bazalky na stole |
| `05-ca-phe.webp` | Cà phê sữa đá — sklenice s ledem a kondenzovaným mlékem |
| `06-kuchyne.webp` | Kuchyně nebo pult: pára z hrnce, ruce kuchaře |

## 3. Japonská kuchyně → `japonska/`

Nejvíc minimalistická sada: hodně prázdného místa okolo objektu, tlumené
barvy, žádné pestré rekvizity. Klidně tmavší pozadí.

| Soubor | Co má být na fotce |
|---|---|
| `01-ramen.webp` | Miska ramenu shora: chashu, půlka vejce, nori, jarní cibulka |
| `02-pult.webp` | Pult pro pár hostů, kuchař za ním — detail, ne celá místnost |
| `03-gyoza.webp` | Gyoza na pánvi nebo talíři, miska s omáčkou |
| `04-donburi.webp` | Donburi — rýže s lososem nebo hovězím, keramická miska |
| `05-matcha.webp` | Matcha nebo sencha v keramickém šálku, čajník |
| `06-nudle.webp` | Detail: čerstvé nudle, ruce, mouka — tiché řemeslné zátiší |

## 4. Italská kuchyně → `italska/`

Smetanová, olivová a terakotová paleta. Rustikální dřevo a keramika,
ne moderní bílé desky.

| Soubor | Co má být na fotce |
|---|---|
| `01-pasta.webp` | Talíř pasty shora — cacio e pepe, ragù nebo pesto |
| `02-testo.webp` | Ruce válející těsto, čerstvé nudle na moučné desce |
| `03-focaccia.webp` | Focaccia s rozmarýnem, olivový olej v misce |
| `04-interier.webp` | Trattoria: stolky, láhve vína, teplé světlo |
| `05-tiramisu.webp` | Tiramisu v porcelánu nebo skleničce, kakao navrchu |
| `06-vino.webp` | Sklenka červeného vína, prkénko se sýrem a salámem |

## 5. Rostlinná kuchyně → `plant-based/`

Světlé, čisté, hodně zelené a hliněných tónů. Zelenina má vypadat
syrově a sezónně, ne naleštěně.

| Soubor | Co má být na fotce |
|---|---|
| `01-bowl.webp` | Miska shora: pečená dýně, cizrna, tahini, semínka |
| `02-zelenina.webp` | Bedýnka nebo stůl se sezónní zeleninou z trhu |
| `03-fermenty.webp` | Sklenice s kimchi, kombuchou, nakládanou zeleninou |
| `04-snidane.webp` | Tofu scramble nebo avokádový toast na kváskovém chlebu |
| `05-matcha.webp` | Matcha s ovesným mlékem, případně zelené smoothie |
| `06-interier.webp` | Světlý interiér s rostlinami, dřevo, len |

---

## Až fotky budou ve složkách

Řekněte a doplní se:

1. `gallery` v příslušném `templates/bistro/cfg.*.js` (šest položek
   `{ src, alt, caption }` — popisky dvojjazyčně),
2. galerie do hero části šablony místo kresleného objektu,
3. autoři fotek do `footer.credits`.

Kreslené CSS objekty (tabule, miska phở, kruh, oblouk, talíř) v hero
zůstávají jako záloha, dokud fotky nedorazí — bez nich by šablona zela
prázdnotou.
