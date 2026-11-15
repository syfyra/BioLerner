#!/usr/bin/env node
/* Prüft alle Fragen und Spickzettel auf formale Fehler.
   Aufruf:  node tools/validate.js  */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const ctx = { window: {}, console };
ctx.window.window = ctx.window;
vm.createContext(ctx);

function load(rel) {
  const code = fs.readFileSync(path.join(root, rel), 'utf8');
  vm.runInContext('with (window) { ' + code + '\n }', ctx, { filename: rel });
}

load('js/bio.js');
load('js/diagrams.js');
fs.readdirSync(path.join(root, 'js/units')).sort().forEach(f => load('js/units/' + f));

const { BIO, Diagrams } = ctx.window;
const TYPES = ['mc', 'multi', 'tf', 'match', 'cloze', 'order', 'sort', 'type', 'label', 'tap', 'explain'];
const errors = [];
const count = {};
let total = 0;

function err(where, msg) { errors.push(where + ': ' + msg); }
function isStr(s) { return typeof s === 'string' && s.trim().length > 0; }
function partsOf(d) { return Diagrams.has(d) ? Object.keys(Diagrams.names(d)) : null; }

function checkFig(where, f) {
  if (!Diagrams.has(f.d)) err(where, 'unbekannte Skizze ' + f.d);
}

