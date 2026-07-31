/* ============================================================
   BISTRO — česká kuchyně. Ukázkový obsah (žádný konkrétní podnik).
   Fotky se v této sadě šablon nepoužívají: karty jídel kreslí
   zástupný vzor v CSS. Až budou fotky, stačí doplnit `hero.image`,
   `gallery` a `photo` u položek — engine je vykreslí sám.
   ============================================================ */
window.SITE = {

  lang: { default:'cs', available:['cs','en'], storageKey:'bistro-cs-lang' },

  theme: { auto:true, default:'light', toggle:true,
           timeZone:'Europe/Prague', storageKey:'bistro-cs-theme', manualTtlHours:12 },

  brand: {
    name: 'Bistro Na Rohu',
    title: { cs:'Bistro Na Rohu — česká kuchyně', en:'Bistro Na Rohu — Czech cuisine' },
    description: {
      cs:'Ukázková šablona webu pro bistro s českou kuchyní. Polední menu, svíčková, guláš, domácí buchty.',
      en:'Demo website template for a Czech bistro. Daily lunch menu, svíčková, goulash, homemade pastries.'
    },
    color: null
  },

  contact: {
    phone: '+420 123 456 789',
    phoneHref: 'tel:+420123456789',
    address: { line1:'Nádražní 12', line2:'602 00 Brno', short:'Nádražní 12, Brno' },
    mapsUrl: 'https://maps.google.com/?q=Brno',
    mapCoords: '49.1937524,16.6070308',
    mapZoom: 15
  },

  hours: { perDay:['10:30–20:00','10:30–20:00','10:30–20:00','10:30–20:00','10:30–21:00','11:00–21:00',''],
           summary:{ cs:'Po–Pá 10:30–20, So 11–21', en:'Mon–Fri 10:30–20, Sat 11–21' } },

  rating: { score:'4.7', count:214 },

  hero: {
    kicker: { cs:'Česká kuchyně · Bistro', en:'Czech cuisine · Bistro' },
    sub: {
      cs:'Poctivé polední menu, guláš z hovězích líček a buchty jako od babičky. Vaříme z toho, co seženeme na trhu za rohem.',
      en:'An honest lunch menu, goulash from beef cheeks and buns like grandma used to make. We cook with what the market around the corner has today.'
    },
    cta: { cs:'Kde nás najdete', en:'Find us' },
    imageAlt: { cs:'', en:'' },
    caption: { cs:'Polední menu na tabuli', en:'Lunch menu on the board' },
    captionMeta: 'BRNO'
  },

  menu: {
    intro: {
      cs:'Denní menu píšeme každé ráno na tabuli. Ceny jsou ilustrační.',
      en:'The daily menu is written on the board every morning. Prices are illustrative.'
    },

    groups: [
      { id:'g-poledni', title:{cs:'Polední menu',en:'Lunch menu'},
        note:{cs:'Po–Pá 11:00–14:00, polévka v ceně.',en:'Mon–Fri 11:00–14:00, soup included.'},
        items:[
          { name:{cs:'Svíčková na smetaně s houskovým knedlíkem',en:'Beef sirloin in cream sauce with bread dumplings'}, price:'189 Kč' },
          { name:{cs:'Guláš z hovězích líček, chléb',en:'Beef cheek goulash with bread'}, price:'179 Kč' },
          { name:{cs:'Smažený řízek, bramborový salát',en:'Fried schnitzel with potato salad'}, price:'195 Kč' },
          { name:{cs:'Vepřo knedlo zelo',en:'Roast pork, dumplings, cabbage'}, price:'175 Kč' }
        ]},

      { id:'g-polevky', title:{cs:'Polévky',en:'Soups'},
        items:[
          { name:{cs:'Česnečka se sýrem a krutony',en:'Garlic soup with cheese and croutons'}, price:'75 Kč' },
          { name:{cs:'Hovězí vývar s masem a nudlemi',en:'Beef broth with meat and noodles'}, price:'85 Kč' },
          { name:{cs:'Bramboračka na houbách',en:'Potato soup with mushrooms'}, price:'79 Kč' },
          { name:{cs:'Zelňačka s klobásou',en:'Sauerkraut soup with sausage'}, price:'85 Kč' }
        ]},

      { id:'g-hlavni', title:{cs:'Z kuchyně',en:'From the kitchen'},
        items:[
          { name:{cs:'Pečená kachna se zelím a bramborákem',en:'Roast duck with cabbage and potato pancake'}, price:'285 Kč' },
          { name:{cs:'Smažený sýr, hranolky, tatarka',en:'Fried cheese, fries, tartar sauce'}, price:'165 Kč' },
          { name:{cs:'Bramborové knedlíky plněné uzeným',en:'Potato dumplings filled with smoked meat'}, price:'169 Kč' },
          { name:{cs:'Kuřecí řízek v bramborákovém těstíčku',en:'Chicken schnitzel in potato batter'}, price:'185 Kč' }
        ]},

      { id:'g-dezerty', title:{cs:'Moučníky',en:'Sweets'},
        items:[
          { name:{cs:'Ovocné knedlíky s tvarohem',en:'Fruit dumplings with curd'}, price:'135 Kč' },
          { name:{cs:'Domácí buchty s povidly',en:'Homemade buns with plum jam'}, price:'95 Kč' },
          { name:{cs:'Palačinky s tvarohem a ovocem',en:'Pancakes with curd and fruit'}, price:'125 Kč' },
          { name:{cs:'Jablečný závin se šlehačkou',en:'Apple strudel with whipped cream'}, price:'99 Kč' }
        ]},

      { id:'g-napoje', title:{cs:'Nápoje',en:'Drinks'},
        items:[
          { name:{cs:'Točené pivo 0,5 l',en:'Draught beer 0.5 l'}, price:'55 Kč' },
          { name:{cs:'Nealkoholické pivo 0,5 l',en:'Non-alcoholic beer 0.5 l'}, price:'49 Kč' },
          { name:{cs:'Domácí limonáda z bezu',en:'Homemade elderflower lemonade'}, price:'75 Kč' },
          { name:{cs:'Káva se šlehačkou',en:'Coffee with whipped cream'}, price:'65 Kč' }
        ]}
    ],

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
