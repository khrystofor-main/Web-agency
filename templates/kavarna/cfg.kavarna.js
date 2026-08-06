/* ============================================================
   SITE CONFIG — všechna data konkrétní kavárny na jednom místě.
   Toto je jediný soubor, který se upravuje pro nový podnik.
   Prázdný skeleton s komentáři: site.config.example.js
   Dvojjazyčné texty se zapisují jako { cs:'…', en:'…' }.

   Aktuální obsah je obecná ukázka („Kavárna“) — žádný konkrétní
   podnik. Ceny i položky jsou jen ilustrační.
   ============================================================ */
window.SITE = {

  lang: { default:'cs', available:['cs','en'], storageKey:'site-lang' },

  /* Téma: světlé přes den, tmavé po setmění (podle času v Česku).
     auto:false → web zůstane v tématu `default`.
     toggle:false → tlačítko přepínače z navigace zmizí.
     manualTtlHours: za jak dlouho vyprší ruční volba návštěvníka (0 = nikdy). */
  theme: { auto:true, default:'light', toggle:true,
           timeZone:'Europe/Prague', storageKey:'site-theme', manualTtlHours:12 },

  brand: {
    name: 'Kavárna',
    title: { cs:'Kavárna — ukázková šablona', en:'Kavárna — demo template' },
    description: {
      cs:'Ukázková šablona webu pro kavárnu. Káva, dezerty, snídaně. Otevřeno denně 9:00–22:00.',
      en:'Demo website template for a café. Coffee, desserts, breakfast. Open daily 9:00–22:00.'
    },
    color: null   // např. '#E8442E' — přepíše --brand varianty; null = ponechat barvu šablony
  },

  contact: {
    phone: '+420 123 456 789',
    phoneHref: 'tel:+420123456789',
    address: { line1:'Ukázková 123', line2:'110 00 Praha 1', short:'Ukázková 123, Praha' },
    mapsUrl: 'https://maps.google.com/?q=Praha',
    mapCoords: '50.0874654,14.4212535',
    mapZoom: 15
  },

  /* uniform: stejná doba každý den. Pro rozdílné dny použijte
     perDay: ['9:00–22:00','9:00–22:00',…] (7 položek, od pondělí; '' = zavřeno) */
  hours: { uniform:'9:00–22:00', summary:{ cs:'Otevřeno denně 9–22', en:'Open daily 9–22' } },

  rating: { score:'4.8', count:120 },   // null → blok hodnocení se skryje

  hero: {
    kicker: { cs:'Kavárna', en:'Café' },
    sub: {
      cs:'Místo, kde káva potkává klid. Zastavte se na chvilku — nebo na celé odpoledne.',
      en:'A place where coffee meets calm. Stop by for a moment — or for the whole afternoon.'
    },
    cta: { cs:'Kde nás najdete', en:'Find us' },
    image: '../../photos/optimized/nathan-dumlao-zUNs99PGDg0-unsplash.webp',
    imageAlt: { cs:'Latte art s rostlinami', en:'Latte art with plants' },
    /* popisek pod hero fotkou — používá varianta Editorial */
    caption: { cs:'Ranní světlo v kavárně', en:'Morning light at the café' },
    captionMeta: 'CZ'
  },

  gallery: [
    { src:'../../photos/optimized/nathan-dumlao-zUNs99PGDg0-unsplash.webp', alt:{cs:'Latte art s rostlinami',en:'Latte art with plants'},   caption:{cs:'Ranní rituál',en:'Morning ritual'} },
    { src:'../../photos/optimized/nathan-dumlao-x5FhHp3-UlI-unsplash.webp', alt:{cs:'Tři kávy na stole',en:'Three coffees on a table'},     caption:{cs:'Tři generace kávy',en:'Three generations of coffee'} },
    { src:'../../photos/optimized/toa-heftiba-so-7RsbB_q4-unsplash.webp',   alt:{cs:'Káva a sukulent',en:'Coffee and a succulent'},         caption:{cs:'Náš oblíbený stůl',en:'Our favourite table'} },
    { src:'../../photos/optimized/nathan-dumlao-4QaNg9pu3nk-unsplash.webp', alt:{cs:'Latte art trio',en:'Latte art trio'},                  caption:{cs:'Latte art od baristů',en:'Latte art by our baristas'} },
    { src:'../../photos/optimized/nathan-dumlao-c2Y16tC3yO8-unsplash.webp', alt:{cs:'Káva v listech',en:'Coffee among leaves'},             caption:{cs:'Zelený koutek',en:'Green corner'} },
    { src:'../../photos/optimized/nadia-valko-HINbY6sHh3M-unsplash.webp',   alt:{cs:'Flat white shora',en:'Flat white from above'},         caption:{cs:'Detail, na kterém záleží',en:'The detail that matters'} }
  ],

  menu: {
    photoBase: '../../photos/menu-optimized/',
    photoExt: '.webp',            // fotky se automaticky přepisují na tuto příponu
    intro: {
      cs:'Ukázková nabídka s cenami. Položky i ceny jsou jen ilustrační.',
      en:'Sample menu with prices. Items and prices are for illustration only.'
    },
    stripLabel: { cs:'Domácí dezert — výběr na baru', en:'Homemade dessert — selection at the bar' },

    groups: [
      { id:'g-kava', title:{cs:'Káva',en:'Coffee'},
        items:[
          { name:{cs:'Espresso',en:'Espresso'}, price:'60 Kč' },
          { name:{cs:'Cappuccino',en:'Cappuccino'}, price:'80 Kč' },
          { name:{cs:'Caffè latte',en:'Caffè latte'}, price:'90 Kč' },
          { name:{cs:'Flat white',en:'Flat white'}, price:'95 Kč' }
        ]},

      { id:'g-horka', title:{cs:'Horké nápoje',en:'Hot drinks'},
        items:[
          { name:{cs:'Sypaný čaj',en:'Loose-leaf tea'}, price:'80 Kč' },
          { name:{cs:'Čerstvý mátový čaj',en:'Fresh mint tea'}, price:'85 Kč' },
          { name:{cs:'Chai latte',en:'Chai latte'}, price:'95 Kč' },
          { name:{cs:'Horká čokoláda',en:'Hot chocolate'}, price:'95 Kč' }
        ]},

      { id:'g-studene', title:{cs:'Studené nápoje',en:'Cold drinks'},
        items:[
          { name:{cs:'Domácí limonáda',en:'Homemade lemonade'}, price:'80 Kč' },
          { name:{cs:'Ledový čaj',en:'Iced tea'}, price:'75 Kč' },
          { name:{cs:'Čerstvý džus',en:'Fresh juice'}, price:'85 Kč' },
          { name:{cs:'Minerální voda',en:'Mineral water'}, price:'45 Kč' }
        ]},

      { id:'g-snidane', title:{cs:'Snídaně',en:'Breakfast'},
        items:[
          { name:{cs:'Croissant s marmeládou',en:'Croissant with jam'}, price:'65 Kč' },
          { name:{cs:'Vejce na kváskovém chlebu',en:'Eggs on sourdough bread'}, price:'140 Kč' },
          { name:{cs:'Ovesná kaše s ovocem',en:'Oatmeal with fruit'}, price:'130 Kč' },
          { name:{cs:'Jogurt s müsli a medem',en:'Yoghurt with muesli and honey'}, price:'110 Kč' }
        ]},

      { id:'g-sladke', title:{cs:'Dezerty',en:'Desserts'},
        items:[
          { name:{cs:'Cheesecake',en:'Cheesecake'}, price:'95 Kč' },
          { name:{cs:'Mrkvový dort',en:'Carrot cake'}, price:'95 Kč' },
          { name:{cs:'Palačinky s ovocem',en:'Pancakes with fruit'}, price:'120 Kč' },
          { name:{cs:'Skořicový šnek',en:'Cinnamon roll'}, price:'70 Kč' }
        ]},

      { id:'g-slane', title:{cs:'Slané',en:'Savoury'},
        items:[
          { name:{cs:'Toast se šunkou a sýrem',en:'Ham and cheese toast'}, price:'110 Kč' },
          { name:{cs:'Sendvič s kuřecím masem',en:'Chicken sandwich'}, price:'130 Kč' },
          { name:{cs:'Quiche dne',en:'Quiche of the day'}, price:'120 Kč' },
          { name:{cs:'Polévka dne s pečivem',en:'Soup of the day with bread'}, price:'90 Kč' }
        ]},

      { id:'g-vino', title:{cs:'Víno a pivo',en:'Wine & beer'},
        items:[
          { name:{cs:'Bílé víno 0,1l',en:'White wine 0.1l'}, price:'55 Kč' },
          { name:{cs:'Červené víno 0,1l',en:'Red wine 0.1l'}, price:'55 Kč' },
          { name:{cs:'Točené pivo 0,5l',en:'Draught beer 0.5l'}, price:'60 Kč' },
          { name:{cs:'Nealkoholické pivo 0,3l',en:'Non-alcoholic beer 0.3l'}, price:'50 Kč' }
        ]},

      { id:'g-drinky', title:{cs:'Drinky',en:'Drinks'},
        items:[
          { name:{cs:'Aperol Spritz',en:'Aperol Spritz'}, price:'145 Kč' },
          { name:{cs:'Mojito',en:'Mojito'}, price:'150 Kč' },
          { name:{cs:'Espresso Martini',en:'Espresso Martini'}, price:'150 Kč' },
          { name:{cs:'Virgin Mojito',en:'Virgin Mojito'}, price:'110 Kč' }
        ]}
    ],

    allergens: []
  },

  footer: {
    credits: {
      cs:'Fotky: Nathan Dumlao, Nadia Valko, Toa Heftiba (Unsplash)',
      en:'Photos: Nathan Dumlao, Nadia Valko, Toa Heftiba (Unsplash)'
    }
  }
};
