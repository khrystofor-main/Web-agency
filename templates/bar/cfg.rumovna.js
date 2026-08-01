/* ============================================================
   BAR — rumovna / stojáková výčepna. Ukázkový obsah.
   Fotky leží v photos/bar/rumovna/ (01–06.webp, interier/01–04.webp).
   ============================================================ */
window.SITE = {

  lang: { default:'cs', available:['cs','en'], storageKey:'bar-rumovna-lang' },

  theme: { auto:true, default:'light', toggle:true,
           timeZone:'Europe/Prague', storageKey:'bar-rumovna-theme', manualTtlHours:12 },

  brand: {
    name: 'Moje rumovna',
    title: { cs:'Moje rumovna — stojáková výčepna', en:'My rum bar — a standing bar' },
    description: {
      cs:'Ukázková šablona webu pro rumovnu. Dlouhý pult, police lahví, chlebíčky do noci.',
      en:'Demo website template for a standing bar. A long counter, a shelf of bottles, sandwiches till late.'
    },
    color: null
  },

  contact: {
    phone: '+420 123 456 789',
    phoneHref: 'tel:+420123456789',
    address: { line1:'Ukázková 3', line2:'130 00 Praha 3', short:'Ukázková 3, Praha 3' },
    mapsUrl: 'https://maps.google.com/?q=Praha+3',
    mapCoords: '50.0810,14.4500',
    mapZoom: 16
  },

  hours: { perDay:['15:00–23:00','15:00–23:00','15:00–23:00','15:00–24:00','14:00–01:00','14:00–01:00',''],
           summary:{ cs:'Po–So, neděle zavřeno', en:'Mon–Sat, closed on Sunday' } },

  rating: { score:'4.6', count:521 },

  hero: {
    kicker: { cs:'Rumovna od roku 1961 · Praha 3', en:'A standing bar since 1961 · Prague 3' },
    sub: {
      cs:'Osm stolků, dlouhý pult a police plná lahví. Objednáte, zaplatíte, pijete — žádné účty a žádná rezervace.',
      en:'Eight tables, a long counter and a shelf full of bottles. Order, pay, drink — no tabs and no bookings.'
    },
    cta: { cs:'Ceník', en:'Price list' }
  },

  /* Šest čtvercových výřezů dolní části plakátu v hero.
     Formát 1:1 sedí nejlíp; detaily fungují líp než celky. */
  gallery: [
    { src:'../../photos/bar/rumovna/01.webp',
      alt:{cs:'Láhve rumu v dřevěné bedně',en:'Rum bottles in a wooden crate'},
      caption:{cs:'Bedna',en:'The crate'} },
    { src:'../../photos/bar/rumovna/02.webp',
      alt:{cs:'Sklenice rumu s ledem na pultu',en:'A glass of rum on the rocks on the counter'},
      caption:{cs:'Panák',en:'A shot'} },
    { src:'../../photos/bar/rumovna/03.webp',
      alt:{cs:'Vysoká sklenice červeného drinku s ledem',en:'A tall glass of a red drink with ice'},
      caption:{cs:'Highball',en:'Highball'} },
    { src:'../../photos/bar/rumovna/04.webp',
      alt:{cs:'Tmavý drink s limetou a ledem',en:'A dark drink with lime and ice'},
      caption:{cs:'S limetou',en:'With lime'} },
    { src:'../../photos/bar/rumovna/05.webp',
      alt:{cs:'Kalionk stařeného rumu v dýmu',en:'A snifter of aged rum in smoke'},
      caption:{cs:'Dým',en:'Smoke'} },
    { src:'../../photos/bar/rumovna/06.webp',
      alt:{cs:'Láhev stařeného rumu na stole',en:'A bottle of aged rum on the table'},
      caption:{cs:'Stařený',en:'Aged'} }
  ],

  /* Listovací galerie interiéru v sekci „Podnik“.
     Soubory patří do photos/bar/rumovna/interier/. */
  interior: [
    { src:'../../photos/bar/rumovna/interier/01.webp',
      alt:{cs:'Dlouhý pult přes celou místnost',en:'A long counter across the room'},
      caption:{cs:'Pult',en:'The counter'} },
    { src:'../../photos/bar/rumovna/interier/02.webp',
      alt:{cs:'Cihlová stěna s regály lahví',en:'A brick wall with shelves of bottles'},
      caption:{cs:'Cihly',en:'Bricks'} },
    { src:'../../photos/bar/rumovna/interier/03.webp',
      alt:{cs:'Police s lahvemi po strop',en:'Shelves of bottles up to the ceiling'},
      caption:{cs:'Police',en:'The shelves'} },
    { src:'../../photos/bar/rumovna/interier/04.webp',
      alt:{cs:'Bar s podsvícenými policemi v teplém světle',en:'A bar with backlit shelves in warm light'},
      caption:{cs:'Bar',en:'The bar'} }
  ],

  menu: {
    intro: {
      cs:'Ceník visí na stěně od nepaměti, tady je jeho opis. Ceny jsou ilustrační.',
      en:'The price board has hung on the wall forever; this is a copy of it. Prices are illustrative.'
    },

    groups: [
      { id:'g-rum', title:{cs:'Rum',en:'Rum'},
        note:{cs:'Vždycky 0,04 l. Dvojitou naléváme za jeden a půl.',en:'Always 0.04 l. A double costs one and a half.'},
        items:[
          { name:{cs:'Tuzemák',en:'Czech rum-style spirit'}, price:'45 Kč' },
          { name:{cs:'Kubánský 3 roky',en:'Cuban 3 y.o.'}, price:'75 Kč' },
          { name:{cs:'Guatemalský 8 let',en:'Guatemalan 8 y.o.'}, price:'115 Kč' },
          { name:{cs:'Jamajský, tmavý',en:'Jamaican, dark'}, price:'105 Kč' },
          { name:{cs:'Rum měsíce',en:'Rum of the month'}, price:'95 Kč' }
        ]},

      { id:'g-panaky', title:{cs:'Panáky ostatní',en:'Other shots'},
        items:[
          { name:{cs:'Fernet',en:'Fernet'}, price:'49 Kč' },
          { name:{cs:'Slivovice domácí',en:'Homemade plum brandy'}, price:'59 Kč' },
          { name:{cs:'Hruškovice',en:'Pear brandy'}, price:'59 Kč' },
          { name:{cs:'Vodka',en:'Vodka'}, price:'45 Kč' },
          { name:{cs:'Whisky',en:'Whisky'}, price:'79 Kč' },
          { name:{cs:'Bylinný likér',en:'Herbal liqueur'}, price:'55 Kč' }
        ]},

      { id:'g-pivo', title:{cs:'Pivo a nealko',en:'Beer & soft'},
        items:[
          { name:{cs:'Ležák 10° (0,5 l)',en:'Lager 10° (0.5 l)'}, price:'39 Kč' },
          { name:{cs:'Ležák 12° (0,5 l)',en:'Lager 12° (0.5 l)'}, price:'49 Kč' },
          { name:{cs:'Nealko pivo (0,5 l)',en:'Non-alcoholic beer (0.5 l)'}, price:'39 Kč' },
          { name:{cs:'Kofola (0,3 l)',en:'Kofola (0.3 l)'}, price:'35 Kč' },
          { name:{cs:'Voda se sirupem (0,3 l)',en:'Water with syrup (0.3 l)'}, price:'25 Kč' }
        ]},

      { id:'g-jidlo', title:{cs:'K zakousnutí',en:'A bite'},
        note:{cs:'Dokud vydrží. Po půlnoci už jen to, co se nekazí.',en:'While supplies last. After midnight only what keeps.'},
        items:[
          { name:{cs:'Chlebíček se šunkou',en:'Open sandwich with ham'}, price:'39 Kč' },
          { name:{cs:'Chlebíček s vajíčkem',en:'Open sandwich with egg'}, price:'35 Kč' },
          { name:{cs:'Utopenec',en:'Pickled sausage'}, price:'69 Kč' },
          { name:{cs:'Nakládaný hermelín',en:'Pickled camembert'}, price:'89 Kč' },
          { name:{cs:'Slaný preclík',en:'Salted pretzel'}, price:'29 Kč' }
        ]}
    ],

    /* Data pro sekci „Alergeny“ — šablony baru ji nezobrazují. */
    allergens: [
      { code:'A1', label:{cs:'obiloviny obsahující lepek',en:'cereals containing gluten'} },
      { code:'A3', label:{cs:'vejce',en:'eggs'} },
      { code:'A7', label:{cs:'mléko',en:'milk'} }
    ]
  },

  footer: {
    credits: { cs:'Ukázková šablona · ilustrační obsah', en:'Demo template · illustrative content' }
  }
};
