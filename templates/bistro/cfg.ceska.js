/* ============================================================
   BISTRO — česká kuchyně. Ukázkový obsah (žádný konkrétní podnik).
   Fotky: `gallery` = nástěnka v hero, `interior` = listovací galerie
   interiéru. Položky menu zatím fotku nemají a engine jim kreslí
   zástupný vzor; až budou snímky v photos/bistro/ceska/menu/, stačí
   u položky doplnit `photo:'../../photos/bistro/ceska/menu/nazev.webp'`.
   ============================================================ */
window.SITE = {

  lang: { default:'cs', available:['cs','en'], storageKey:'bistro-cs-lang' },

  theme: { auto:true, default:'light', toggle:true,
           timeZone:'Europe/Prague', storageKey:'bistro-cs-theme', manualTtlHours:12 },

  brand: {
    name: 'Bistro',
    title: { cs:'Bistro — česká kuchyně', en:'Bistro — Czech cuisine' },
    description: {
      cs:'Ukázková šablona webu pro bistro s českou kuchyní. Polední menu, svíčková, guláš, domácí buchty.',
      en:'Demo website template for a Czech bistro. Daily lunch menu, svíčková, goulash, homemade pastries.'
    },
    color: null
  },

  contact: {
    phone: '+420 123 456 789',
    phoneHref: 'tel:+420123456789',
    address: { line1:'Ukázková 123', line2:'602 00 Brno', short:'Ukázková 123, Brno' },
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

  /* Šest fotek na výšku — galerie v hero. Pořadí = pořadí na nástěnce. */
  gallery: [
    { src:'../../photos/bistro/ceska/01.webp',
      alt:{cs:'Maso v omáčce s knedlíkem a červeným zelím',en:'Meat in gravy with dumpling and red cabbage'},
      caption:{cs:'Omáčka, knedlík, zelí',en:'Gravy, dumpling, cabbage'} },
    { src:'../../photos/bistro/ceska/06.webp',
      alt:{cs:'Klobásy s dušeným zelím a hořčicí',en:'Sausages with braised cabbage and mustard'},
      caption:{cs:'Klobásy a zelí',en:'Sausages and cabbage'} },
    { src:'../../photos/bistro/ceska/05.webp',
      alt:{cs:'Pečené brambory s koprem a vepřovou pečení',en:'Roast potatoes with dill and roast pork'},
      caption:{cs:'Pečínka s bramborem',en:'Roast with potatoes'} },
    { src:'../../photos/bistro/ceska/02.webp',
      alt:{cs:'Nudle s hovězím na smetaně a klobásky s hráškem',en:'Beef with cream and noodles, sausages with peas'},
      caption:{cs:'Ze dvou misek',en:'From two bowls'} },
    { src:'../../photos/bistro/ceska/04.webp',
      alt:{cs:'Prostřený stůl: hranolky, vejce, cibulová polévka',en:'Laid table: fries, eggs, onion soup'},
      caption:{cs:'Když přijdete ve dvou',en:'When you come as two'} },
    { src:'../../photos/bistro/ceska/03.webp',
      alt:{cs:'Talíř s masem u stolu ve večerním světle',en:'A plate of meat at the table in evening light'},
      caption:{cs:'Večer u stolu',en:'Evening at the table'} }
  ],

  /* Listovací galerie interiéru v sekci „Atmosféra".
     Soubory leží v photos/bistro/ceska/interier/ — další přidáte tak,
     že snímek nahrajete pod dalším číslem a doplníte sem řádek. */
  interior: [
    { src:'../../photos/bistro/ceska/interier/01.webp',
      alt:{cs:'Interiér bistra',en:'Bistro interior'},
      caption:{cs:'U nás v lokále',en:'Inside the bistro'} }
  ],

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
