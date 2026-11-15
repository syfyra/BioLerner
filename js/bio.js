/* BioLerner – Namensraum und kleine Helfer */
(function () {
  'use strict';

  window.BIO = {
    // Termin der Klassenarbeit laut Kursplan
    KA: { date: '2026-11-16', title: '1. Klassenarbeit' },
    units: [],
    unit: function (u) { this.units.push(u); },
    // Themen, die laut Kursplan nach der KA kommen
    later: ['DNA & RNA', 'DNA-Replikation', 'Zellzyklus & Mitose', 'Meiose',
      'Proteinbiosynthese', 'Mutationen', 'Vererbung', 'Evolution']
  };

  function lev(a, b) {
    if (a === b) return 0;
    var m = a.length, n = b.length, i, j;
    if (!m) return n;
    if (!n) return m;
    var prev = [], cur = [];
    for (j = 0; j <= n; j++) prev[j] = j;
    for (i = 1; i <= m; i++) {
      cur = [i];
      for (j = 1; j <= n; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1,
          prev[j - 1] + (a.charCodeAt(i - 1) === b.charCodeAt(j - 1) ? 0 : 1));
      }
      prev = cur;
    }
    return prev[n];
  }

  window.U = {
    $: function (sel, root) { return (root || document).querySelector(sel); },
    $$: function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); },
    el: function (tag, cls, html) {
      var e = document.createElement(tag);
      if (cls) e.className = cls;
      if (html != null) e.innerHTML = html;
      return e;
    },
    shuffle: function (arr) {
      var a = arr.slice();
      for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = a[i]; a[i] = a[j]; a[j] = t;
      }
      return a;
    },
    pick: function (arr) { return arr[Math.floor(Math.random() * arr.length)]; },
    // Vergleichsform für getippte Antworten: Umlaute, Artikel, Satzzeichen egal
    norm: function (s) {
      return String(s).toLowerCase().trim()
        .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
        .replace(/^(der|die|das|den|dem|ein|eine|einen)\s+/, '')
        .replace(/[^a-z0-9]/g, '');
    },
    lev: lev,
    esc: function (s) {
      return String(s).replace(/[&<>"]/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
      });
    },
    clamp: function (v, a, b) { return Math.max(a, Math.min(b, v)); }
  };
})();
