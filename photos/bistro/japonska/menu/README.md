Fotky jednotlivých jídel pro tuto šablonu.

Sem nahrajte snímky položek menu — jeden soubor na jídlo, `.webp`,
na šířku, poměr 4:3, delší strana do 1200 px, do ~150 kB.
Pojmenujte je podle jídla bez diakritiky, např. `gulas.webp`.

Fotku pak přiřaďte položce v `templates/bistro/cfg.japonska.js`:

    { name:{cs:'…',en:'…'}, price:'…', photo:'../../photos/bistro/japonska/menu/gulas.webp' }

Dokud fotka není, engine na jejím místě kreslí zástupný vzor.
