/* BioLerner – Mito, das freche Mitochondrium (und sein Erzfeind: die Klassenarbeit) */
(function () {
  'use strict';

  var INK = '#2A1B3D', BODY = '#FF7A59', INNER = '#FFAF96', FOLD = '#E4553A';

  function eye(cx, cy, r, px, py, pr) {
    return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#fff" stroke="' + INK + '" stroke-width="2.5"/>' +
      '<circle cx="' + (cx + px) + '" cy="' + (cy + py) + '" r="' + pr + '" fill="' + INK + '"/>' +
      '<circle cx="' + (cx + px + 1.4) + '" cy="' + (cy + py - 1.6) + '" r="1.3" fill="#fff"/>';
  }
  function line(d, w, cls) {
    return '<path' + (cls ? ' class="' + cls + '"' : '') + ' d="' + d + '" fill="none" stroke="' + INK + '" stroke-width="' + (w || 3.5) +
      '" stroke-linecap="round" stroke-linejoin="round"/>';
  }
  function lid(cx, cy) {
    return '<path d="M' + (cx - 8.6) + ' ' + cy + 'a8.6 8.6 0 0 1 17.2 0z" fill="' + INNER + '" stroke="' + INK + '" stroke-width="2.5" stroke-linejoin="round"/>';
  }

  var FACES = {
    happy: function () {
      return eye(56, 54, 8, 1, 1, 3.8) + eye(84, 54, 8, 1, 1, 3.8) + line('M60 66q10 9 20 0');
    },
    cheer: function () {
      return line('M48 57q8-10 16 0M76 57q8-10 16 0') +
        '<path d="M58 64q12 17 24 0z" fill="' + INK + '" stroke="' + INK + '" stroke-width="2.5" stroke-linejoin="round"/>' +
        '<path d="M65 73q5 3 10 0" fill="none" stroke="#FF8FA3" stroke-width="3" stroke-linecap="round"/>';
    },
    smug: function () {
      return eye(56, 54, 8, 2, 1.5, 3.6) + eye(84, 54, 8, 2, 1.5, 3.6) + lid(56, 54) + lid(84, 54) +
        line('M76 39q8-6 16-1') + line('M61 67q9 6 19-3');
    },
    roast: function () {
      return eye(56, 55, 8, -2, 1.5, 3.6) + eye(84, 55, 8, -2, 1.5, 3.6) + lid(56, 55) + lid(84, 55) +
        line('M46 41h18M76 41h18') + line('M61 70h18');
    },
    shock: function () {
      return eye(56, 53, 10, 0, 0, 3) + eye(84, 53, 10, 0, 0, 3) + line('M47 37q8-5 16 0M77 37q8-5 16 0', 3) +
        '<ellipse cx="70" cy="73" rx="5" ry="6.5" fill="' + INK + '"/>';
    },
    sad: function () {
      return eye(56, 56, 8, 0, 2, 3.8) + eye(84, 56, 8, 0, 2, 3.8) + line('M46 44l16-5M94 44l-16-5', 3) +
        line('M60 73q10-8 20 0') + '<path d="M95 63q4 7 0 10q-4-3 0-10z" fill="#6CCBFF" stroke="' + INK + '" stroke-width="1.5"/>';
    },
    sleep: function () {
      return line('M48 56h16M76 56h16') + '<circle cx="70" cy="69" r="3.2" fill="' + INK + '"/>' +
        '<text x="110" y="24" font-size="17" font-weight="800" fill="' + INK + '" font-family="sans-serif">z</text>' +
        '<text x="123" y="12" font-size="12" font-weight="800" fill="' + INK + '" font-family="sans-serif">z</text>';
    },
    think: function () {
      return eye(56, 54, 8, 2, -2, 3.6) + eye(84, 54, 8, 2, -2, 3.6) + line('M76 40q8-6 16-1') + line('M48 42h15', 3) +
        line('M63 70q6-4 13 0');
    },
    cool: function () {
      return '<path d="M43 47h54v7a11 11 0 0 1-22 0v-2h-10v2a11 11 0 0 1-22 0z" fill="' + INK + '"/>' +
        '<path d="M49 51h7M81 51h7" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/>' +
        line('M61 69q9 6 19-3');
    }
  };

  var ARMS = {
    cheer: 'M26 50q-16-8-14-27M114 50q16-8 14-27',
    think: 'M24 64q-12 6-10 18M116 60q17 12 -1 22',
    cool: 'M24 62q-14 2-14 16M116 62q14 2 14 16'
  };

  function svg(mood, size) {
    mood = FACES[mood] ? mood : 'happy';
    size = size || 120;
    var blush = (mood === 'happy' || mood === 'cheer' || mood === 'smug')
      ? '<circle cx="43" cy="66" r="5" fill="#FF3D7F" opacity=".28"/><circle cx="97" cy="66" r="5" fill="#FF3D7F" opacity=".28"/>' : '';
    return '<svg class="mito mito-' + mood + '" viewBox="0 0 140 114" width="' + size + '" height="' + Math.round(size * 114 / 140) +
      '" aria-hidden="true" focusable="false">' +
      line('M54 88v17M86 88v17M45 106h11M84 106h11', 5, 'limb') +
      line(ARMS[mood] || 'M24 62q-13 6-11 19M116 62q13 6 11 19', 5, 'limb') +
      '<rect x="16" y="22" width="108" height="70" rx="35" fill="' + BODY + '" stroke="' + INK + '" stroke-width="5"/>' +
      '<rect x="25" y="31" width="90" height="52" rx="26" fill="' + INNER + '"/>' +
      '<path d="M40 36v11M100 36v11M38 78v-10M102 78v-10" fill="none" stroke="' + FOLD + '" stroke-width="5" stroke-linecap="round"/>' +
      blush + FACES[mood]() + '</svg>';
  }

  // ---- Endgegner: die Klassenarbeit ----
  var BOSS = {
    normal: function () {
      return eye(54, 64, 9, 1, 1, 4) + eye(88, 64, 9, -1, 1, 4) + line('M42 50l20 7M100 50l-20 7', 4.5) +
        line('M49 88l7-7l7 7l7-7l7 7l7-7l7 7');
    },
    hit: function () {
      return line('M47 58l12 6l-12 6M95 58l-12 6l12 6', 4) + '<ellipse cx="71" cy="88" rx="6" ry="7" fill="' + INK + '"/>';
    },
    laugh: function () {
      return line('M46 66q8-10 16 0M80 66q8-10 16 0', 4) + line('M42 50l20 7M100 50l-20 7', 4.5) +
        '<path d="M50 82h42q-2 18-21 18t-21-18z" fill="' + INK + '"/><path d="M56 82h30v5h-30z" fill="#fff"/>';
    },
    dead: function () {
      return line('M47 58l13 13M60 58l-13 13M82 58l13 13M95 58l-13 13', 4) + line('M52 90q5-6 9.5 0t9.5 0t9.5 0');
    }
  };

  function boss(mood, size) {
    mood = BOSS[mood] ? mood : 'normal';
    size = size || 130;
    return '<svg class="boss boss-' + mood + '" viewBox="0 0 150 152" width="' + size + '" height="' + Math.round(size * 152 / 150) +
      '" aria-hidden="true" focusable="false"><g transform="rotate(-5 72 78)">' +
      line('M114 80q22-8 18-32', 5, 'limb') + line('M28 80q-18 4-16 24', 5, 'limb') +
      '<g transform="translate(131 40) rotate(24)"><rect x="-4.5" y="-24" width="9" height="30" rx="2" fill="#E5383B" stroke="' + INK +
      '" stroke-width="2.5"/><path d="M-4.5 6l4.5 10l4.5-10z" fill="#F7C9A0" stroke="' + INK + '" stroke-width="2" stroke-linejoin="round"/></g>' +
      '<rect x="24" y="14" width="94" height="124" rx="8" fill="#fff" stroke="' + INK + '" stroke-width="5"/>' +
      '<text x="34" y="39" font-size="18" font-weight="900" fill="#E5383B" font-family="sans-serif">KA</text>' +
      '<path d="M34 108h74M34 118h74M34 128h48" stroke="#B9CCF5" stroke-width="3" stroke-linecap="round"/>' +
      BOSS[mood]() + '</g></svg>';
  }

  // ---- Sprüche ----
  var LINES = {
    ok: [
      'Stark. So viel Energie hab nicht mal ich – und ich BIN das Kraftwerk der Zelle.',
      'Richtig! Dein Zellkern liefert heute ab.',
      'Sauber. Der Golgi-Apparat verpackt das als Geschenk.',
      'Korrekt. Ich bin fast ein bisschen stolz. Fast.',
      'Boom. ATP-Level: maximal.',
      'Ja! Deine Ribosomen arbeiten auf Hochtouren.',
      'Richtig. Hätte ich nicht besser gekonnt. Okay, doch – aber knapp.',
      'Läuft bei dir wie Diffusion bei 40 Grad.',
      'Volltreffer. Das Lysosom hat heute nichts zu verdauen.',
      'Stimmt. Ich notiere: nicht völlig hoffnungslos.',
      'Genau so. Deine Lehrkraft würde nicken. Ich nicke auch. Sieht man nur nicht.',
      'Richtig! Und das ganz ohne aktiven Transport.',
      'Yes. Diese Antwort hat eine Doppelmembran aus purem Wissen.',
      'Korrekt. Wenn das so weitergeht, werde ich arbeitslos.'
    ],
    bad: [
      'Autsch. Das Lysosom verdaut gerade deine Antwort.',
      'Nope. Selbst ein Prokaryot hätte kurz gezögert.',
      'Falsch. Ich bin das Kraftwerk der Zelle – und du bist gerade der Stromausfall.',
      'Hm. Das war eher Plasmolyse fürs Gehirn.',
      'Leider nein. Tief durchatmen, Zellatmung an, weiter.',
      'Falsch abgebogen. Der Golgi-Apparat schickt das zurück an den Absender.',
      'Knapp daneben ist auch vorbei. Sagt meine innere Membran.',
      'Uff. Das wandert direkt ins Fehler-Training.',
      'Nein. Aber hübsch geraten.',
      'Das war nix. Zum Glück sieht es nur ein Mitochondrium.',
      'Falsch. Ich tu so, als hätte ich nichts gesehen. Hab ich aber.',
      'Daneben. Kein Drama – lieber hier als morgen auf dem Blatt.',
      'Nö. Deine Antwort ist gegen das Konzentrationsgefälle geschwommen – ohne ATP.'
    ],
    close: [
      'Fast perfekt. Den Tippfehler schenk ich dir.',
      'Zählt. Aber an der Rechtschreibung feilen wir noch.'
    ],
    combo3: ['Drei in Folge! Du wirst gerade warm.', 'Dreierserie. Meine Cristae vibrieren.'],
    combo5: ['Fünf am Stück! Das ist kein Glück mehr.', 'Fünferserie. Du diffundierst durchs Thema.'],
    combo10: ['ZEHN in Folge. Wer bist du und was hast du mit dem Stoff gemacht?'],
    done: [
      'Lektion geschafft. Ich produziere vor Freude ATP.',
      'Erledigt. Das war solide Zellarbeit.',
      'Durch! Der Golgi-Apparat verschickt gerade deine XP.'
    ],
    perfect: [
      'Null Fehler. Ich sag es ungern, aber: Respekt.',
      'Fehlerfrei! Bist du heimlich ein Biobuch?',
      'Perfekt. Ich bräuchte kurz eine Pause vor Rührung.'
    ],
    fail: [
      'Alle Herzen weg. Ich mag dich trotzdem. Nochmal?',
      'Herzen leer. Passiert den Besten – und heute eben dir.',
      'Game over. Kurz schütteln, Spickzettel lesen, zurückschlagen.'
    ],
    review0: [
      'Keine offenen Fehler. Entweder bist du genial oder du hast noch nichts gemacht.'
    ],
    reviewDone: [
      'Fehler ausgebügelt. Das Lysosom ist stolz auf dich.',
      'Wieder was repariert. So macht man das.'
    ],
    quit: [
      'Aufgeben ist auch eine Form von Diffusion – nur in die falsche Richtung.',
      'Wirklich abbrechen? Ich hatte gerade Spaß.'
    ],
    hello: [
      'Ich bin Mito, das Kraftwerk der Zelle. Du lernst, ich liefere die Energie. Und die Sprüche.'
    ],
    idle: [
      'Na, bereit? Die Organellen lernen sich nicht von allein.',
      'Fünf Minuten reichen. Okay, zehn. Aber fang an.',
      'Wusstest du, dass ich meine eigene DNA habe? Ich bin quasi mein eigener Chef.',
      'Ohne mich läuft in der Zelle gar nichts. In der KA übrigens auch nicht.',
      'Ich hab ATP vorbereitet. Du bringst die Antworten mit.'
    ],
    poke: [
      'Hey! Nicht anstupsen, ich produziere gerade ATP.',
      'Das kitzelt. Meine Cristae sind empfindlich.',
      'Noch einmal und ich schalte dir den Strom ab.',
      'Fun Fact: In einer einzigen Leberzelle stecken über tausend von mir.',
      'Fun Fact: Deine Mitochondrien-DNA hast du nur von deiner Mutter geerbt.',
      'Fun Fact: Ich war vermutlich mal ein freies Bakterium. Dann bin ich eingezogen.',
      'Fun Fact: Rote Blutkörperchen haben kein einziges Mitochondrium. Arme Dinger.',
      'Ja, ich bin echt. So echt wie eine Doppelmembran.',
      'Stupsen bringt keine XP. Lernen schon.'
    ],
    kaTomorrow: [
      'Morgen ist KA. Keine Panik – Panik verbraucht nur ATP.',
      'Morgen wird geschrieben. Heute wird trainiert. Ich bin dabei.'
    ],
    kaToday: [
      'Heute ist KA. Kurz aufwärmen, dann zeigst du es dem Blatt Papier.'
    ],
    kaSoon: [
      'Die KA kommt näher. Ich hab einen Plan. Er besteht aus dir und einem Spickzettel.',
      'Noch ein paar Tage bis zur KA. Jeden Tag eine Einheit und du bist durch.'
    ],
    kaOver: [
      'KA geschafft? Dann stoßen wir an. Ich nehme Glucose.',
      'Die KA ist durch. Bald kommen DNA und Mitose – ich warne nur schon mal.'
    ],
    streakWait: [
      'Dein Streak wartet. Ich auch. Ungeduldig.',
      'Heute schon gelernt? Nein. Ich sehe alles.'
    ],
    night: [
      'Es ist spät. Eine Runde noch, dann Schlaf – da wird Wissen gespeichert.',
      'Nachtschicht? Ich bin wach, ich bin ein Kraftwerk. Du solltest aber bald schlafen.'
    ],
    bossIntro: [
      'Da ist sie: die Klassenarbeit. Sieht gefährlich aus, besteht aber nur aus Papier.'
    ],
    bossWin: [
      'Besiegt! Das Blatt Papier hat nichts mehr zu melden.',
      'Boss am Boden. Morgen machst du das einfach nochmal.'
    ],
    bossMid: [
      'Bestanden, aber da geht mehr. Schau dir unten deine Schwachstellen an.'
    ],
    bossLose: [
      'Der Boss lacht noch. Nicht lange – ab ins Fehler-Training.',
      'Das war die Generalprobe. Die darf schiefgehen.'
    ],
    blitzGood: ['Blitzschnell. Meine Elektronen sind neidisch.', 'Neuer Rekord? Ich hab kurz geblinzelt und alles verpasst.'],
    blitzMeh: ['Solide. Aber ich hab schon Schnecken schneller diffundieren sehen.', 'Nicht schlecht. Nochmal – diesmal mit Koffein.'],
    levelUp: ['Level-up! Du bist jetzt offiziell höher entwickelt.', 'Aufgestiegen. Evolution in Echtzeit.'],
    sheet: [
      'Spicken erlaubt. Hier jedenfalls.',
      'Kurz und knackig. Lies es – ich frag dich gleich ab.'
    ],
    explainOk: ['Sauber erklärt. Operatoren beherrschst du also auch.', 'Das gibt volle Punktzahl. Sage ich. Als Mitochondrium.'],
    explainBad: ['Da fehlen noch Punkte. Lies die Musterlösung laut – das hilft wirklich.', 'Noch dünn. Merk dir die Stichpunkte, dann klappt es beim nächsten Mal.']
  };

  var last = {};
  function say(kind) {
    var pool = LINES[kind] || LINES.idle;
    if (pool.length === 1) return pool[0];
    var i;
    do { i = Math.floor(Math.random() * pool.length); } while (i === last[kind]);
    last[kind] = i;
    return pool[i];
  }

  window.Mito = { svg: svg, boss: boss, say: say };
})();
