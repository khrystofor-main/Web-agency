/* ============================================================
   BISTRO — japonská kuchyně. Ukázkový obsah.
   Fotky se v této sadě šablon nepoužívají (CSS zástupné vzory).
   ============================================================ */
window.SITE = {

  lang: { default:'cs', available:['cs','en'], storageKey:'bistro-jp-lang' },

  theme: { auto:true, default:'light', toggle:true,
           timeZone:'Europe/Prague', storageKey:'bistro-jp-theme', manualTtlHours:12 },

  brand: {
    name: 'Bistro',
    title: { cs:'Bistro — japonská kuchyně', en:'Bistro — Japanese cuisine' },
    description: {
      cs:'Ukázková šablona webu pro japonské bistro. Ramen, donburi, onigiri, matcha.',
      en:'Demo website template for a Japanese bistro. Ramen, donburi, onigiri, matcha.'
    },
    color: null
  },

  contact: {
    phone: '+420 123 456 789',
    phoneHref: 'tel:+420123456789',
    address: { line1:'Ukázková 123', line2:'602 00 Brno', short:'Ukázková 123, Brno' },
    mapsUrl: 'https://maps.google.com/?q=Brno',
    mapCoords: '49.2062,16.5992',
    mapZoom: 15
  },

  hours: { perDay:['','11:30–21:00','11:30–21:00','11:30–21:00','11:30–22:00','12:00–22:00','12:00–20:00'],
           summary:{ cs:'Út–Ne, pondělí zavřeno', en:'Tue–Sun, closed on Monday' } },

  rating: { score:'4.8', count:158 },

  hero: {
    kicker: { cs:'Japonská kuchyně · Bistro', en:'Japanese cuisine · Bistro' },
    sub: {
      cs:'Deset míst u pultu, jedna miska, žádný spěch. Nudle děláme denně, vývar tonkotsu osmnáct hodin.',
      en:'Ten seats at the counter, one bowl, no rush. Noodles made daily, tonkotsu broth simmered for eighteen hours.'
    },
    cta: { cs:'Kde nás najdete', en:'Find us' },
    imageAlt: { cs:'', en:'' },
    caption: { cs:'Pult pro deset hostů', en:'A counter for ten guests' },
    captionMeta: 'BRNO'
  },

  /* Šest fotek na výšku — mřížka v hero. */
  gallery: [
    { src:'../../photos/bistro/japonska/05.webp',
      alt:{cs:'Miska ramenu s chilli nitěmi, vedle gyoza a vejce',en:'A bowl of ramen with chilli threads, gyoza and egg beside it'},
      caption:{cs:'Ramen',en:'Ramen'} },
    { src:'../../photos/bistro/japonska/01.webp',
      alt:{cs:'Misky rýže s nori a litinová konvička',en:'Bowls of rice with nori and a cast-iron teapot'},
      caption:{cs:'Rýže a čaj',en:'Rice and tea'} },
    { src:'../../photos/bistro/japonska/06.webp',
      alt:{cs:'Shora: karaage, gyoza a nudle v hliněné misce',en:'From above: karaage, gyoza and noodles in a clay bowl'},
      caption:{cs:'Celý stůl',en:'The whole table'} },
    { src:'../../photos/bistro/japonska/04.webp',
      alt:{cs:'Hůlky zvedají plátek hovězího nad miskou',en:'Chopsticks lifting a slice of beef above a bowl'},
      caption:{cs:'Sousto',en:'One bite'} },
    { src:'../../photos/bistro/japonska/02.webp',
      alt:{cs:'Podnos s několika miskami a vejci ajitama',en:'A tray with several bowls and ajitama eggs'},
      caption:{cs:'Podnos',en:'The tray'} },
    { src:'../../photos/bistro/japonska/03.webp',
      alt:{cs:'Sushi na břidlicovém prkénku, konvička, výhled do zahrady',en:'Sushi on a slate board, teapot, a view into the garden'},
      caption:{cs:'U okna',en:'By the window'} }
  ],

  photos: {
    band1: '../../photos/bistro/japonska/07.webp',
    band2: '../../photos/bistro/japonska/08.webp',
    interier: '../../photos/bistro/japonska/09.webp'
  },

  menu: {
    intro: {
      cs:'Rezervace nebereme — přijďte a počkejte si u čaje. Ceny jsou ilustrační.',
      en:'We do not take reservations — come and wait over a cup of tea. Prices are illustrative.'
    },

    groups: [
      { id:'g-ramen', title:{cs:'Ramen',en:'Ramen'},
        note:{cs:'Nudle vaříme na tvrdo, pokud neřeknete jinak.',en:'Noodles are cooked firm unless you say otherwise.'},
        items:[
          { name:{cs:'Tonkotsu — vepřový vývar, chashu, ajitama',en:'Tonkotsu — pork broth, chashu, ajitama'}, price:'285 Kč' },
          { name:{cs:'Shoyu — sójový vývar, kuře, nori',en:'Shoyu — soy broth, chicken, nori'}, price:'265 Kč' },
          { name:{cs:'Miso — kukuřice, máslo, pórek',en:'Miso — corn, butter, leek'}, price:'269 Kč' },
          { name:{cs:'Yasai — houbový vývar, tofu, špenát',en:'Yasai — mushroom broth, tofu, spinach'}, price:'249 Kč' }
        ]},

      { id:'g-donburi', title:{cs:'Donburi',en:'Donburi'},
        items:[
          { name:{cs:'Gyudon — hovězí, cibule, rýže',en:'Gyudon — beef, onion, rice'}, price:'235 Kč' },
          { name:{cs:'Katsudon — vepřový řízek, vejce',en:'Katsudon — pork cutlet, egg'}, price:'245 Kč' },
          { name:{cs:'Oyakodon — kuře a vejce',en:'Oyakodon — chicken and egg'}, price:'225 Kč' },
          { name:{cs:'Sake don — losos, sezam, wasabi',en:'Sake don — salmon, sesame, wasabi'}, price:'295 Kč' }
        ]},

      { id:'g-male', title:{cs:'Malé porce',en:'Small plates'},
        items:[
          { name:{cs:'Gyoza (5 ks)',en:'Gyoza (5 pcs)'}, price:'145 Kč' },
          { name:{cs:'Onigiri — losos nebo umeboshi',en:'Onigiri — salmon or umeboshi'}, price:'75 Kč' },
          { name:{cs:'Edamame s mořskou solí',en:'Edamame with sea salt'}, price:'89 Kč' },
          { name:{cs:'Miso polévka s tofu a wakame',en:'Miso soup with tofu and wakame'}, price:'69 Kč' }
        ]},

      { id:'g-napoje', title:{cs:'Nápoje',en:'Drinks'},
        items:[
          { name:{cs:'Matcha latte',en:'Matcha latte'}, price:'95 Kč' },
          { name:{cs:'Sencha — sypaný zelený čaj',en:'Sencha — loose-leaf green tea'}, price:'75 Kč' },
          { name:{cs:'Ramune — japonská limonáda',en:'Ramune — Japanese lemonade'}, price:'85 Kč' },
          { name:{cs:'Saké 0,1 l',en:'Sake 0.1 l'}, price:'110 Kč' }
        ]}
    ],

    allergens: [
      { code:'A1', label:{cs:'obiloviny obsahující lepek',en:'cereals containing gluten'} },
      { code:'A3', label:{cs:'vejce',en:'eggs'} },
      { code:'A4', label:{cs:'ryby',en:'fish'} },
      { code:'A6', label:{cs:'sójové boby',en:'soybeans'} },
      { code:'A11', label:{cs:'sezamová semena',en:'sesame seeds'} }
    ]
  },

  footer: {
    credits: { cs:'Ukázková šablona · ilustrační obsah', en:'Demo template · illustrative content' }
  }
};
