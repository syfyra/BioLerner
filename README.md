# BioLerner

Bio-Trainer für Klasse 10 mit Lernpfad, Herzen, Streak und XP – begleitet von Mito, dem frechen Mitochondrium.

Aktueller Inhalt: der Stoff der 1. Klassenarbeit (Zelle und Biomembranen) in 9 Einheiten, 27 Lektionen und 211 Fragen.

| Einheit | Thema |
| --- | --- |
| 1 | Pflanzen- und Tierzelle |
| 2 | Pro- und Eukaryoten |
| 3 | Zellorganellen und ihre Funktion |
| 4 | Diffusion und Osmose |
| 5 | Aufbau von Biomembranen |
| 6 | Flüssig-Mosaik-Modell |
| 7 | Transport an Biomembranen |
| 8 | Membransysteme und Oberflächen |
| 9 | Vom Einzeller zum Mehrzeller, Zellstoffwechsel |

## Was drin ist

- **Lernpfad**: pro Einheit drei Lektionen (Grundlagen, Vertiefung, KA-Niveau), 5 Herzen pro Lektion, bis zu 3 Sterne.
- **11 Aufgabentypen**: Auswahl, Mehrfachauswahl, richtig/falsch, Paare, Lückentext, Reihenfolge, Einsortieren, Fachbegriff eintippen, Skizze beschriften, Skizze antippen, KA-Aufgabe mit Musterlösung und Selbstkontrolle.
- **Spickzettel** zu jeder Einheit, inklusive beschrifteter Skizzen.
- **Boss-Fight**: KA-Simulation mit 24 Aufgaben, 30 BE, 20 Minuten, Note und Schwachstellen-Auswertung.
- **Blitzrunde**: 60 Sekunden mit Serien-Multiplikator und Rekord.
- **Fehler-Training**: falsch beantwortete Fragen kommen wieder, bis sie zweimal sitzen.
- **Profil**: Level, Streak, Abzeichen, Töne an/aus, helles und dunkles Design.

Der Fortschritt liegt nur im Browser (`localStorage`). Es gibt keinen Server, keine Anmeldung, keine externen Schriften oder Skripte.

## Auf GitHub Pages veröffentlichen

Die Seite ist reines HTML, CSS und JavaScript. Es gibt keinen Build-Schritt.

1. Den Stand auf den Branch `main` bringen (Pull Request mergen).
2. Im Repository **Settings → Pages** öffnen.
3. Unter **Build and deployment** bei *Source* **Deploy from a branch** wählen.
4. Branch **main** und Ordner **/ (root)** auswählen, dann **Save**.
5. Nach etwa einer Minute ist die Seite unter `https://<benutzername>.github.io/BioLerner/` erreichbar.

Jeder weitere Push auf `main` aktualisiert die Seite automatisch.

## Lokal ausprobieren

```bash
python3 -m http.server 8000
# dann http://localhost:8000 öffnen
```

Ein Doppelklick auf `index.html` funktioniert ebenfalls.

## Aufbau

```
index.html            Einstieg, lädt alle Skripte
css/style.css         Gestaltung (hell und dunkel)
js/bio.js             Namensraum, KA-Termin, Helfer
js/store.js           Speicherstand, Level, Streak
js/sfx.js             Töne und Konfetti
js/mito.js            Maskottchen, Endgegner, Sprüche
js/diagrams.js        Skizzen als SVG
js/questions.js       Aufgabentypen
js/app.js             Lernpfad, Arena, Profil, Spielrunden
js/units/*.js         Inhalte: eine Datei pro Einheit
tools/validate.js     Prüft alle Fragen auf formale Fehler
```

## Neue Themen ergänzen

1. In `js/units/` eine neue Datei anlegen, z. B. `10-dna.js`, nach dem Muster der vorhandenen Dateien (`BIO.unit({...})`).
2. Die Datei in `index.html` vor `js/questions.js` einbinden.
3. Prüfen:

```bash
node tools/validate.js
```

Der KA-Termin für den Countdown steht in `js/bio.js` (`BIO.KA.date`).

### Aufgabentypen in Kurzform

```js
{ t: 'mc',     q: 'Frage', o: ['richtig', 'falsch', 'falsch'], a: 0, w: 'Erklärung' }
{ t: 'multi',  q: 'Frage', o: ['A', 'B', 'C', 'D'], a: [0, 1], w: 'Erklärung' }
{ t: 'tf',     q: 'Aussage', a: false, w: 'Erklärung' }
{ t: 'match',  pairs: [['Begriff', 'Bedeutung'], ['…', '…'], ['…', '…']] }
{ t: 'cloze',  text: 'Satz mit {0} und {1}.', blanks: ['Wort', 'Wort'], extra: ['Ablenker'] }
{ t: 'order',  q: 'Ordne …', items: ['erster Schritt', 'zweiter', 'dritter'] }
{ t: 'sort',   q: 'A oder B?', buckets: ['A', 'B'], items: [['Ding', 0], ['Ding', 1], ['…', 0], ['…', 1]] }
{ t: 'type',   q: 'Wie heißt …?', accept: ['Antwort', 'Schreibvariante'], w: 'Erklärung' }
{ t: 'label',  d: 'plantCell', target: 'vacuole', w: 'Erklärung' }
{ t: 'tap',    d: 'animalCell', target: 'mito', q: 'Tippe auf …', w: 'Erklärung' }
{ t: 'explain', op: 'Erkläre', q: 'Aufgabe', points: ['Punkt 1', 'Punkt 2', 'Punkt 3'], model: 'Musterlösung' }
```

Die Optionen werden beim Anzeigen gemischt, die richtige Antwort darf also immer an erster Stelle stehen.
