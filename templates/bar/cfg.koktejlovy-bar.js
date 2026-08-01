/* ============================================================
   BAR — koktejlový bar. Ukázkový obsah.
   Fotky leží v photos/bar/koktejlovy-bar/ (01–06.webp, interier/01–04.webp).
   ============================================================ */
window.SITE = {

  lang: { default:'cs', available:['cs','en'], storageKey:'bar-koktejl-lang' },

  theme: { auto:true, default:'dark', toggle:true,
           timeZone:'Europe/Prague', storageKey:'bar-koktejl-theme', manualTtlHours:12 },

  brand: {
    name: 'Půlnoc',
    title: { cs:'Půlnoc — koktejlový bar', en:'Půlnoc — cocktail bar' },
    description: {
      cs:'Ukázková šablona webu pro koktejlový bar. Dvacet čtyři míst, vlastní led, sezonní sirupy.',
      en:'Demo website template for a cocktail bar. Twenty-four seats, our own ice, seasonal syrups.'
    },
    color: null
  },

  contact: {
    phone: '+420 123 456 789',
    phoneHref: 'tel:+420123456789',
    address: { line1:'Ukázková 4', line2:'110 00 Praha 1', short:'Ukázková 4, Praha 1' },
    mapsUrl: 'https://maps.google.com/?q=Praha+1',
    mapCoords: '50.0870,14.4208',
    mapZoom: 16
  },

  hours: { perDay:['','18:00–01:00','18:00–01:00','18:00–02:00','18:00–03:00','18:00–03:00','18:00–24:00'],
           summary:{ cs:'Út–Ne od 18:00, pondělí zavřeno', en:'Tue–Sun from 6 p.m., closed on Monday' } },

  rating: { score:'4.9', count:236 },

  hero: {
    kicker: { cs:'Koktejlový bar · Praha 1', en:'Cocktail bar · Prague 1' },
    sub: {
      cs:'Dvacet čtyři míst, tlumené světlo a karta, která se mění se sezonou. Řekněte, co máte rádi.',
      en:'Twenty-four seats, low light and a list that changes with the season. Just tell us what you like.'
    },
    cta: { cs:'Koktejlová karta', en:'Cocktail list' }
  },

  /* Šest fotek — v hero se přes celé okno pomalu prolínají.
     Tmavé, kontrastní záběry fungují nejlépe; text leží přes ně. */
  gallery: [
    { src:'../../photos/bar/koktejlovy-bar/01.webp',
      alt:{cs:'Červený koktejl na baru v tlumeném světle',en:'A red cocktail on the bar in low light'},
      caption:{cs:'Na baru',en:'On the bar'} },
    { src:'../../photos/bar/koktejlovy-bar/02.webp',
      alt:{cs:'Láhev whisky a sklenice na pultě',en:'A whisky bottle and a glass on the counter'},
      caption:{cs:'Whisky',en:'Whisky'} },
    { src:'../../photos/bar/koktejlovy-bar/03.webp',
      alt:{cs:'Fialový koktejl s ostružinou',en:'A purple cocktail with a blackberry'},
      caption:{cs:'Coupe',en:'Coupe'} },
    { src:'../../photos/bar/koktejlovy-bar/04.webp',
      alt:{cs:'Tmavý koktejl s limetou a ledem',en:'A dark cocktail with lime and ice'},
      caption:{cs:'S limetou',en:'With lime'} },
    { src:'../../photos/bar/koktejlovy-bar/05.webp',
      alt:{cs:'Koktejl v coupe sklenici na dřevěném stole',en:'A coupe cocktail on a wooden table'},
      caption:{cs:'Na dřevě',en:'On wood'} },
    { src:'../../photos/bar/koktejlovy-bar/06.webp',
      alt:{cs:'Detail koktejlu s bylinkou',en:'Close-up of a cocktail with a herb garnish'},
      caption:{cs:'Detail',en:'Detail'} }
  ],

  /* Listovací galerie interiéru v sekci „Bar“.
     Soubory patří do photos/bar/koktejlovy-bar/interier/. */
  interior: [
    { src:'../../photos/bar/koktejlovy-bar/interier/01.webp',
      alt:{cs:'Dlouhý barový pult v podsvícení',en:'A long bar counter in backlight'},
      caption:{cs:'Pult',en:'The counter'} },
    { src:'../../photos/bar/koktejlovy-bar/interier/02.webp',
      alt:{cs:'Stůl v boxu s růžemi a koktejlem',en:'A booth table with roses and a cocktail'},
      caption:{cs:'Boxy',en:'The booths'} },
    { src:'../../photos/bar/koktejlovy-bar/interier/03.webp',
      alt:{cs:'Podsvícené police s lahvemi za barem',en:'Backlit shelves of bottles behind the bar'},
      caption:{cs:'Police',en:'The shelves'} },
    { src:'../../photos/bar/koktejlovy-bar/interier/04.webp',
      alt:{cs:'Stoly pod policemi s barmanským sklem',en:'Tables under shelves of bar glassware'},
      caption:{cs:'Sál',en:'The room'} }
  ],

  menu: {
    intro: {
      cs:'Karta se mění se sezonou; klasiku umíme kdykoli, i když na lístku není. Ceny jsou ilustrační.',
      en:'The list changes with the season; we will make any classic, even off the menu. Prices are illustrative.'
    },

    groups: [
      { id:'g-podpis', title:{cs:'Podpisové',en:'Signatures'},
        note:{cs:'Šest drinků, které jinde nedostanete. Píšeme je sami, jednou za sezonu.',en:'Six drinks you will not get elsewhere. We write them ourselves, once a season.'},
        items:[
          { name:{cs:'Půlnoc — gin, bezinka, citron, tonic',en:'Půlnoc — gin, elderflower, lemon, tonic'}, price:'265 Kč' },
          { name:{cs:'Kouřová hruška — mezcal, hruška, limeta',en:'Smoked pear — mezcal, pear, lime'}, price:'285 Kč' },
          { name:{cs:'Sametová noc — rum, kakao, portské',en:'Velvet night — rum, cacao, port'}, price:'275 Kč' },
          { name:{cs:'Zahrada — vodka, okurka, bazalka',en:'Garden — vodka, cucumber, basil'}, price:'255 Kč' },
          { name:{cs:'Podzim v lese — whisky, houbový bitter',en:'Autumn woods — whisky, mushroom bitter'}, price:'295 Kč' },
          { name:{cs:'Bez alkoholu — verjus, tymián, hruška',en:'Alcohol-free — verjus, thyme, pear'}, price:'175 Kč' }
        ]},

      { id:'g-klasika', title:{cs:'Klasika',en:'Classics'},
        note:{cs:'Míchané tak, jak mají být. Poměr upravíme podle vás.',en:'Made the way they should be. We will adjust the ratio to your taste.'},
        items:[
          { name:{cs:'Negroni',en:'Negroni'}, price:'225 Kč' },
          { name:{cs:'Old Fashioned',en:'Old Fashioned'}, price:'245 Kč' },
          { name:{cs:'Daiquiri',en:'Daiquiri'}, price:'215 Kč' },
          { name:{cs:'Martini — gin nebo vodka',en:'Martini — gin or vodka'}, price:'235 Kč' },
          { name:{cs:'Manhattan',en:'Manhattan'}, price:'245 Kč' },
          { name:{cs:'Whisky Sour',en:'Whisky Sour'}, price:'225 Kč' }
        ]},

      { id:'g-destilaty', title:{cs:'Destiláty',en:'Spirits'},
        items:[
          { name:{cs:'Single malt 12 let (0,04 l)',en:'Single malt 12 y.o. (0.04 l)'}, price:'185 Kč' },
          { name:{cs:'Koňak VSOP (0,04 l)',en:'Cognac VSOP (0.04 l)'}, price:'195 Kč' },
          { name:{cs:'Mezcal espadín (0,04 l)',en:'Mezcal espadín (0.04 l)'}, price:'165 Kč' },
          { name:{cs:'Moravská slivovice (0,04 l)',en:'Moravian plum brandy (0.04 l)'}, price:'95 Kč' }
        ]},

      { id:'g-nealko', title:{cs:'Nealko a víno',en:'Soft & wine'},
        items:[
          { name:{cs:'Sekt brut (0,1 l)',en:'Sparkling brut (0.1 l)'}, price:'135 Kč' },
          { name:{cs:'Víno dle sezony (0,15 l)',en:'Seasonal wine (0.15 l)'}, price:'115 Kč' },
          { name:{cs:'Domácí tonic s citrusem',en:'House tonic with citrus'}, price:'95 Kč' },
          { name:{cs:'Espresso',en:'Espresso'}, price:'70 Kč' }
        ]}
    ],

    /* Data pro sekci „Alergeny“ — šablony baru ji nezobrazují. */
    allergens: [
      { code:'A7', label:{cs:'mléko',en:'milk'} },
      { code:'A8', label:{cs:'skořápkové plody',en:'nuts'} },
      { code:'A12', label:{cs:'oxid siřičitý a siřičitany',en:'sulphur dioxide and sulphites'} }
    ]
  },

  footer: {
    credits: { cs:'Ukázková šablona · ilustrační obsah', en:'Demo template · illustrative content' }
  }
};
