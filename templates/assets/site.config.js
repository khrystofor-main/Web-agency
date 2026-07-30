/* ============================================================
   SITE CONFIG — všechna data konkrétní kavárny na jednom místě.
   Toto je jediný soubor, který se upravuje pro nový podnik.
   Prázdný skeleton s komentáři: site.config.example.js
   Dvojjazyčné texty se zapisují jako { cs:'…', en:'…' }.
   ============================================================ */
window.SITE = {

  lang: { default:'cs', available:['cs','en'], storageKey:'pf-cafe-lang' },

  /* Téma: světlé přes den, tmavé po setmění (podle času v Česku).
     auto:false → web zůstane v tématu `default`.
     toggle:false → tlačítko přepínače z navigace zmizí.
     manualTtlHours: za jak dlouho vyprší ruční volba návštěvníka (0 = nikdy). */
  theme: { auto:true, default:'light', toggle:true,
           timeZone:'Europe/Prague', storageKey:'pf-cafe-theme', manualTtlHours:12 },

  brand: {
    name: 'PF Café',
    title: { cs:'PF Café — Brno', en:'PF Café — Brno' },
    description: {
      cs:'PF Café na Dominikánském náměstí v Brně. Káva, dezerty, snídaně. Otevřeno denně 9:00–22:00.',
      en:'PF Café on Dominikánské náměstí in Brno. Coffee, desserts, breakfast. Open daily 9:00–22:00.'
    },
    color: null   // např. '#E8442E' — přepíše --brand varianty; null = ponechat barvu šablony
  },

  contact: {
    phone: '+420 605 289 064',
    phoneHref: 'tel:+420605289064',
    address: { line1:'Dominikánské nám. 685/1A', line2:'602 00 Brno-střed', short:'Dominikánské nám. 685/1A, Brno' },
    mapsUrl: 'https://maps.google.com/?cid=12443245906833406651',
    mapCoords: '49.1937524,16.6070308',
    mapZoom: 16
  },

  /* uniform: stejná doba každý den. Pro rozdílné dny použijte
     perDay: ['9:00–22:00','9:00–22:00',…] (7 položek, od pondělí; '' = zavřeno) */
  hours: { uniform:'9:00–22:00', summary:{ cs:'Otevřeno denně 9–22', en:'Open daily 9–22' } },

  rating: { score:'4.7', count:518 },   // null → blok hodnocení se skryje

  hero: {
    kicker: { cs:'Kavárna — Brno', en:'Café — Brno' },
    sub: {
      cs:'Kavárna na Dominikánském náměstí, kde káva potkává klid. Zastavte se na chvilku — nebo na celé odpoledne.',
      en:'A café on Dominikánské náměstí where coffee meets calm. Stop by for a moment — or for the whole afternoon.'
    },
    cta: { cs:'Kde nás najdete', en:'Find us' },
    image: '../photos/optimized/nathan-dumlao-zUNs99PGDg0-unsplash.webp',
    imageAlt: { cs:'Latte art s rostlinami', en:'Latte art with plants' },
    /* popisek pod hero fotkou — používá varianta Editorial */
    caption: { cs:'Ranní světlo v kavárně', en:'Morning light at the café' },
    captionMeta: 'Brno, CZ'
  },

  gallery: [
    { src:'../photos/optimized/nathan-dumlao-zUNs99PGDg0-unsplash.webp', alt:{cs:'Latte art s rostlinami',en:'Latte art with plants'},   caption:{cs:'Ranní rituál',en:'Morning ritual'} },
    { src:'../photos/optimized/nathan-dumlao-x5FhHp3-UlI-unsplash.webp', alt:{cs:'Tři kávy na stole',en:'Three coffees on a table'},     caption:{cs:'Tři generace kávy',en:'Three generations of coffee'} },
    { src:'../photos/optimized/toa-heftiba-so-7RsbB_q4-unsplash.webp',   alt:{cs:'Káva a sukulent',en:'Coffee and a succulent'},         caption:{cs:'Náš oblíbený stůl',en:'Our favourite table'} },
    { src:'../photos/optimized/nathan-dumlao-4QaNg9pu3nk-unsplash.webp', alt:{cs:'Latte art trio',en:'Latte art trio'},                  caption:{cs:'Latte art od baristů',en:'Latte art by our baristas'} },
    { src:'../photos/optimized/nathan-dumlao-c2Y16tC3yO8-unsplash.webp', alt:{cs:'Káva v listech',en:'Coffee among leaves'},             caption:{cs:'Zelený koutek',en:'Green corner'} },
    { src:'../photos/optimized/nadia-valko-HINbY6sHh3M-unsplash.webp',   alt:{cs:'Flat white shora',en:'Flat white from above'},         caption:{cs:'Detail, na kterém záleží',en:'The detail that matters'} }
  ],

  menu: {
    photoBase: '../photos/menu-optimized/',
    photoExt: '.webp',            // fotky se automaticky přepisují na tuto příponu
    intro: {
      cs:'Kompletní nabídka s cenami. U dezertů se ptejte na dnešní výběr na baru.',
      en:"Full menu with prices. For desserts, ask about today's selection at the bar."
    },
    stripLabel: { cs:'Domácí dezert — výběr na baru', en:'Homemade dessert — selection at the bar' },

    groups: [
      { id:'g-kava', title:{cs:'Kávové nápoje',en:'Coffee'},
        note:{cs:'Všechny kávové nápoje rádi připravíme i v ledové variantě (+10 Kč), případně s ovesnou nebo bezlaktozovou alternativou mléka (+15 Kč). Příchuť do kávy nebo konvička mléka 10 Kč, mistička medu nebo shot espressa 20 Kč.',
              en:'All coffee drinks also available iced (+10 Kč) or with oat / lactose-free milk (+15 Kč). Coffee flavouring or a pot of milk 10 Kč, honey or an espresso shot 20 Kč.'},
        items:[
          { name:{cs:'Espresso / espresso lungo',en:'Espresso / espresso lungo'}, price:'65 Kč' },
          { name:{cs:'Espresso macchiato (A 7)',en:'Espresso macchiato (A 7)'}, price:'70 Kč' },
          { name:{cs:'Espresso doppio',en:'Double espresso'}, price:'80 Kč' },
          { name:{cs:'Cappuccino (A 7)',en:'Cappuccino (A 7)'}, price:'85 Kč' },
          { name:{cs:'Caffè e latte (A 7)',en:'Caffè e latte (A 7)'}, price:'95 Kč', photo:'Café Latté S Klassickým Mlékem.png' },
          { name:{cs:'Flat white (A 7)',en:'Flat white (A 7)'}, price:'95 Kč', photo:'Flat White.png' },
          { name:{cs:'Batch brew 0,2l',en:'Batch brew 0.2l'}, price:'85 Kč' },
          { name:{cs:'Espresso tonic 0,4l / Espresso orange 0,2l',en:'Espresso tonic 0.4l / Espresso orange 0.2l'}, price:'95 Kč', photo:'Espresso Tonic.png' },
          { name:{cs:'Filtrovaná káva V60 0,3l',en:'V60 filter coffee 0.3l'}, price:'115 Kč' },
          { name:{cs:'Vídeňská káva (A 7)',en:'Viennese coffee (A 7)'}, price:'95 Kč' },
          { name:{cs:'Affogato — vanilková zmrzlina zalitá espressem (A 7)',en:'Affogato — vanilla ice cream topped with espresso (A 7)'}, price:'85 Kč' },
          { name:{cs:'Frappé (A 7)',en:'Frappé (A 7)'}, price:'85 Kč' },
          { name:{cs:'Ledová káva — se zmrzlinou a šlehačkou (A 7)',en:'Iced coffee — with ice cream and whipped cream (A 7)'}, price:'115 Kč' },
          { name:{cs:'Alžírská káva — s vaječným likérem a šlehačkou (A 7)',en:'Algerian coffee — with egg liqueur and whipped cream (A 7)'}, price:'133 Kč' },
          { name:{cs:'Espresso Martini (espresso, Kahlúa, vodka)',en:'Espresso Martini (espresso, Kahlúa, vodka)'}, price:'144 Kč' }
        ]},

      { id:'g-horka', title:{cs:'Horké nápoje',en:'Hot drinks'},
        items:[
          { name:{cs:'Sypané čaje Grešík (Earl Grey, zelený, bylinkový, rooibos, ovocný)',en:'Grešík loose-leaf teas (Earl Grey, green, herbal, rooibos, fruit)'}, price:'85 Kč' },
          { name:{cs:'Čaj z čerstvé máty nebo zázvoru',en:'Fresh mint or ginger tea'}, price:'89 Kč' },
          { name:{cs:'Chai latte / Matcha latte (A 7)',en:'Chai latte / Matcha latte (A 7)'}, price:'95 / 115 Kč', photo:'Chai Latte.png' },
          { name:{cs:'Belgická čokoláda Callebaut — hořká, mléčná nebo bílá (A 7)',en:'Callebaut Belgian chocolate — dark, milk or white (A 7)'}, price:'95 Kč' }
        ]},

      { id:'g-students', title:{cs:'Studené nápoje',en:'Cold drinks'},
        items:[
          { name:{cs:'Džbán vody s citrusy 1,5 / 0,5l',en:'Water jug with citrus 1.5 / 0.5l'}, price:'89 / 49 Kč' },
          { name:{cs:'Curiosa džusy (jablko, pomeranč, multivitamin, jahoda) 0,2l',en:'Curiosa juices (apple, orange, multivitamin, strawberry) 0.2l'}, price:'59 Kč' },
          { name:{cs:'Fritz cola VEGAN 0,3l / Matcha grep 0,3l',en:'Fritz cola VEGAN 0.3l / Matcha grapefruit 0.3l'}, price:'65 Kč' },
          { name:{cs:'Limonády Vanda (malina nebo mango s bergamotem) 0,4l',en:'Vanda lemonades (raspberry or mango with bergamot) 0.4l'}, price:'85 Kč', photo:'Lemoniada.png' },
          { name:{cs:'Zázvorová limonáda Gingles 0,4l',en:'Gingles ginger lemonade 0.4l'}, price:'85 Kč', photo:'Lemoniada.png' },
          { name:{cs:'Čerstvě lisovaná šťáva z pomerančů 0,2l',en:'Freshly squeezed orange juice 0.2l'}, price:'89 Kč' }
        ]},

      { id:'g-snidane', title:{cs:'Něco k snídani',en:'Breakfast'},
        note:{cs:'Připravujeme do 12 hodin.',en:'Served until 12 noon.'},
        items:[
          { name:{cs:'Croissant s jahodovou marmeládou nebo Nutellou (A 1, 3, 5, 7)',en:'Croissant with strawberry jam or Nutella (A 1, 3, 5, 7)'}, price:'65 Kč', photo:'Croissant A Espressso Tost.png' },
          { name:{cs:'Bruschetta s rajčaty a mozzarelou (A 1, 7)',en:'Bruschetta with tomatoes and mozzarella (A 1, 7)'}, price:'133 Kč' },
          { name:{cs:'Tři vejce do skla s kváskovým chlebem a máslem (A 1, 3, 7)',en:'Three eggs in a glass with sourdough bread and butter (A 1, 3, 7)'}, price:'144 Kč' },
          { name:{cs:'Ovocný salát s jogurtem, medem a bio müsli (A 1, 7, 8)',en:'Fruit salad with yoghurt, honey and organic muesli (A 1, 7, 8)'}, price:'155 Kč' },
          { name:{cs:'Ovesná kaše s ovocem, skořicí a javorovým sirupem (A 1, 7)',en:'Oatmeal with fruit, cinnamon and maple syrup (A 1, 7)'}, price:'166 Kč' },
          { name:{cs:'Francouzský toast sladký s ovocem (A 1, 3, 7)',en:'Sweet French toast with fruit (A 1, 3, 7)'}, price:'188 Kč' },
          { name:{cs:'Francouzský toast slaný se sýrem, slaninou a bylinkami (A 1, 3, 7)',en:'Savoury French toast with cheese, bacon and herbs (A 1, 3, 7)'}, price:'199 Kč', photo:'Slaný Francouyský Toust.png' },
          { name:{cs:'Lívance s tvarohem a javorovým sirupem zdobené ovocem (A 1, 3, 7)',en:'Pancakes with curd cheese and maple syrup, garnished with fruit (A 1, 3, 7)'}, price:'222 Kč', photo:'Livance.png' },
          { name:{cs:'Full English (vejce, slanina, fazole, párky, rajčata, žampiony) (A 1, 3)',en:'Full English (eggs, bacon, beans, sausages, tomatoes, mushrooms) (A 1, 3)'}, price:'244 Kč', photo:'Full English.png' },
          { name:{cs:'Krajíc kváskového chleba s máslem a medem (A 1, 7)',en:'Slice of sourdough bread with butter and honey (A 1, 7)'}, price:'65 Kč', photo:'Chléb S Medem.png' }
        ]},

      { id:'g-sladke', title:{cs:'Něco sladkého',en:'Something sweet'},
        note:{cs:'Vyberte si prosím z naší nabídky výjimečných domácích dezertů na baru.',
              en:'Please choose from our exceptional homemade desserts at the bar.'},
        items:[
          { name:{cs:'Palačinka s marmeládou nebo Nutellou a šlehačkou (A 1, 3, 5, 7)',en:'Pancake with jam or Nutella and whipped cream (A 1, 3, 5, 7)'}, price:'144 Kč' },
          { name:{cs:'Palačinka s tvarohem, javorovým sirupem a borůvkami (A 1, 3, 7)',en:'Pancake with curd cheese, maple syrup and blueberries (A 1, 3, 7)'}, price:'155 Kč' }
        ],
        strip:['Cakes.png','Cheescake Slice.png','Čokoládový Cheesecake.png','Kávový Cheescake.png','Skořicový Šnek A Cappuccino.png','Tiramisu.png','White Cafe & Bulka.png'] },

      { id:'g-slane', title:{cs:'Něco slaného',en:'Something savoury'},
        items:[
          { name:{cs:'Mistička s pistáciemi (A 8)',en:'Bowl of pistachios (A 8)'}, price:'65 Kč' },
          { name:{cs:'Toast se šunkou a sýrem, salátek (A 1, 3, 7)',en:'Toast with ham and cheese, side salad (A 1, 3, 7)'}, price:'111 Kč' },
          { name:{cs:'Toast se slaninou a Cheddarem, salátek (A 1, 3, 7)',en:'Toast with bacon and Cheddar, side salad (A 1, 3, 7)'}, price:'122 Kč' },
          { name:{cs:'Toast s mozzarellou a sušenými rajčaty, salátek (A 1, 3, 7)',en:'Toast with mozzarella and sun-dried tomatoes, side salad (A 1, 3, 7)'}, price:'133 Kč' },
          { name:{cs:'Mistička s bylinkovou pomazánkou, kváskový chléb (A 1, 7)',en:'Bowl of herb spread, sourdough bread (A 1, 7)'}, price:'122 Kč' },
          { name:{cs:'Mistička s avokádovou pomazánkou, kváskový chléb (A 1, 7)',en:'Bowl of avocado spread, sourdough bread (A 1, 7)'}, price:'133 Kč' },
          { name:{cs:'Talířek s více druhy sýrů (A 7) nebo uzenin, kváskový chléb (A 7)',en:'Plate of assorted cheeses (A 7) or cured meats, sourdough bread (A 7)'}, price:'155 Kč' },
          { name:{cs:'Vaječná omeleta se šunkou či sýrem, kváskový chléb, salátek (A 1, 3, 7)',en:'Omelette with ham or cheese, sourdough bread, side salad (A 1, 3, 7)'}, price:'166 Kč' },
          { name:{cs:'Grilovaný Camembert, brusinky, salátek, kváskový chléb (A 1, 7)',en:'Grilled Camembert, cranberries, side salad, sourdough bread (A 1, 7)'}, price:'177 Kč', photo:'Grilovaný Hermelin Šalátik.png' },
          { name:{cs:'Prkénko se vším pro dva (pomazánka, sýry, uzeniny, salát, chléb) (A 1, 7)',en:'Platter with everything for two (spread, cheeses, cured meats, salad, bread) (A 1, 7)'}, price:'277 Kč' },
          { name:{cs:'Krajíc kváskového chleba navíc (A 1)',en:'Extra slice of sourdough bread (A 1)'}, price:'25 Kč' }
        ]},

      { id:'g-pivo', title:{cs:'Pivo',en:'Beer'},
        items:[
          { name:{cs:'Točené pivo Vorkloster 11° Jantarový ležák 0,3 / 0,5l',en:'Vorkloster 11° amber lager on tap 0.3 / 0.5l'}, price:'49 / 65 Kč' },
          { name:{cs:'Lahvové pivo Vorkloster Cero nealkoholické 0,3l',en:'Vorkloster Cero non-alcoholic bottled beer 0.3l'}, price:'65 Kč' }
        ]},

      { id:'g-vino', title:{cs:'Víno',en:'Wine'},
        note:{cs:'Točené víno frizzante bianco Grande Romeo 0,1l — 55 Kč · Točené víno Fontaine du Clos suché 0,5 / 0,1l — 222 / 55 Kč. Nabídku lahvových vín obsahuje vinný lístek — výběr moravských vín z Vinařství Osička (Velké Bílovice).',
              en:'Draught frizzante bianco Grande Romeo 0.1l — 55 Kč · Fontaine du Clos dry 0.5 / 0.1l — 222 / 55 Kč. Bottled wines: Moravian selection from Osička winery (Velké Bílovice).'},
        items:[
          { name:{cs:'Müller Thurgau — pozdní sběr, suché 0,7 / 0,1l',en:'Müller Thurgau — late harvest, dry 0.7 / 0.1l'}, price:'359 / 60 Kč' },
          { name:{cs:'Rulandské šedé — pozdní sběr, polosuché 0,7 / 0,1l',en:'Pinot Gris — late harvest, off-dry 0.7 / 0.1l'}, price:'377 / 60 Kč' },
          { name:{cs:'Chardonnay — pozdní sběr, suché 0,7 / 0,1l',en:'Chardonnay — late harvest, dry 0.7 / 0.1l'}, price:'377 / 65 Kč' },
          { name:{cs:'Veltlínské zelené — pozdní sběr, suché 0,7 / 0,1l',en:'Grüner Veltliner — late harvest, dry 0.7 / 0.1l'}, price:'359 / 60 Kč' },
          { name:{cs:'Tramín červený — výběr z bobulí, polosladké 0,7 / 0,1l',en:'Red Traminer — berry selection, semi-sweet 0.7 / 0.1l'}, price:'377 / 65 Kč' },
          { name:{cs:'Irsai Oliver — pozdní sběr, polosladké 0,7 / 0,1l',en:'Irsai Olivér — late harvest, semi-sweet 0.7 / 0.1l'}, price:'377 / 60 Kč' },
          { name:{cs:'Pálava — výběr z bobulí, sladké 0,7 / 0,1l',en:'Pálava — berry selection, sweet 0.7 / 0.1l'}, price:'395 / 65 Kč' },
          { name:{cs:'Cabernet Moravia rosé — zemské, suché 0,7 / 0,1l',en:'Cabernet Moravia rosé — regional, dry 0.7 / 0.1l'}, price:'359 / 55 Kč' },
          { name:{cs:'Cabernet Moravia — výběr z hroznů, suché 0,7 / 0,1l',en:'Cabernet Moravia — grape selection, dry 0.7 / 0.1l'}, price:'377 / 60 Kč' },
          { name:{cs:'Dornfelder — pozdní sběr, suché 0,7 / 0,1l',en:'Dornfelder — late harvest, dry 0.7 / 0.1l'}, price:'377 / 60 Kč' },
          { name:{cs:'CHILLÍNO ORIGINÁL 0,5 / 0,1l',en:'CHILLÍNO ORIGINÁL 0.5 / 0.1l'}, price:'359 / 77 Kč' },
          { name:{cs:'CHILLÍNO ROSÉ 0,5 / 0,1l',en:'CHILLÍNO ROSÉ 0.5 / 0.1l'}, price:'359 / 77 Kč' }
        ]},

      { id:'g-drinky', title:{cs:'Alkoholické drinky',en:'Cocktails'},
        items:[
          { name:{cs:'Mimosa (Prosecco, pomerančový džus)',en:'Mimosa (Prosecco, orange juice)'}, price:'111 Kč' },
          { name:{cs:'Garibaldi (Campari, pomerančový džus)',en:'Garibaldi (Campari, orange juice)'}, price:'129 Kč' },
          { name:{cs:'Cuba libre (bílý rum, Coca-cola, limetka)',en:'Cuba libre (white rum, Coca-Cola, lime)'}, price:'139 Kč' },
          { name:{cs:'Endorphin drink (gin Endorphin, tonic)',en:'Endorphin drink (Endorphin gin, tonic)'}, price:'149 Kč' },
          { name:{cs:'Margarita (tequila, Cointreau, citronová šťáva, sůl)',en:'Margarita (tequila, Cointreau, lemon juice, salt)'}, price:'149 Kč' },
          { name:{cs:'Negroni (gin, sladký vermut, Campari)',en:'Negroni (gin, sweet vermouth, Campari)'}, price:'149 Kč' },
          { name:{cs:'Aperol Spritz (Aperol, Prosecco, perlivá voda)',en:'Aperol Spritz (Aperol, Prosecco, sparkling water)'}, price:'149 Kč' },
          { name:{cs:'Daiquiri (bílý rum, limetková šťáva)',en:'Daiquiri (white rum, lime juice)'}, price:'134 Kč' },
          { name:{cs:'Tequila sunrise (tequila, pomerančový džus, grenadina)',en:'Tequila sunrise (tequila, orange juice, grenadine)'}, price:'159 Kč' },
          { name:{cs:'Cosmopolitan (vodka, Cointreau, brusinkový džus, limetka)',en:'Cosmopolitan (vodka, Cointreau, cranberry juice, lime)'}, price:'159 Kč' },
          { name:{cs:'Mojito (bílý rum, máta, třtinový cukr, limetka)',en:'Mojito (white rum, mint, cane sugar, lime)'}, price:'159 Kč' },
          { name:{cs:'Sex on the beach (vodka, broskvová vodka, pom. a brusinkový džus)',en:'Sex on the beach (vodka, peach vodka, orange & cranberry juice)'}, price:'145 Kč' },
          { name:{cs:'Moon River (brandy, Cointreau, Galliano, gin, limetka)',en:'Moon River (brandy, Cointreau, Galliano, gin, lime)'}, price:'169 Kč' },
          { name:{cs:'Scorpion (bílý a hnědý rum, brandy, Cointreau, pom. džus, limetka)',en:'Scorpion (white & dark rum, brandy, Cointreau, orange juice, lime)'}, price:'169 Kč' },
          { name:{cs:'Long Island Iced Tea (gin, vodka, tequila, bílý rum, Cointreau…)',en:'Long Island Iced Tea (gin, vodka, tequila, white rum, Cointreau…)'}, price:'169 Kč' }
        ]},

      { id:'g-nealko', title:{cs:'Nealkoholické drinky',en:'Mocktails'},
        items:[
          { name:{cs:'Virgin Mojito',en:'Virgin Mojito'}, price:'111 Kč' },
          { name:{cs:'Safe on the beach',en:'Safe on the beach'}, price:'111 Kč' },
          { name:{cs:'Virgin Margarita (pomerančový džus, limetková a citronová šťáva)',en:'Virgin Margarita (orange juice, lime and lemon juice)'}, price:'111 Kč' }
        ]}
    ],

    allergens: [
      { code:'A1', label:{cs:'obiloviny obsahující lepek',en:'cereals containing gluten'} },
      { code:'A3', label:{cs:'vejce',en:'eggs'} },
      { code:'A5', label:{cs:'podzemnice olejná (arašídy)',en:'peanuts'} },
      { code:'A6', label:{cs:'sójové boby (sója)',en:'soy'} },
      { code:'A7', label:{cs:'mléko',en:'milk'} },
      { code:'A8', label:{cs:'skořápkové plody',en:'nuts'} }
    ]
  },

  footer: {
    credits: {
      cs:'Fotky: Nathan Dumlao, Nadia Valko, Toa Heftiba (Unsplash)',
      en:'Photos: Nathan Dumlao, Nadia Valko, Toa Heftiba (Unsplash)'
    }
  }
};
