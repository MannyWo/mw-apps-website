/* ═══════════════════════════════════════════════════════════════
   Besucherzählung für mw-app.de  ·  GoatCounter
   ───────────────────────────────────────────────────────────────
   Wird von allen Seiten eingebunden:  <script src="/analytics.js"></script>

   Zählt:
     · jeden Seitenaufruf
     · jeden Klick auf einen App-Store- oder Play-Store-Link

   Keine Cookies, keine personenbezogenen Daten, keine Weitergabe
   an Dritte. Auswertung nur unter mwapps.goatcounter.com.

   Zum Abschalten: diese eine Zeile in den Seiten entfernen.
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var ACCOUNT = 'https://mwapps.goatcounter.com/count';

  /* Eigene Aufrufe nicht mitzählen.
     Zum Testen der eigenen Seite einmalig in der Browser-Konsole ausführen:
        localStorage.setItem('skipzaehlung', '1')
     Rückgängig:
        localStorage.removeItem('skipzaehlung')                            */
  try {
    if (localStorage.getItem('skipzaehlung') === '1') return;
  } catch (e) { /* localStorage gesperrt – dann eben zählen */ }

  /* Muss gesetzt sein, BEVOR count.js lädt: wir zählen selbst,
     damit der Aufruf erst nach dem Laden der Seite gemeldet wird. */
  window.goatcounter = { no_onload: true };

  var s = document.createElement('script');
  s.async = true;
  s.src = '//gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', ACCOUNT);
  document.head.appendChild(s);

  function zaehle(pfad, titel) {
    if (window.goatcounter && window.goatcounter.count) {
      window.goatcounter.count(pfad ? { path: pfad, title: titel } : undefined);
    }
  }

  /* Welche App gehört zu diesem Store-Link? */
  function appAusLink(url) {
    if (/terminkompass/i.test(url)) return 'terminkompass';
    if (/jobtrace/i.test(url))      return 'jobtrace';
    if (/itemshark/i.test(url))     return 'itemshark';
    return 'unbekannt';
  }

  function start() {
    /* Seitenaufruf melden */
    zaehle();

    /* Store-Klicks melden – erkennt Links am Ziel, unabhängig davon
       ob sie ein data-store-Attribut tragen.                        */
    document.addEventListener('click', function (ev) {
      var a = ev.target.closest && ev.target.closest('a[href]');
      if (!a) return;

      var url = a.getAttribute('href') || '';
      var laden;

      if (url.indexOf('apps.apple.com') > -1)          laden = 'appstore';
      else if (url.indexOf('play.google.com/store') > -1) laden = 'playstore';
      else return;

      var app = appAusLink(url);
      zaehle(
        'klick-' + laden + '-' + app,
        (laden === 'appstore' ? 'App Store' : 'Play Store') + ' – ' + app
      );
    }, true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
