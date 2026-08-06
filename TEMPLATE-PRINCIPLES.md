# Jak stavíme šablony

Zásady, ne návod. Technické postupy jsou v `templates/README.md`
a `templates/bistro/README.md`; tenhle soubor odpovídá na otázku
**„podle čeho se rozhodovat"**, když vzniká nová šablona nebo se upravuje
stávající.

---

## 1. Každá šablona má jeden nápad

Šablona není paleta barev nalepená na obecné rozvržení. Má jednu myšlenku,
kterou jde vyslovit větou, a všechno ostatní se jí podřizuje:

- **Hospodská tabule** — papír, křída, smaltové cedule, tlusté rámy.
- **Street food** — indigo, limetka, oblé karty, nekonečný pás fotek.
- **Ma** — prázdno je materiál. Vlásečnicové linky, svislé popisky.
- **Trattoria** — markýza, oblouky, dvojité rámečky.
- **Zelený minimal** — matcha, hlína, měkké tvary.

Praktický test: **zakryjte logo a text.** Pozná se šablona podle tvarů,
odstupů a barev? Když ne, není hotová — je to jen přebarvená sousedka.

Z toho plyne i to, čemu se vyhnout: nápad musí být vidět v **rozvržení**, ne
jen v barvě. Když jsou dvě šablony odlišné jen paletou, zákazník to čte jako
jednu šablonu ve dvou verzích a cena za pět kusů přestane dávat smysl.

## 2. Nápad se drží celou stránkou

Charakter, který založí hero, musí dojít až do patičky. Když má šablona
tlusté rámy, mají je i karty menu, i tlačítka galerie, i pole formuláře.
Nejčastější chyba je „hezké hero a pod ním obecný web".

Konkrétně: hero, karty jídel, listovací galerie a navigace v každé šabloně
řeší **tytéž prvky jiným tvaroslovím** — kulaté tlačítko proti hranatému,
tečka proti čárce, stín proti lince.

## 3. Rozvržení se nesmí opakovat mezi šablonami

Nejsnadněji se to pokazí v hero. Když čtyři z pěti šablon udělají „text vlevo,
fotky vpravo", vypadá sada lacině — i když má každá jiné barvy a písma.
Proto má dnes každá bistro šablona jiné hero: text nahoře uprostřed, pás přes
celé okno, fotky nahoře a text pod nimi, mřížka vedle textu, text obklopený
fotkami.

Než přidáte šestou šablonu, projděte si tabulku hero v
`templates/bistro/README.md` a zvolte kompozici, která tam ještě není.

## 4. Obsah patří do konfigurace, charakter do HTML

Dělicí čára je ostrá a vyplatí se ji hlídat:

- **`cfg.*.js`** — všechno, co se liší podnik od podniku: název, kontakty,
  otevírací doba, texty hero, položky menu, cesty k fotkám.
- **HTML šablony** — typografie, barvy, rozvržení, animace a statická copy,
  která patří k designu, ne k podniku (`data-cs` / `data-en`).
- **`_engine/site.js`** — sdílený engine. Do něj se sahá jen tehdy, když nová
  schopnost dává smysl **pro všechny** šablony.

Test: mám změnit něco kvůli jedné šabloně? Pak to nepatří do enginu.
Když jsme potřebovali bistrům oddělit fotky jídel od fotek interiéru,
engine dostal `S.interior || S.gallery` — tedy nový klíč **navíc**, se
zachovaným chováním pro kavárny. Tak vypadá zásah do sdíleného kódu, který
je v pořádku.

## 5. Nová šablona nesmí rozbít starou

Sdílený engine znamená sdílené riziko. Každá změna v `site.js` nebo
`theme.js` se ověřuje na **všech** šablonách, ne jen na té, kvůli které
vznikla. Když se nová funkce nedá udělat zpětně kompatibilně, je lepší ji
nechat v `<script>` bloku na konci konkrétní šablony.

## 6. Šablona je hotová až ve všech stavech

Ne „vypadá dobře na mém monitoru". Než se šablona prohlásí za hotovou,
projde se:

- **oba jazyky** — čeština i angličtina, včetně delších anglických nadpisů,
- **obě témata** — denní i noční paleta (`html[data-theme="dark"]`),
- **šířky** — mobil, tablet, široký monitor,
- **omezené animace** — `prefers-reduced-motion`,
- **chybějící data** — prázdná galerie, položka menu bez fotky, podnik bez
  hodnocení. Sekce se má buď skrýt, nebo ukázat zástupný vzor v duchu
  šablony — nikdy nezůstat jako díra.

Poslední bod je ten, na který se nejčastěji zapomíná, a přitom nastane
u prvního reálného zákazníka.

## 7. Ověřovat měřením, ne dojmem

Screenshot ukáže, **že** je něco špatně, ale skoro nikdy **proč**.
U nekonečného pásu fotek to stálo dvě opravy: napoprvé jsme opravili jen to,
co bylo vidět (nenačtené obrázky), a skutečná příčina — příliš krátký pás
vůči šířce okna — se ukázala až po změření šířky sady, šířky pásu a okna.

Když něco skáče, chybí nebo přetéká: změřte to v konzoli, vypište čísla
a porovnejte je s tím, co má vyjít. Teprve pak sahejte do CSS.

## 8. Lehkost je součást návrhu

Šablony běží bez buildu a bez frameworku — otevřou se i dvojklikem přes
`file://`. Stojí to za to udržet:

- animace primárně v CSS; externí knihovnu (GSAP) jen tam, kde bez ní
  nápad nefunguje, a vždy pod `prefers-reduced-motion` guardem,
- fotky ve `.webp`, rozumně zmenšené — galerie ~1600 px, položky menu ~800 px,
- náhledy na rozcestníku se načítají líně, takže žádná šablona nesmí být
  těžká „protože si to designově žádá".

Výjimka z lenivého načítání: co se hýbe v animaci, musí být načtené předem.
`loading="lazy"` se řídí pozicí v rozvržení, ne posunem `transform`.

## 9. Demo obsah je taky design

Ukázková náplň se čte jako součást šablony. Fotky proto musí odpovídat
kuchyni (lososa na webu rostlinného bistra si zákazník všimne dřív než
vy) a popisky mají být napsané k tomu, co na snímku skutečně je — ne
generické „interiér". U textů platí totéž: raději tři poctivé věty
o podniku než výplň.

## 10. Nedodělky se píšou, ne zamlčují

Co v šabloně chybí nebo je provizorní, patří do README té složky — včetně
důvodu. Nepoužité soubory, dočasně skrytá sekce, fotka, kterou je potřeba
vyměnit. Za měsíc si to nikdo nepamatuje a nezapsaný nedodělek se změní
v chybu.

---

## Rychlý seznam před vypuštěním šablony

- [ ] Nápad šablony jde říct jednou větou.
- [ ] Po zakrytí loga se šablona pozná podle tvarů, ne jen podle barvy.
- [ ] Hero má jinou kompozici než ostatní šablony v sadě.
- [ ] Charakter drží i v menu, galerii a patičce.
- [ ] Obsah je jen v `cfg.*.js`, do HTML se kvůli podniku nesahá.
- [ ] Změny v enginu neublížily ostatním šablonám.
- [ ] CZ i EN, denní i noční téma, mobil i široký monitor.
- [ ] Prázdná data nikde nedělají díru.
- [ ] `prefers-reduced-motion` vypne pohyb.
- [ ] Nedodělky jsou sepsané v README.
