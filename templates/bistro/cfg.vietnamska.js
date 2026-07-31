/* ============================================================
   BISTRO — vietnamská kuchyně. Ukázkový obsah.
   Fotky se v této sadě šablon nepoužívají (CSS zástupné vzory).
   ============================================================ */
window.SITE = {

  lang: { default:'cs', available:['cs','en'], storageKey:'bistro-vn-lang' },

  theme: { auto:true, default:'light', toggle:true,
           timeZone:'Europe/Prague', storageKey:'bistro-vn-theme', manualTtlHours:12 },

  brand: {
    name: 'Bistro Sài Gòn',
    title: { cs:'Bistro Sài Gòn — vietnamská kuchyně', en:'Bistro Sài Gòn — Vietnamese cuisine' },
    description: {
      cs:'Ukázková šablona webu pro vietnamské bistro. Phở, bún bò nam bộ, bánh mì, vietnamská káva.',
      en:'Demo website template for a Vietnamese bistro. Phở, bún bò nam bộ, bánh mì, Vietnamese coffee.'
    },
    color: null
  },

  contact: {
    phone: '+420 123 456 789',
    phoneHref: 'tel:+420123456789',
    address: { line1:'Tržní 8', line2:'170 00 Praha 7', short:'Tržní 8, Praha 7' },
    mapsUrl: 'https://maps.google.com/?q=Praha+7',
    mapCoords: '50.0996,14.4368',
    mapZoom: 15
  },

  hours: { uniform:'11:00–21:30', summary:{ cs:'Otevřeno denně 11–21:30', en:'Open daily 11–21:30' } },

  rating: { score:'4.9', count:376 },

  hero: {
    kicker: { cs:'Vietnamská kuchyně · Bistro', en:'Vietnamese cuisine · Bistro' },
    sub: {
      cs:'Vývar taháme dvanáct hodin, bylinky kupujeme každé ráno. Rychlé bistro, pomalá kuchyně.',
      en:'We simmer the broth for twelve hours and buy herbs every morning. A fast bistro with a slow kitchen.'
    },
    cta: { cs:'Kde nás najdete', en:'Find us' },
    imageAlt: { cs:'', en:'' },
    caption: { cs:'Vývar od pěti do rána', en:'Broth from five in the morning' },
    captionMeta: 'PRAHA 7'
  },

  menu: {
    intro: {
      cs:'Ostrost si řekněte u pultu — od nuly po tři chilli. Ceny jsou ilustrační.',
      en:'Tell us your heat level at the counter — from zero to three chillies. Prices are illustrative.'
    },

    groups: [
      { id:'g-pho', title:{cs:'Phở a polévky',en:'Phở & soups'},
        note:{cs:'Vývar vaříme dvanáct hodin, bez glutamátu.',en:'Broth simmered for twelve hours, no MSG.'},
        items:[
          { name:{cs:'Phở bò — hovězí vývar, rýžové nudle',en:'Phở bò — beef broth, rice noodles'}, price:'189 Kč' },
          { name:{cs:'Phở gà — kuřecí vývar, zázvor',en:'Phở gà — chicken broth, ginger'}, price:'175 Kč' },
          { name:{cs:'Bún bò Huế — pikantní, citronová tráva',en:'Bún bò Huế — spicy, lemongrass'}, price:'195 Kč' },
          { name:{cs:'Phở chay — zeleninový vývar, tofu',en:'Phở chay — vegetable broth, tofu'}, price:'165 Kč' }
        ]},

      { id:'g-bun', title:{cs:'Bún a rýže',en:'Bún & rice'},
        items:[
          { name:{cs:'Bún bò nam bộ — hovězí, arašídy, bylinky',en:'Bún bò nam bộ — beef, peanuts, herbs'}, price:'189 Kč' },
          { name:{cs:'Bún chả — grilovaný vepřový bůček',en:'Bún chả — grilled pork belly'}, price:'195 Kč' },
          { name:{cs:'Cơm gà — kuře na citronové trávě, jasmínová rýže',en:'Cơm gà — lemongrass chicken, jasmine rice'}, price:'179 Kč' },
          { name:{cs:'Cơm chay — tofu, houby, rýže',en:'Cơm chay — tofu, mushrooms, rice'}, price:'165 Kč' }
        ]},

      { id:'g-banhmi', title:{cs:'Bánh mì a předkrmy',en:'Bánh mì & starters'},
        items:[
          { name:{cs:'Bánh mì s vepřovým a nakládanou zeleninou',en:'Bánh mì with pork and pickled vegetables'}, price:'135 Kč' },
          { name:{cs:'Bánh mì s tofu a avokádem',en:'Bánh mì with tofu and avocado'}, price:'129 Kč' },
          { name:{cs:'Gỏi cuốn — letní závitky (2 ks)',en:'Gỏi cuốn — summer rolls (2 pcs)'}, price:'99 Kč' },
          { name:{cs:'Nem rán — smažené závitky (3 ks)',en:'Nem rán — fried spring rolls (3 pcs)'}, price:'115 Kč' }
        ]},

      { id:'g-napoje', title:{cs:'Nápoje',en:'Drinks'},
        items:[
          { name:{cs:'Cà phê sữa đá — ledová káva s kondenzovaným mlékem',en:'Cà phê sữa đá — iced coffee with condensed milk'}, price:'89 Kč' },
          { name:{cs:'Trà đá — ledový zelený čaj',en:'Trà đá — iced green tea'}, price:'55 Kč' },
          { name:{cs:'Limetková limonáda s mátou',en:'Lime and mint lemonade'}, price:'85 Kč' },
          { name:{cs:'Vietnamské pivo 0,33 l',en:'Vietnamese beer 0.33 l'}, price:'69 Kč' }
        ]}
    ],

    allergens: [
      { code:'A1', label:{cs:'obiloviny obsahující lepek',en:'cereals containing gluten'} },
      { code:'A4', label:{cs:'ryby',en:'fish'} },
      { code:'A5', label:{cs:'arašídy',en:'peanuts'} },
      { code:'A6', label:{cs:'sójové boby',en:'soybeans'} },
      { code:'A14', label:{cs:'korýši',en:'crustaceans'} }
    ]
  },

  footer: {
    credits: { cs:'Ukázková šablona · ilustrační obsah', en:'Demo template · illustrative content' }
  }
};
