/* ============================================================
   BISTRO — italská kuchyně. Ukázkový obsah.
   Fotky se v této sadě šablon nepoužívají (CSS zástupné vzory).
   ============================================================ */
window.SITE = {

  lang: { default:'cs', available:['cs','en'], storageKey:'bistro-it-lang' },

  theme: { auto:true, default:'light', toggle:true,
           timeZone:'Europe/Prague', storageKey:'bistro-it-theme', manualTtlHours:12 },

  brand: {
    name: 'Bistro',
    title: { cs:'Bistro — italská kuchyně', en:'Bistro — Italian cuisine' },
    description: {
      cs:'Ukázková šablona webu pro italské bistro. Čerstvé těstoviny, focaccia, tiramisu, espresso.',
      en:'Demo website template for an Italian bistro. Fresh pasta, focaccia, tiramisu, espresso.'
    },
    color: null
  },

  contact: {
    phone: '+420 123 456 789',
    phoneHref: 'tel:+420123456789',
    address: { line1:'Ukázková 123', line2:'602 00 Brno', short:'Ukázková 123, Brno' },
    mapsUrl: 'https://maps.google.com/?q=Brno',
    mapCoords: '49.1951,16.6132',
    mapZoom: 15
  },

  hours: { perDay:['11:00–22:00','11:00–22:00','11:00–22:00','11:00–22:00','11:00–23:00','12:00–23:00','12:00–21:00'],
           summary:{ cs:'Otevřeno denně od 11', en:'Open daily from 11' } },

  rating: { score:'4.8', count:289 },

  hero: {
    kicker: { cs:'Italská kuchyně · Bistro', en:'Italian cuisine · Bistro' },
    sub: {
      cs:'Těstoviny válíme ráno, omáčky vaříme odpoledne, večer se jen usmíváme. Pět druhů past denně, nic zmrazeného.',
      en:'We roll the pasta in the morning, cook the sauces in the afternoon and just smile in the evening. Five pastas a day, nothing frozen.'
    },
    cta: { cs:'Kde nás najdete', en:'Find us' },
    imageAlt: { cs:'', en:'' },
    caption: { cs:'Těstoviny válíme každé ráno', en:'Pasta rolled every morning' },
    captionMeta: 'BRNO'
  },

  menu: {
    intro: {
      cs:'Denní pasta je na tabuli u vchodu. Ceny jsou ilustrační.',
      en:'The pasta of the day is on the board by the entrance. Prices are illustrative.'
    },

    groups: [
      { id:'g-pasta', title:{cs:'Pasta',en:'Pasta'},
        note:{cs:'Vlastní čerstvé těstoviny, vaříme al dente.',en:'Our own fresh pasta, cooked al dente.'},
        items:[
          { name:{cs:'Cacio e pepe',en:'Cacio e pepe'}, price:'229 Kč' },
          { name:{cs:'Tagliatelle al ragù bolognese',en:'Tagliatelle al ragù bolognese'}, price:'259 Kč' },
          { name:{cs:'Spaghetti alle vongole',en:'Spaghetti alle vongole'}, price:'295 Kč' },
          { name:{cs:'Gnocchi al pesto genovese',en:'Gnocchi al pesto genovese'}, price:'235 Kč' }
        ]},

      { id:'g-antipasti', title:{cs:'Antipasti',en:'Antipasti'},
        items:[
          { name:{cs:'Focaccia s rozmarýnem a olivovým olejem',en:'Focaccia with rosemary and olive oil'}, price:'95 Kč' },
          { name:{cs:'Bruschetta se sušenými rajčaty',en:'Bruschetta with sun-dried tomatoes'}, price:'115 Kč' },
          { name:{cs:'Caprese s buvolí mozzarellou',en:'Caprese with buffalo mozzarella'}, price:'175 Kč' },
          { name:{cs:'Prkénko sýrů a salámů',en:'Cheese and salami board'}, price:'265 Kč' }
        ]},

      { id:'g-secondi', title:{cs:'Secondi',en:'Secondi'},
        items:[
          { name:{cs:'Saltimbocca alla romana',en:'Saltimbocca alla romana'}, price:'315 Kč' },
          { name:{cs:'Pollo al limone s bramborami',en:'Pollo al limone with potatoes'}, price:'275 Kč' },
          { name:{cs:'Melanzane alla parmigiana',en:'Melanzane alla parmigiana'}, price:'229 Kč' },
          { name:{cs:'Risotto ai funghi porcini',en:'Risotto ai funghi porcini'}, price:'259 Kč' }
        ]},

      { id:'g-dolci', title:{cs:'Dolci a káva',en:'Dolci & coffee'},
        items:[
          { name:{cs:'Tiramisu',en:'Tiramisu'}, price:'119 Kč' },
          { name:{cs:'Panna cotta s lesním ovocem',en:'Panna cotta with forest fruit'}, price:'109 Kč' },
          { name:{cs:'Espresso',en:'Espresso'}, price:'55 Kč' },
          { name:{cs:'Affogato al caffè',en:'Affogato al caffè'}, price:'95 Kč' }
        ]},

      { id:'g-vino', title:{cs:'Víno',en:'Wine'},
        items:[
          { name:{cs:'Chianti Classico 0,15 l',en:'Chianti Classico 0.15 l'}, price:'95 Kč' },
          { name:{cs:'Vermentino 0,15 l',en:'Vermentino 0.15 l'}, price:'89 Kč' },
          { name:{cs:'Prosecco 0,1 l',en:'Prosecco 0.1 l'}, price:'85 Kč' },
          { name:{cs:'Aperol Spritz',en:'Aperol Spritz'}, price:'145 Kč' }
        ]}
    ],

    allergens: [
      { code:'A1', label:{cs:'obiloviny obsahující lepek',en:'cereals containing gluten'} },
      { code:'A3', label:{cs:'vejce',en:'eggs'} },
      { code:'A7', label:{cs:'mléko',en:'milk'} },
      { code:'A8', label:{cs:'skořápkové plody',en:'nuts'} },
      { code:'A14', label:{cs:'měkkýši',en:'molluscs'} }
    ]
  },

  footer: {
    credits: { cs:'Ukázková šablona · ilustrační obsah', en:'Demo template · illustrative content' }
  }
};
