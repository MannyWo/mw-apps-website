(function () {
  'use strict';

  var ACCOUNT = 'https://mwapps.goatcounter.com/count';
  var SCHLUESSEL = 'mwapps-nicht-zaehlen';

  try {
    if (/[?&]nozaehlen\b/.test(location.search)) {
      localStorage.setItem(SCHLUESSEL, '1');
      console.log('MW_Apps: Dieser Browser wird ab jetzt nicht mehr mitgezaehlt.');
    }
    if (/[?&]dochzaehlen\b/.test(location.search)) {
      localStorage.removeItem(SCHLUESSEL);
      console.log('MW_Apps: Dieser Browser wird wieder mitgezaehlt.');
    }
    if (localStorage.getItem(SCHLUESSEL) === '1') return;
  } catch (e) {}

  var s = document.createElement('script');
  s.async = true;
  s.src = '//gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', ACCOUNT);
  document.head.appendChild(s);

  function appAusLink(url) {
    if (/terminkompass/i.test(url)) return 'terminkompass';
    if (/jobtrace/i.test(url))      return 'jobtrace';
    if (/itemshark/i.test(url))     return 'itemshark';
    return 'unbekannt';
  }

  document.addEventListener('click', function (ev) {
    var a = ev.target.closest && ev.target.closest('a[href]');
    if (!a) return;

    var url = a.getAttribute('href') || '';
    var laden;

    if (url.indexOf('apps.apple.com') > -1)             laden = 'appstore';
    else if (url.indexOf('play.google.com/store') > -1)  laden = 'playstore';
    else return;

    if (!window.goatcounter || !window.goatcounter.count) return;

    var app = appAusLink(url);
    window.goatcounter.count({
      path: 'klick-' + laden + '-' + app,
      title: (laden === 'appstore' ? 'App Store' : 'Play Store') + ' - ' + app,
      event: true
    });
  }, true);
})();
