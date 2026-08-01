/* ============================================================
   BAR — vinný bar. Ukázkový obsah.
   Fotky leží v photos/bar/vinny-bar/ (01–06.webp, interier/01–04.webp).
   ============================================================ */
window.SITE = {

  lang: { default:'cs', available:['cs','en'], storageKey:'bar-vino-lang' },

  theme: { auto:true, default:'light', toggle:true,
           timeZone:'Europe/Prague', storageKey:'bar-vino-theme', manualTtlHours:12 },

  brand: {
    name: 'Moje vinárna',
    title: { cs:'Moje vinárna — vinný bar', en:'My wine bar' },
    description: {
      cs:'Ukázková šablona webu pro vinný bar. Osmdesát etiket, dvanáct po sklenici, láhev i s sebou.',
      en:'Demo website template for a wine bar. Eighty labels, twelve by the glass, bottles to take away.'
    },
    color: null
  },

  contact: {
    phone: '+420 123 456 789',
    phoneHref: 'tel:+420123456789',
    address: { line1:'Ukázková 7', line2:'602 00 Brno', short:'Ukázková 7, Brno' },
    mapsUrl: 'https://maps.google.com/?q=Brno',
    mapCoords: '49.1951,16.6068',
    mapZoom: 16
  },

  hours: { perDay:['','16:00–23:00','16:00–23:00','16:00–24:00','16:00–01:00','15:00–01:00','15:00–21:00'],
           summary:{ cs:'Út–Ne, pondělí zavřeno', en:'Tue–Sun, closed on Monday' } },

  rating: { score:'4.8', count:194 },

  hero: {
    kicker: { cs:'Vinný bar · Brno', en:'Wine bar · Brno' },
    sub: {
      cs:'Osmdesát etiket v regálu, dvanáct otevřených po sklenici. Malí vinaři z Moravy a kus Evropy k tomu.',
      en:'Eighty labels on the shelf, twelve open by the glass. Small growers from Moravia and a slice of Europe.'
    },
    cta: { cs:'Prohlédnout kartu', en:'See the list' }
  },

  /* Šest fotek na výšku — v hero leží v jedné překrývající se řadě
     jako láhve v regálu. Svislý formát tu funguje nejlíp. */
  gallery: [
    { src:'../../photos/bar/vinny-bar/01.webp',
      alt:{cs:'Nalévání bílého vína do sklenice',en:'Pouring white wine into a glass'},
      caption:{cs:'Bílé',en:'White'} },
    { src:'../../photos/bar/vinny-bar/02.webp',
      alt:{cs:'Sklenka červeného na dřevěném stole',en:'A glass of red on a wooden table'},
      caption:{cs:'Červené',en:'Red'} },
    { src:'../../photos/bar/vinny-bar/03.webp',
      alt:{cs:'Nalévání červeného vína do sklenice',en:'Pouring red wine into a glass'},
      caption:{cs:'Nálev',en:'The pour'} },
    { src:'../../photos/bar/vinny-bar/04.webp',
      alt:{cs:'Nalévání červeného u prostřeného stolu',en:'Pouring red at a set table'},
      caption:{cs:'U stolu',en:'At the table'} },
    { src:'../../photos/bar/vinny-bar/05.webp',
      alt:{cs:'Nalévání bílého vína na terase',en:'Pouring white wine on the terrace'},
      caption:{cs:'Terasa',en:'The terrace'} },
    { src:'../../photos/bar/vinny-bar/06.webp',
      alt:{cs:'Nalévání růžového do dvou sklenic',en:'Pouring rosé into two glasses'},
      caption:{cs:'Rosé',en:'Rosé'} }
  ],

  /* Listovací galerie interiéru v sekci „Vinárna“.
     Soubory patří do photos/bar/vinny-bar/interier/. */
  interior: [
    { src:'../../photos/bar/vinny-bar/interier/01.webp',
      alt:{cs:'Pult s otevřenými lahvemi',en:'Counter with open bottles'},
      caption:{cs:'Pult',en:'The counter'} },
    { src:'../../photos/bar/vinny-bar/interier/02.webp',
      alt:{cs:'Sklepní bar s podsvícenými regály',en:'A cellar bar with backlit shelves'},
      caption:{cs:'Sklep',en:'The cellar'} },
    { src:'../../photos/bar/vinny-bar/interier/03.webp',
      alt:{cs:'Regál s lahvemi po strop',en:'Shelf of bottles up to the ceiling'},
      caption:{cs:'Regál',en:'The shelf'} },
    { src:'../../photos/bar/vinny-bar/interier/04.webp',
      alt:{cs:'Stůl se svíčkou a sklenkou vína',en:'A table with a candle and a glass of wine'},
      caption:{cs:'Večer',en:'Evening'} }
  ],

  menu: {
    intro: {
      cs:'Seznam po sklenici se mění každý týden. Cokoli z regálu si můžete vzít i s sebou. Ceny jsou ilustrační.',
      en:'The by-the-glass list changes weekly. Anything on the shelf can go home with you. Prices are illustrative.'
    },

    groups: [
      { id:'g-bila', title:{cs:'Bílá po sklenici',en:'White by the glass'},
        note:{cs:'0,15 l. Ryzlink a veltlín máme skoro vždycky.',en:'0.15 l. Riesling and grüner are nearly always here.'},
        items:[
          { name:{cs:'Ryzlink rýnský, Znojemsko, suché',en:'Rhine Riesling, Znojmo, dry'}, price:'95 Kč' },
          { name:{cs:'Veltlínské zelené, Mikulovsko',en:'Grüner Veltliner, Mikulov'}, price:'89 Kč' },
          { name:{cs:'Rulandské bílé, Velké Pavlovice',en:'Pinot Blanc, Velké Pavlovice'}, price:'105 Kč' },
          { name:{cs:'Sauvignon, Slovácko, aromatické',en:'Sauvignon, Slovácko, aromatic'}, price:'110 Kč' }
        ]},

      { id:'g-cervena', title:{cs:'Červená po sklenici',en:'Red by the glass'},
        items:[
          { name:{cs:'Frankovka, Velké Bílovice',en:'Blaufränkisch, Velké Bílovice'}, price:'105 Kč' },
          { name:{cs:'Modrý Portugal, lehký, chlazený',en:'Blauer Portugieser, light, chilled'}, price:'95 Kč' },
          { name:{cs:'Rulandské modré, barrique',en:'Pinot Noir, barrique'}, price:'135 Kč' },
          { name:{cs:'Nebbiolo, Piemont',en:'Nebbiolo, Piedmont'}, price:'145 Kč' }
        ]},

      { id:'g-bublinky', title:{cs:'Bublinky a oranžová',en:'Bubbles & orange'},
        items:[
          { name:{cs:'Sekt lahvově kvašený, brut',en:'Bottle-fermented sparkling, brut'}, price:'125 Kč' },
          { name:{cs:'Pét-nat, Morava',en:'Pét-nat, Moravia'}, price:'135 Kč' },
          { name:{cs:'Oranžové z pálavy, 30 dní na slupce',en:'Orange from Pálava, 30 days on skins'}, price:'145 Kč' },
          { name:{cs:'Prosecco, Veneto',en:'Prosecco, Veneto'}, price:'115 Kč' }
        ]},

      { id:'g-lahve', title:{cs:'Láhve z regálu',en:'Bottles from the shelf'},
        note:{cs:'Cena je maloobchodní, korkovné neúčtujeme. S sebou za stejné peníze.',en:'Retail price, no corkage. Same price to take away.'},
        items:[
          { name:{cs:'Ryzlink, pozdní sběr, 0,75 l',en:'Riesling, late harvest, 0.75 l'}, price:'490 Kč' },
          { name:{cs:'Frankovka, výběr z hroznů, 0,75 l',en:'Blaufränkisch, grape selection, 0.75 l'}, price:'590 Kč' },
          { name:{cs:'Šumivé z Champagne, 0,75 l',en:'Champagne, 0.75 l'}, price:'1 690 Kč' },
          { name:{cs:'Slámové víno, 0,2 l',en:'Straw wine, 0.2 l'}, price:'690 Kč' }
        ]},

      { id:'g-kvinu', title:{cs:'K vínu',en:'With the wine'},
        items:[
          { name:{cs:'Prkénko sýrů (3 druhy)',en:'Cheese board (3 kinds)'}, price:'245 Kč' },
          { name:{cs:'Šunka z Parmy a olivy',en:'Parma ham and olives'}, price:'225 Kč' },
          { name:{cs:'Chléb z kvásku s máslem',en:'Sourdough bread with butter'}, price:'85 Kč' },
          { name:{cs:'Mandle pražené v soli',en:'Salt-roasted almonds'}, price:'75 Kč' }
        ]}
    ],

    /* Data pro sekci „Alergeny“ — šablony baru ji nezobrazují. */
    allergens: [
      { code:'A1', label:{cs:'obiloviny obsahující lepek',en:'cereals containing gluten'} },
      { code:'A7', label:{cs:'mléko',en:'milk'} },
      { code:'A8', label:{cs:'skořápkové plody',en:'nuts'} },
      { code:'A12', label:{cs:'oxid siřičitý a siřičitany',en:'sulphur dioxide and sulphites'} }
    ]
  },

  footer: {
    credits: { cs:'Ukázková šablona · ilustrační obsah', en:'Demo template · illustrative content' }
  }
};
