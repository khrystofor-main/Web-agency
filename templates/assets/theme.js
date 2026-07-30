/* ============================================================
   AUTOMATICKÉ TÉMA — světlé přes den, tmavé po setmění.

   Načítá se v <head> PŘED vykreslením stránky, jinak by při každém
   nočním otevření webu na okamžik probleskl světlý podklad.

   Pořadí rozhodování:
     1. ruční volba návštěvníka (tlačítko v navigaci)  — má vždy přednost
     2. čas v Česku podle skutečného úsvitu a soumraku
     3. výchozí téma z konfigurace

   Systémové nastavení zařízení (prefers-color-scheme) se záměrně
   NEPOUŽÍVÁ: hodně lidí má telefon v tmavém režimu nastálo, takže by
   web vypadal tmavě i v poledne. Web kavárny se řídí denní dobou hosta.

   Nastavuje atribut data-theme="light|dark" na <html>.
   Konfigurace: SITE.theme v assets/site.config.js.
   ============================================================ */
(function () {
  'use strict';

  var S = window.SITE || {};
  var C = S.theme || {};

  var AUTO = C.auto !== false;
  var TZ = C.timeZone || 'Europe/Prague';
  var KEY = C.storageKey || 'site-theme';
  var FALLBACK = C.default === 'dark' ? 'dark' : 'light';
  /* Ruční volba po čase vyprší, jinak by jedno kliknutí navždy vyplo
     automatiku i pro návštěvu za půl roku. 0 = volba platí trvale. */
  var TTL_H = typeof C.manualTtlHours === 'number' ? C.manualTtlHours : 12;

  /* Východ a západ slunce v ČR (Brno, ~49,2° s. š.) po měsících,
     v místním čase — letní čas je v hodnotách už zahrnutý.
     Přesnost na desítky minut úplně stačí; jde o náladu, ne o astronomii. */
  var SUN = [
    [7 * 60 + 45, 16 * 60 + 20],  // leden
    [7 * 60 + 10, 17 * 60 + 10],  // únor
    [6 * 60 + 15, 18 * 60 + 0],   // březen
    [6 * 60 + 10, 19 * 60 + 50],  // duben
    [5 * 60 + 20, 20 * 60 + 35],  // květen
    [4 * 60 + 55, 21 * 60 + 5],   // červen
    [5 * 60 + 10, 21 * 60 + 0],   // červenec
    [5 * 60 + 55, 20 * 60 + 15],  // srpen
    [6 * 60 + 45, 19 * 60 + 15],  // září
    [7 * 60 + 30, 18 * 60 + 15],  // říjen
    [7 * 60 + 20, 16 * 60 + 20],  // listopad
    [7 * 60 + 55, 16 * 60 + 0]    // prosinec
  ];
  /* Tma nepadne přesně se západem slunce — soumrak ještě chvíli svítí. */
  var TWILIGHT = 30;

  /* Čas v Česku bez ohledu na to, kde sedí návštěvník.
     Intl si sám poradí s přechodem na letní čas. */
  function czechNow() {
    try {
      var p = new Intl.DateTimeFormat('en-GB', {
        timeZone: TZ, month: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false
      }).formatToParts(new Date());
      var v = {};
      p.forEach(function (x) { v[x.type] = x.value; });
      var h = parseInt(v.hour, 10) % 24;   // půlnoc hlásí část prohlížečů jako 24
      return { month: parseInt(v.month, 10) - 1, minutes: h * 60 + parseInt(v.minute, 10) };
    } catch (e) {
      var d = new Date();   // prohlížeč bez Intl/timeZone — aspoň lokální čas
      return { month: d.getMonth(), minutes: d.getHours() * 60 + d.getMinutes() };
    }
  }

  function themeByTime() {
    var now = czechNow();
    var sun = SUN[now.month] || SUN[0];
    var dawn = sun[0] - TWILIGHT;
    var dusk = sun[1] + TWILIGHT;
    return (now.minutes < dawn || now.minutes >= dusk) ? 'dark' : 'light';
  }

  function readManual() {
    var raw = null;
    try { raw = localStorage.getItem(KEY); } catch (e) { return null; }
    if (!raw) return null;
    var saved;
    try { saved = JSON.parse(raw); } catch (e) { return null; }
    if (!saved || (saved.v !== 'dark' && saved.v !== 'light')) return null;
    if (TTL_H > 0 && Date.now() - saved.t > TTL_H * 3600e3) {
      try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ }
      return null;
    }
    return saved.v;
  }

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  apply(readManual() || (AUTO ? themeByTime() : FALLBACK));

  /* Tlačítko je v HTML šablony (#themeBtn), aby si každá varianta
     mohla nastavit vlastní vzhled. Když chybí, přepínání prostě není. */
  function initButton() {
    var btn = document.getElementById('themeBtn');
    if (!btn) return;
    if (C.toggle === false) { btn.remove(); return; }
    btn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(next);
      try { localStorage.setItem(KEY, JSON.stringify({ v: next, t: Date.now() })); } catch (e) { /* ignore */ }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initButton);
  } else {
    initButton();
  }

  /* Otevřená karta přes soumrak: přepneme až po návratu k webu, ne pod
     rukama čtoucího návštěvníka. Ruční volba má i tady přednost. */
  document.addEventListener('visibilitychange', function () {
    if (document.hidden || !AUTO || readManual()) return;
    apply(themeByTime());
  });
})();
