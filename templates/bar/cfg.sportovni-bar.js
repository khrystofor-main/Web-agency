/* ============================================================
   BAR — sportovní bar. Ukázkový obsah.
   Fotky leží v photos/bar/sportovni-bar/ (01–06.webp, interier/01–04.webp).
   ============================================================ */
window.SITE = {

  lang: { default:'cs', available:['cs','en'], storageKey:'bar-sport-lang' },

  theme: { auto:true, default:'light', toggle:true,
           timeZone:'Europe/Prague', storageKey:'bar-sport-theme', manualTtlHours:12 },

  brand: {
    name: 'Můj sport bar',
    title: { cs:'Můj sport bar — sportovní bar', en:'My sports bar' },
    description: {
      cs:'Ukázková šablona webu pro sportovní bar. Šest obrazovek, plátno, program zápasů.',
      en:'Demo website template for a sports bar. Six screens, a projector and the match schedule.'
    },
    color: null
  },

  contact: {
    phone: '+420 123 456 789',
    phoneHref: 'tel:+420123456789',
    address: { line1:'Ukázková 88', line2:'190 00 Praha 9', short:'Ukázková 88, Praha 9' },
    mapsUrl: 'https://maps.google.com/?q=Praha+9',
    mapCoords: '50.1050,14.5000',
    mapZoom: 15
  },

  hours: { perDay:['15:00–24:00','15:00–24:00','15:00–01:00','15:00–01:00','14:00–02:00','11:00–02:00','11:00–23:00'],
           summary:{ cs:'Otevřeno denně, o víkendu od poledne', en:'Open daily, weekends from noon' } },

  rating: { score:'4.5', count:637 },

  hero: {
    kicker: { cs:'Sportovní bar · Praha 9', en:'Sports bar · Prague 9' },
    sub: {
      cs:'Šest obrazovek a plátno tři metry. Zvuk běží vždycky u toho zápasu, na který se dnes čeká nejvíc.',
      en:'Six screens and a three-metre projector. The sound is always on whichever game everyone came for.'
    },
    cta: { cs:'Nabídka a ceny', en:'Menu & prices' }
  },

  /* Program zápasů. Vykresluje ho skript uvnitř sportovni-bar.html
     (ostatní šablony tenhle klíč neznají a nevadí jim to).
     Prázdné pole = tabule se v hero vůbec nezobrazí.
     `live:true` označí zápas, který zrovna běží. */
  matches: {
    channel: 'LIVE',
    items: [
      { time:'17:30', match:'Sparta – Slavia', league:{cs:'Fortuna liga',en:'Czech league'} },
      { time:'19:00', match:'Plzeň – Baník',   league:{cs:'Fortuna liga',en:'Czech league'}, live:true },
      { time:'20:45', match:'Real – Bayern',   league:{cs:'Liga mistrů',en:'Champions League'} },
      { time:'22:00', match:'Kometa – Třinec', league:{cs:'Extraliga',en:'Ice hockey'} }
    ]
  },

  /* Fotky do stopky vedle textu v hero. Ve widescreenu se zobrazí
     první tři — čtvrtou a další si šablona schová (stopka, ne mřížka). */
  gallery: [
    { src:'../../photos/bar/sportovni-bar/01.webp',
      alt:{cs:'Řada pivních pip nad barem',en:'A row of beer taps above the bar'},
      caption:{cs:'Pípy',en:'Taps'} },
    { src:'../../photos/bar/sportovni-bar/02.webp',
      alt:{cs:'Sklenice cideru před lednicí s nápoji',en:'A glass of cider in front of the drinks fridge'},
      caption:{cs:'Cider',en:'Cider'} },
    { src:'../../photos/bar/sportovni-bar/03.webp',
      alt:{cs:'Sklenice tmavého piva s hustou pěnou',en:'A glass of dark beer with a thick head'},
      caption:{cs:'Tmavý',en:'Dark'} },
    { src:'../../photos/bar/sportovni-bar/04.webp',
      alt:{cs:'Výčepní táhne pivo do sklenice',en:'The barman pulls a beer into a glass'},
      caption:{cs:'Výčep',en:'The pour'} },
    { src:'../../photos/bar/sportovni-bar/05.webp',
      alt:{cs:'Světlé pivo na barovém pultě',en:'A pale beer on the bar counter'},
      caption:{cs:'Světlý',en:'Pale'} },
    { src:'../../photos/bar/sportovni-bar/06.webp',
      alt:{cs:'Kyselý červený drink na stole',en:'A red sour on the table'},
      caption:{cs:'Kyselá',en:'Sour'} }
  ],

  /* Listovací galerie interiéru v sekci „Bar“.
     Soubory patří do photos/bar/sportovni-bar/interier/. */
  interior: [
    { src:'../../photos/bar/sportovni-bar/interier/01.webp',
      alt:{cs:'Hlavní sál s obrazovkami',en:'Main room with screens'},
      caption:{cs:'Hlavní sál',en:'Main room'} },
    { src:'../../photos/bar/sportovni-bar/interier/02.webp',
      alt:{cs:'Zadní sál s obrazovkou a plakáty',en:'Back room with a screen and posters'},
      caption:{cs:'Zadní sál',en:'Back room'} },
    { src:'../../photos/bar/sportovni-bar/interier/03.webp',
      alt:{cs:'Barový pult s policemi sklenic',en:'Bar counter with shelves of glasses'},
      caption:{cs:'Bar',en:'The bar'} },
    { src:'../../photos/bar/sportovni-bar/interier/04.webp',
      alt:{cs:'Sál s vysokými stoly podél oken',en:'A room with high tables along the windows'},
      caption:{cs:'U oken',en:'By the windows'} }
  ],

  menu: {
    intro: {
      cs:'Kuchyň vaří do poslední čtvrtiny, pípa jede do zavíračky. Ceny jsou ilustrační.',
      en:'The kitchen runs until the final quarter, the taps until closing. Prices are illustrative.'
    },

    groups: [
      { id:'g-pivo', title:{cs:'Pivo a cider',en:'Beer & cider'},
        note:{cs:'Během zápasu točíme i do džbánu — vyjde levněji než po půllitrech.',en:'During games we also pour pitchers — cheaper than by the pint.'},
        items:[
          { name:{cs:'Ležák 11° (0,5 l)',en:'Lager 11° (0.5 l)'}, price:'49 Kč' },
          { name:{cs:'Ležák 12° (0,5 l)',en:'Lager 12° (0.5 l)'}, price:'55 Kč' },
          { name:{cs:'Džbán 1,5 l',en:'Pitcher 1.5 l'}, price:'139 Kč' },
          { name:{cs:'Polotmavý speciál (0,4 l)',en:'Amber special (0.4 l)'}, price:'59 Kč' },
          { name:{cs:'Cider (0,4 l)',en:'Cider (0.4 l)'}, price:'69 Kč' },
          { name:{cs:'Nealko pivo (0,5 l)',en:'Non-alcoholic beer (0.5 l)'}, price:'45 Kč' }
        ]},

      { id:'g-burgery', title:{cs:'Burgery a hlavní',en:'Burgers & mains'},
        items:[
          { name:{cs:'Hovězí burger 180 g s hranolky',en:'Beef burger 180 g with fries'}, price:'279 Kč' },
          { name:{cs:'Kuřecí burger s coleslaw',en:'Chicken burger with coleslaw'}, price:'259 Kč' },
          { name:{cs:'Vegeburger z fazolí',en:'Bean veggie burger'}, price:'249 Kč' },
          { name:{cs:'Křídla BBQ (10 ks)',en:'BBQ wings (10 pcs)'}, price:'229 Kč' },
          { name:{cs:'Nachos se sýrem a jalapeños',en:'Nachos with cheese and jalapeños'}, price:'189 Kč' },
          { name:{cs:'Steak z krkovice s pečivem',en:'Pork neck steak with bread'}, price:'269 Kč' }
        ]},

      { id:'g-nasdileni', title:{cs:'Na sdílení',en:'To share'},
        note:{cs:'Velké mísy pro tři až čtyři — ideální na poločas.',en:'Big platters for three or four — made for half-time.'},
        items:[
          { name:{cs:'Mísa smažených dobrot',en:'Fried platter'}, price:'449 Kč' },
          { name:{cs:'Hranolky se slaninou a sýrem',en:'Loaded fries with bacon and cheese'}, price:'199 Kč' },
          { name:{cs:'Cibulové kroužky',en:'Onion rings'}, price:'129 Kč' },
          { name:{cs:'Utopenci a nakládaný hermelín',en:'Pickled sausage and camembert'}, price:'179 Kč' }
        ]},

      { id:'g-panaky', title:{cs:'Panáky a nealko',en:'Shots & soft'},
        items:[
          { name:{cs:'Fernet (0,04 l)',en:'Fernet (0.04 l)'}, price:'59 Kč' },
          { name:{cs:'Tuzemák (0,04 l)',en:'Rum-style spirit (0.04 l)'}, price:'55 Kč' },
          { name:{cs:'Whisky (0,04 l)',en:'Whisky (0.04 l)'}, price:'89 Kč' },
          { name:{cs:'Kola / limonáda (0,5 l)',en:'Cola / lemonade (0.5 l)'}, price:'59 Kč' },
          { name:{cs:'Voda s citronem (0,5 l)',en:'Water with lemon (0.5 l)'}, price:'45 Kč' }
        ]}
    ],

    /* Data pro sekci „Alergeny“ — šablony baru ji nezobrazují. */
    allergens: [
      { code:'A1', label:{cs:'obiloviny obsahující lepek',en:'cereals containing gluten'} },
      { code:'A3', label:{cs:'vejce',en:'eggs'} },
      { code:'A7', label:{cs:'mléko',en:'milk'} },
      { code:'A10', label:{cs:'hořčice',en:'mustard'} }
    ]
  },

  footer: {
    credits: { cs:'Ukázková šablona · ilustrační obsah', en:'Demo template · illustrative content' }
  }
};
