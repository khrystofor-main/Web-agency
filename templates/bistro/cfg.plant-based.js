/* ============================================================
   BISTRO — veganská a rostlinná kuchyně. Ukázkový obsah.
   Fotky se v této sadě šablon nepoužívají (CSS zástupné vzory).
   ============================================================ */
window.SITE = {

  lang: { default:'cs', available:['cs','en'], storageKey:'bistro-pb-lang' },

  theme: { auto:true, default:'light', toggle:true,
           timeZone:'Europe/Prague', storageKey:'bistro-pb-theme', manualTtlHours:12 },

  brand: {
    name: 'Bistro',
    title: { cs:'Bistro — rostlinná kuchyně', en:'Bistro — plant-based kitchen' },
    description: {
      cs:'Ukázková šablona webu pro veganské bistro. Rostlinná kuchyně, sezónní zelenina, bowls, fermentace.',
      en:'Demo website template for a vegan bistro. Plant-based cooking, seasonal vegetables, bowls, ferments.'
    },
    color: null
  },

  contact: {
    phone: '+420 123 456 789',
    phoneHref: 'tel:+420123456789',
    address: { line1:'Ukázková 123', line2:'110 00 Praha 1', short:'Ukázková 123, Praha 1' },
    mapsUrl: 'https://maps.google.com/?q=Praha',
    mapCoords: '50.0874654,14.4212535',
    mapZoom: 15
  },

  hours: { perDay:['8:00–19:00','8:00–19:00','8:00–19:00','8:00–19:00','8:00–20:00','9:00–20:00','9:00–17:00'],
           summary:{ cs:'Otevřeno denně od 8 (víkend od 9)', en:'Open daily from 8 (weekends from 9)' } },

  rating: { score:'4.9', count:412 },

  hero: {
    kicker: { cs:'Rostlinná kuchyně · Bistro', en:'Plant-based kitchen · Bistro' },
    sub: {
      cs:'Sto procent rostlin, nula kompromisů v chuti. Zeleninu bereme od farmářů z okolí, zbytky fermentujeme.',
      en:'One hundred percent plants, zero compromise on flavour. Vegetables from nearby farms, leftovers go into ferments.'
    },
    cta: { cs:'Kde nás najdete', en:'Find us' },
    imageAlt: { cs:'', en:'' },
    caption: { cs:'Sezóna určuje menu', en:'The season writes the menu' },
    captionMeta: 'PRAHA'
  },

  /* Fotky do galerie v hero. Snímky 04 a 05 z dodané sady tu schválně
     nejsou: na 04 je vidět obal konkrétní značky a na 05 leží v míse
     losos — na webu bistra, které slibuje sto procent rostlin, by obojí
     bylo trapné. Až budou náhrady, stačí je sem doplnit. */
  gallery: [
    { src:'../../photos/bistro/plant-based/01.webp',
      alt:{cs:'Dvě misky s quinoou, avokádem, edamame a ředkví',en:'Two bowls with quinoa, avocado, edamame and radish'},
      caption:{cs:'Miska podle sezóny',en:'A bowl for the season'} },
    { src:'../../photos/bistro/plant-based/06.webp',
      alt:{cs:'Mísa s cizrnou, edamame, olivami, fíky a plackou',en:'A bowl with chickpeas, edamame, olives, figs and flatbread'},
      caption:{cs:'Cizrna a fíky',en:'Chickpeas and figs'} },
    { src:'../../photos/bistro/plant-based/03.webp',
      alt:{cs:'Miska s fazolemi, kadeřávkem, cuketovými nudlemi a kukuřicí',en:'A bowl with beans, kale, courgette noodles and corn'},
      caption:{cs:'Všechno do jedné misky',en:'Everything in one bowl'} },
    { src:'../../photos/bistro/plant-based/02.webp',
      alt:{cs:'Špenátový koláč na zeleném talíři, česnek a pepř',en:'Spinach tart on a green plate, garlic and pepper'},
      caption:{cs:'Zapečený špenát',en:'Baked spinach'} }
  ],

  /* Listovací galerie interiéru v sekci „Atmosféra".
     Soubory leží v photos/bistro/plant-based/interier/ — další přidáte tak,
     že snímek nahrajete pod dalším číslem a doplníte sem řádek. */
  interior: [
    { src:'../../photos/bistro/plant-based/interier/01.webp',
      alt:{cs:'Interiér bistra',en:'Bistro interior'},
      caption:{cs:'U nás uvnitř',en:'Inside our place'} }
  ],

  menu: {
    intro: {
      cs:'Menu se mění se sezónou — všechno je rostlinné. Ceny jsou ilustrační.',
      en:'The menu changes with the season — everything is plant-based. Prices are illustrative.'
    },

    groups: [
      { id:'g-bowls', title:{cs:'Bowls',en:'Bowls'},
        note:{cs:'Každá miska jde udělat bezlepkově — řekněte u pultu.',en:'Every bowl can be made gluten-free — just ask at the counter.'},
        items:[
          { name:{cs:'Miska s pečenou dýní a tahini',en:'Roasted pumpkin bowl with tahini'}, price:'215 Kč' },
          { name:{cs:'Kimchi bowl s tempehem',en:'Kimchi bowl with tempeh'}, price:'225 Kč' },
          { name:{cs:'Quinoa, cizrna, pečená paprika',en:'Quinoa, chickpeas, roasted pepper'}, price:'199 Kč' },
          { name:{cs:'Pohanka, houby, fermentovaná mrkev',en:'Buckwheat, mushrooms, fermented carrot'}, price:'209 Kč' }
        ]},

      { id:'g-teple', title:{cs:'Teplá kuchyně',en:'Warm dishes'},
        items:[
          { name:{cs:'Dhal z červené čočky s kokosem',en:'Red lentil dhal with coconut'}, price:'185 Kč' },
          { name:{cs:'Rizoto s celerem a lanýžovým olejem',en:'Celeriac risotto with truffle oil'}, price:'215 Kč' },
          { name:{cs:'Květákový steak s chimichurri',en:'Cauliflower steak with chimichurri'}, price:'205 Kč' },
          { name:{cs:'Burger z černých fazolí',en:'Black bean burger'}, price:'219 Kč' }
        ]},

      { id:'g-snidane', title:{cs:'Snídaně a svačiny',en:'Breakfast & snacks'},
        items:[
          { name:{cs:'Ovesná kaše s pečeným jablkem',en:'Oat porridge with baked apple'}, price:'139 Kč' },
          { name:{cs:'Tofu scramble na kváskovém chlebu',en:'Tofu scramble on sourdough'}, price:'165 Kč' },
          { name:{cs:'Chia pudink s mangem',en:'Chia pudding with mango'}, price:'129 Kč' },
          { name:{cs:'Avokádový toast s ředkví',en:'Avocado toast with radish'}, price:'159 Kč' }
        ]},

      { id:'g-sladke', title:{cs:'Sladké',en:'Sweet'},
        items:[
          { name:{cs:'Raw kakaový dort',en:'Raw cacao cake'}, price:'115 Kč' },
          { name:{cs:'Mrkvový koláč s kešu krémem',en:'Carrot cake with cashew cream'}, price:'109 Kč' },
          { name:{cs:'Banánový chlebíček',en:'Banana bread'}, price:'89 Kč' },
          { name:{cs:'Kokosová panna cotta',en:'Coconut panna cotta'}, price:'105 Kč' }
        ]},

      { id:'g-napoje', title:{cs:'Nápoje',en:'Drinks'},
        items:[
          { name:{cs:'Matcha s ovesným mlékem',en:'Matcha with oat milk'}, price:'95 Kč' },
          { name:{cs:'Zelené smoothie — špenát, jablko, zázvor',en:'Green smoothie — spinach, apple, ginger'}, price:'115 Kč' },
          { name:{cs:'Domácí kombucha',en:'Homemade kombucha'}, price:'85 Kč' },
          { name:{cs:'Filtrovaná káva',en:'Filter coffee'}, price:'75 Kč' }
        ]}
    ],

    allergens: [
      { code:'A1', label:{cs:'obiloviny obsahující lepek',en:'cereals containing gluten'} },
      { code:'A6', label:{cs:'sójové boby',en:'soybeans'} },
      { code:'A8', label:{cs:'skořápkové plody',en:'nuts'} },
      { code:'A11', label:{cs:'sezamová semena',en:'sesame seeds'} }
    ]
  },

  footer: {
    credits: { cs:'Ukázková šablona · ilustrační obsah', en:'Demo template · illustrative content' }
  }
};
