/* ============================================================
   SKELETON KONFIGURACE — zkopírujte přes site.config.js
   a vyplňte údaji svého podniku.

       cp assets/site.config.example.js assets/site.config.js

   Pravidla:
   • Dvojjazyčný text = { cs:'…', en:'…' }. Jednojazyčný web?
     Nechte v lang.available jen jeden kód a { cs:'…' } stačí.
   • Cesty k fotkám jsou relativní vůči HTML souboru šablony
     (šablony leží v templates/, proto '../../photos/…').
   • Prázdné pole nebo null = blok se na webu skryje.
   ============================================================ */
window.SITE = {

  lang: { default:'cs', available:['cs','en'], storageKey:'muj-podnik-lang' },

  /* Téma: světlé přes den, tmavé po setmění (podle času v Česku).
     auto:false → web zůstane v tématu `default`.
     toggle:false → tlačítko přepínače z navigace zmizí.
     manualTtlHours: za jak dlouho vyprší ruční volba návštěvníka (0 = nikdy). */
  theme: { auto:true, default:'light', toggle:true,
           timeZone:'Europe/Prague', storageKey:'muj-podnik-theme', manualTtlHours:12 },

  brand: {
    name: 'Název kavárny',                       // objeví se v logu, hero titulku a patičce
    title: { cs:'Název kavárny — Město', en:'Café Name — City' },   // <title>
    description: { cs:'', en:'' },               // meta description pro vyhledávače
    color: null                                  // '#C65F3F' přepíše hlavní barvu šablony
  },

  contact: {
    phone: '+420 000 000 000',
    phoneHref: 'tel:+420000000000',              // bez mezer!
    address: { line1:'Ulice 1', line2:'000 00 Město', short:'Ulice 1, Město' },
    mapsUrl: '',                                 // odkaz „Otevřít v Mapách Google“
    mapCoords: '49.1937524,16.6070308',          // šířka,délka pro vloženou mapu
    mapZoom: 16
  },

  /* stejná doba každý den… */
  hours: { uniform:'9:00–22:00', summary:{ cs:'Otevřeno denně 9–22', en:'Open daily 9–22' } },
  /* …nebo rozdílné dny (od pondělí, prázdný řetězec = zavřeno):
  hours: { perDay:['8:00–18:00','8:00–18:00','8:00–18:00','8:00–18:00','8:00–20:00','9:00–20:00',''],
           summary:{ cs:'Po–Pá 8–18, So 9–20', en:'Mon–Fri 8–18, Sat 9–20' } }, */

  rating: null,                                  // { score:'4.8', count:120 } nebo null (blok se skryje)

  hero: {
    kicker: { cs:'Kavárna — Město', en:'Café — City' },
    sub: { cs:'Jedna dvě věty o tom, čím je podnik výjimečný.', en:'One or two sentences about the place.' },
    cta: { cs:'Kde nás najdete', en:'Find us' },
    image: '../../photos/optimized/hero.webp',
    imageAlt: { cs:'', en:'' },
    caption: { cs:'', en:'' },                   // popisek pod fotkou (šablona Editorial)
    captionMeta: ''                              // např. 'Brno, CZ'
  },

  /* Kolik položek, tolik slidů karuselu. */
  gallery: [
    { src:'../../photos/optimized/1.webp', alt:{cs:'',en:''}, caption:{cs:'',en:''} }
  ],

  menu: {
    photoBase: '../../photos/menu-optimized/',      // složka s fotkami jídel
    photoExt: '.webp',                           // přípona se u fotek automaticky nahradí touto
    intro: { cs:'Kompletní nabídka s cenami.', en:'Full menu with prices.' },
    stripLabel: { cs:'', en:'' },                // popisek u pásu fotek bez ceny (viz „strip“ níže)

    /* Každá skupina = jedna záložka kategorie. id musí být unikátní. */
    groups: [
      { id:'g-kava', title:{cs:'Kávové nápoje',en:'Coffee'},
        note:{cs:'Nepovinná poznámka nad položkami.',en:'Optional note above the items.'},
        items:[
          { name:{cs:'Espresso',en:'Espresso'}, price:'65 Kč' },
          { name:{cs:'Cappuccino',en:'Cappuccino'}, price:'85 Kč', photo:'cappuccino.png' }
        ],
        /* nepovinné: pás fotek bez cen, např. denní dezerty
        strip:['dort1.png','dort2.png'] */
      }
    ],

    allergens: [
      { code:'A1', label:{cs:'obiloviny obsahující lepek',en:'cereals containing gluten'} }
    ]
  },

  footer: {
    credits: { cs:'', en:'' }                    // např. autoři fotek
  }
};
