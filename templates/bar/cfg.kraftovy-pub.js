/* ============================================================
   BAR — kraftový pivovar / pivnice. Ukázkový obsah.
   Fotky leží v photos/bar/kraftovy-pub/ (01–06.webp, interier/01–04.webp).
   ============================================================ */
window.SITE = {

  lang: { default:'cs', available:['cs','en'], storageKey:'bar-kraft-lang' },

  theme: { auto:true, default:'light', toggle:true,
           timeZone:'Europe/Prague', storageKey:'bar-kraft-theme', manualTtlHours:12 },

  brand: {
    name: 'Můj pub',
    title: { cs:'Můj pub — kraftová pivnice', en:'My pub — craft taproom' },
    description: {
      cs:'Ukázková šablona webu pro kraftovou pivnici. Dvanáct pip, tank na sále, plnění s sebou.',
      en:'Demo website template for a craft taproom. Twelve taps, a tank in the room, growlers to go.'
    },
    color: null
  },

  contact: {
    phone: '+420 123 456 789',
    phoneHref: 'tel:+420123456789',
    address: { line1:'Ukázková 12', line2:'170 00 Praha 7', short:'Ukázková 12, Praha 7' },
    mapsUrl: 'https://maps.google.com/?q=Praha+7',
    mapCoords: '50.0996,14.4386',
    mapZoom: 15
  },

  hours: { perDay:['16:00–23:00','16:00–23:00','16:00–23:00','16:00–24:00','15:00–01:00','14:00–01:00','15:00–22:00'],
           summary:{ cs:'Otevřeno denně od odpoledne', en:'Open daily from the afternoon' } },

  rating: { score:'4.7', count:412 },

  hero: {
    kicker: { cs:'Kraftová pivnice · Praha 7', en:'Craft taproom · Prague 7' },
    sub: {
      cs:'Dvanáct pip, čtyři stálice a osm rotujících. Ležák teče rovnou z tanku, který stojí v sále.',
      en:'Twelve taps, four regulars and eight rotating. The lager pours straight from the tank standing in the room.'
    },
    cta: { cs:'Co je na pípě', en:'What is on tap' }
  },

  /* Šest fotek na výšku — v hero stojí vedle sebe jako svislé sloupy.
     Formát a doporučené motivy jsou v photos/bar/README.md. */
  gallery: [
    { src:'../../photos/bar/kraftovy-pub/01.webp',
      alt:{cs:'Řada pivních pip nad barem',en:'A row of beer taps above the bar'},
      caption:{cs:'Pípy',en:'Taps'} },
    { src:'../../photos/bar/kraftovy-pub/02.webp',
      alt:{cs:'Sklenice tmavého s hustou pěnou',en:'A glass of dark beer with a thick head'},
      caption:{cs:'Tmavý',en:'Dark'} },
    { src:'../../photos/bar/kraftovy-pub/03.webp',
      alt:{cs:'Detail pěny na čerstvě načepovaném pivu',en:'Close-up of the head on a freshly poured beer'},
      caption:{cs:'Pěna',en:'The head'} },
    { src:'../../photos/bar/kraftovy-pub/04.webp',
      alt:{cs:'Výčepní táhne pivo do sklenice',en:'The barman pulls a beer into a glass'},
      caption:{cs:'Výčep',en:'The pour'} },
    { src:'../../photos/bar/kraftovy-pub/05.webp',
      alt:{cs:'Polotmavý speciál na barovém pultě',en:'An amber special on the bar counter'},
      caption:{cs:'Speciál',en:'The special'} },
    { src:'../../photos/bar/kraftovy-pub/06.webp',
      alt:{cs:'Dvě piva na stole u okna',en:'Two beers on a table by the window'},
      caption:{cs:'U stolu',en:'At the table'} }
  ],

  /* Listovací galerie interiéru v sekci „Pivnice“.
     Soubory patří do photos/bar/kraftovy-pub/interier/. */
  interior: [
    { src:'../../photos/bar/kraftovy-pub/interier/01.webp',
      alt:{cs:'Bar s pípami a vysokými stoličkami',en:'Bar with taps and high stools'},
      caption:{cs:'U baru',en:'At the bar'} },
    { src:'../../photos/bar/kraftovy-pub/interier/02.webp',
      alt:{cs:'Sál s dlouhými stoly a betonovou podlahou',en:'Room with long tables and a concrete floor'},
      caption:{cs:'Sál',en:'The room'} },
    { src:'../../photos/bar/kraftovy-pub/interier/03.webp',
      alt:{cs:'Plná hospoda ve večerní špičce',en:'A packed pub in the evening rush'},
      caption:{cs:'Hosté',en:'Guests'} },
    { src:'../../photos/bar/kraftovy-pub/interier/04.webp',
      alt:{cs:'Večerní světlo nad barovým pultem',en:'Evening light above the bar counter'},
      caption:{cs:'Večer',en:'Evening'} }
  ],

  menu: {
    intro: {
      cs:'Rotující pípy se mění každý týden — tohle je ukázka běžného večera. Ceny jsou ilustrační.',
      en:'The rotating taps change weekly — this is a sample of an ordinary evening. Prices are illustrative.'
    },

    groups: [
      { id:'g-stalice', title:{cs:'Stálice',en:'Regulars'},
        note:{cs:'Čtyři piva, která tu jsou vždycky. Ležák jde z tanku.',en:'Four beers that are always here. The lager comes from the tank.'},
        items:[
          { name:{cs:'Ležák 11° — nefiltrovaný, z tanku (0,5 l)',en:'Lager 11° — unfiltered, from the tank (0.5 l)'}, price:'59 Kč' },
          { name:{cs:'Světlá pšeničná 12° (0,5 l)',en:'Pale wheat 12° (0.5 l)'}, price:'65 Kč' },
          { name:{cs:'Polotmavý speciál 13° (0,4 l)',en:'Amber special 13° (0.4 l)'}, price:'69 Kč' },
          { name:{cs:'Session IPA 10° (0,4 l)',en:'Session IPA 10° (0.4 l)'}, price:'69 Kč' }
        ]},

      { id:'g-rotacni', title:{cs:'Rotační pípy',en:'Rotating taps'},
        note:{cs:'Osm pip, které se mění. Aktuální stav visí na tabuli u vchodu.',en:'Eight taps that change. The current list hangs on the board by the door.'},
        items:[
          { name:{cs:'New England IPA (0,3 l)',en:'New England IPA (0.3 l)'}, price:'89 Kč' },
          { name:{cs:'Sladový bock 15° (0,3 l)',en:'Malty bock 15° (0.3 l)'}, price:'95 Kč' },
          { name:{cs:'Ovocná kyselá — višeň (0,3 l)',en:'Fruited sour — sour cherry (0.3 l)'}, price:'89 Kč' },
          { name:{cs:'Stout na nitru (0,3 l)',en:'Nitro stout (0.3 l)'}, price:'95 Kč' },
          { name:{cs:'Pilsner po česku 12° (0,5 l)',en:'Czech-style pilsner 12° (0.5 l)'}, price:'65 Kč' },
          { name:{cs:'Nealko IPA (0,33 l)',en:'Non-alcoholic IPA (0.33 l)'}, price:'59 Kč' }
        ]},

      { id:'g-lahve', title:{cs:'Láhve a plnění',en:'Bottles & fills'},
        note:{cs:'Přineste vlastní láhev — natočíme protitlakem, pivo vydrží týden.',en:'Bring your own bottle — we fill it counter-pressure, it keeps for a week.'},
        items:[
          { name:{cs:'Plnění do vlastní láhve (1 l)',en:'Fill into your own bottle (1 l)'}, price:'149 Kč' },
          { name:{cs:'Growler 1,5 l se zálohou',en:'Growler 1.5 l with deposit'}, price:'349 Kč' },
          { name:{cs:'Láhev z lednice — hostující pivovar',en:'Fridge bottle — guest brewery'}, price:'99 Kč' },
          { name:{cs:'Barrel aged 0,33 l',en:'Barrel aged 0.33 l'}, price:'179 Kč' }
        ]},

      { id:'g-kzakusu', title:{cs:'K zakousnutí',en:'To go with it'},
        items:[
          { name:{cs:'Nakládaný hermelín s chlebem',en:'Pickled camembert with bread'}, price:'139 Kč' },
          { name:{cs:'Utopenec a cibule',en:'Pickled sausage and onion'}, price:'89 Kč' },
          { name:{cs:'Pivní sýr s topinkami',en:'Beer cheese with fried bread'}, price:'129 Kč' },
          { name:{cs:'Preclík se solí',en:'Salted pretzel'}, price:'59 Kč' },
          { name:{cs:'Klobása z udírny s hořčicí',en:'Smokehouse sausage with mustard'}, price:'159 Kč' }
        ]},

      { id:'g-jine', title:{cs:'Jiné nápoje',en:'Other drinks'},
        items:[
          { name:{cs:'Domácí limonáda',en:'House lemonade'}, price:'69 Kč' },
          { name:{cs:'Cider ze severních Čech (0,4 l)',en:'Cider from northern Bohemia (0.4 l)'}, price:'79 Kč' },
          { name:{cs:'Slivovice 0,04 l',en:'Plum brandy 0.04 l'}, price:'69 Kč' },
          { name:{cs:'Espresso',en:'Espresso'}, price:'55 Kč' }
        ]}
    ],

    /* Data pro sekci „Alergeny“. Šablony baru ji nezobrazují — jak ji
       vrátit, je popsáno v templates/bar/README.md. */
    allergens: [
      { code:'A1', label:{cs:'obiloviny obsahující lepek',en:'cereals containing gluten'} },
      { code:'A7', label:{cs:'mléko',en:'milk'} },
      { code:'A10', label:{cs:'hořčice',en:'mustard'} }
    ]
  },

  footer: {
    credits: { cs:'Ukázková šablona · ilustrační obsah', en:'Demo template · illustrative content' }
  }
};