BIO.units.forEach(u => {
  const uw = 'Einheit ' + u.id;
  ['id', 'icon', 'color', 'title', 'blurb'].forEach(k => { if (!isStr(u[k])) err(uw, 'Feld ' + k + ' fehlt'); });
  if (!u.sheet || !isStr(u.sheet.intro) || !Array.isArray(u.sheet.facts) || !u.sheet.facts.length) err(uw, 'Spickzettel unvollständig');
  else {
    u.sheet.facts.forEach((f, i) => { if (!Array.isArray(f) || f.length !== 2 || !isStr(f[0]) || !isStr(f[1])) err(uw, 'Fakt ' + i + ' fehlerhaft'); });
    (u.sheet.figs || []).forEach(f => checkFig(uw + ' Spickzettel', f));
  }
  if (!Array.isArray(u.lessons) || !u.lessons.length) err(uw, 'keine Lektionen');

  (u.lessons || []).forEach((l, li) => {
    if (!isStr(l.title)) err(uw + '.' + li, 'Lektionstitel fehlt');
    if (!Array.isArray(l.qs) || l.qs.length < 5) err(uw + '.' + li, 'zu wenige Fragen');
    (l.qs || []).forEach((q, qi) => {
      const w = u.id + '.' + li + '.' + qi + ' (' + q.t + ')';
      total++;
      count[q.t] = (count[q.t] || 0) + 1;
      if (TYPES.indexOf(q.t) < 0) return err(w, 'unbekannter Typ');
      if (q.fig) checkFig(w, q.fig);
      const needsQ = ['mc', 'multi', 'tf', 'order', 'sort', 'type', 'tap', 'explain'];
      if (needsQ.indexOf(q.t) >= 0 && !isStr(q.q)) err(w, 'Fragetext fehlt');
      const needsWhy = ['mc', 'multi', 'tf', 'type', 'label', 'tap'];
      if (needsWhy.indexOf(q.t) >= 0 && !isStr(q.w)) err(w, 'Erklärung (w) fehlt');

      switch (q.t) {
        case 'mc':
          if (!Array.isArray(q.o) || q.o.length < 2) err(w, 'Optionen fehlen');
          else {
            if (!(q.a >= 0 && q.a < q.o.length)) err(w, 'Antwortindex ungültig');
            if (new Set(q.o).size !== q.o.length) err(w, 'doppelte Optionen');
          }
          break;
        case 'multi':
          if (!Array.isArray(q.o) || q.o.length < 3) err(w, 'Optionen fehlen');
          else if (!Array.isArray(q.a) || !q.a.length || q.a.some(i => !(i >= 0 && i < q.o.length))) err(w, 'Antworten ungültig');
          else if (q.a.length === q.o.length) err(w, 'alle Optionen richtig – sinnlos');
          break;
        case 'tf':
          if (typeof q.a !== 'boolean') err(w, 'Antwort muss true/false sein');
          break;
        case 'match':
          if (!Array.isArray(q.pairs) || q.pairs.length < 3) err(w, 'zu wenige Paare');
          else {
            if (q.pairs.some(p => !Array.isArray(p) || p.length !== 2 || !isStr(p[0]) || !isStr(p[1]))) err(w, 'Paar fehlerhaft');
            if (new Set(q.pairs.map(p => p[1])).size !== q.pairs.length) err(w, 'doppelte rechte Seite');
            if (new Set(q.pairs.map(p => p[0])).size !== q.pairs.length) err(w, 'doppelte linke Seite');
          }
          break;
        case 'cloze': {
          if (!isStr(q.text) || !Array.isArray(q.blanks)) { err(w, 'Text oder Lücken fehlen'); break; }
          const used = (q.text.match(/\{(\d)\}/g) || []).map(m => +m[1]);
          if (used.length !== q.blanks.length) err(w, 'Anzahl Lücken passt nicht');
          used.forEach((n, i) => { if (n !== i) err(w, 'Lücken nicht fortlaufend nummeriert'); });
          const words = q.blanks.concat(q.extra || []);
          if (new Set(words).size !== words.length) err(w, 'doppelte Wörter in der Wortbank');
          (q.any || []).forEach(g => g.forEach(i => { if (!(i >= 0 && i < q.blanks.length)) err(w, 'any-Gruppe ungültig'); }));
          break;
        }
        case 'order':
          if (!Array.isArray(q.items) || q.items.length < 3) err(w, 'zu wenige Schritte');
          break;
        case 'sort':
          if (!Array.isArray(q.buckets) || q.buckets.length < 2 || q.buckets.length > 3) err(w, 'Kategorien ungültig');
          else if (!Array.isArray(q.items) || q.items.length < 4) err(w, 'zu wenige Elemente');
          else {
            if (q.items.some(it => !isStr(it[0]) || !(it[1] >= 0 && it[1] < q.buckets.length))) err(w, 'Element ungültig');
            q.buckets.forEach((b, i) => { if (!q.items.some(it => it[1] === i)) err(w, 'Kategorie „' + b + '“ ist leer'); });
          }
          break;
        case 'type':
          if (!Array.isArray(q.accept) || !q.accept.length || q.accept.some(a => !isStr(a))) err(w, 'accept fehlt');
          break;
        case 'label': {
          const parts = partsOf(q.d);
          if (!parts) { err(w, 'unbekannte Skizze ' + q.d); break; }
          if (parts.indexOf(q.target) < 0) err(w, 'unbekannte Struktur ' + q.target);
          if (q.o) {
            if (!(q.a >= 0 && q.a < q.o.length)) err(w, 'Antwortindex ungültig');
          } else if (parts.length < 4) err(w, 'zu wenige Strukturen für automatische Optionen');
          break;
        }
        case 'tap': {
          const parts = partsOf(q.d);
          if (!parts) { err(w, 'unbekannte Skizze ' + q.d); break; }
          [].concat(q.target).forEach(t => { if (parts.indexOf(t) < 0) err(w, 'unbekannte Struktur ' + t); });
          break;
        }
        case 'explain':
          if (!Array.isArray(q.points) || q.points.length < 3) err(w, 'zu wenige Bewertungspunkte');
          if (!isStr(q.model)) err(w, 'Musterlösung fehlt');
          if (!isStr(q.op)) err(w, 'Operator fehlt');
          break;
      }
    });
  });
});

// Jede Skizze muss sich in allen Varianten zeichnen lassen
['animalCell', 'plantCell', 'bacterium', 'membrane'].forEach(d => {
  const svg = Diagrams.render(d, { legend: true });
  if (svg.indexOf('<svg') !== 0) err('Skizze ' + d, 'lässt sich nicht zeichnen');
});

console.log(BIO.units.length + ' Einheiten, ' + BIO.units.reduce((n, u) => n + u.lessons.length, 0) + ' Lektionen, ' + total + ' Fragen');
console.log(Object.keys(count).sort().map(k => k + ': ' + count[k]).join(' · '));
if (errors.length) {
  console.error('\n' + errors.length + ' Fehler:\n  ' + errors.join('\n  '));
  process.exit(1);
}
console.log('Alles in Ordnung.');
