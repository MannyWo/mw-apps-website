(function () {
  'use strict';

  var ACCOUNT = 'https://mwapps.goatcounter.com/count';

  try {
    if (localStorage.getItem('skipzaehlung') === '1') return;
  } catch (e) {}

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

  function appAusLink(url) {
    if (/terminkompass/i.test(url)) return 'terminkompass';
    if (/jobtrace/i.test(url))      return 'jobtrace';
    if (/itemshark/i.test(url))     return 'itemshark';
    return 'unbekannt';
  }

  function start() {
    zaehle();

    document.addEventListener('click', function (ev) {
      var a = ev.target.closest && ev.target.closest('a[href]');
      if (!a) return;

      var url = a.getAttribute('href') || '';
      var laden;

      if (url.indexOf('apps.apple.com') > -1)             laden = 'appstore';
      else if (url.indexOf('play.google.com/store') > -1)  laden = 'playstore';
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
