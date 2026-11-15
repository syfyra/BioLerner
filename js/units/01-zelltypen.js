BIO.unit({
  id: 'zelltypen', icon: '🌱', color: '#5FE0BD',
  title: 'Pflanzen- und Tierzelle',
  blurb: 'Wer hat was – und wozu?',
  sheet: {
    intro: 'Pflanzen- und Tierzellen haben fast alles gemeinsam. Drei Dinge besitzt nur die Pflanzenzelle.',
    facts: [
      ['Beide haben', 'Zellmembran, Zellplasma, Zellkern, Mitochondrien, ER, Golgi-Apparat, Ribosomen'],
      ['Nur Pflanzenzelle', 'Zellwand, Chloroplasten, große Zellsaftvakuole'],
      ['Zellwand', 'Besteht aus Cellulose. Gibt Form und Stabilität. Für Wasser und gelöste Stoffe durchlässig.'],
      ['Zellmembran', 'Grenzt die Zelle ab und kontrolliert, was hinein- und hinausgelangt.'],
      ['Chloroplast', 'Ort der Fotosynthese. Enthält den grünen Farbstoff Chlorophyll.'],
      ['Vakuole', 'Speichert Wasser und gelöste Stoffe (Zellsaft). Ihr Innendruck (Turgor) drückt gegen die Zellwand und hält die Pflanze straff.'],
      ['Zellkern', 'Enthält die Erbinformation (DNA) und steuert die Vorgänge in der Zelle.'],
      ['Mitochondrium', 'Zellatmung: stellt Energie bereit – in Pflanzen- UND Tierzellen.']
    ],
    merk: [
      'Die drei Pflanzen-Extras: Zell<b>w</b>and, <b>V</b>akuole, <b>C</b>hloroplasten.',
      'Auch Pflanzenzellen haben Mitochondrien. Fotosynthese ersetzt die Zellatmung nicht.',
      'Zellwand ≠ Zellmembran: Die Wand stützt, die Membran kontrolliert.'
    ],
    figs: [{ d: 'plantCell' }, { d: 'animalCell' }]
  },
  lessons: [
    {
      title: 'Wer hat was?',
      qs: [
        { t: 'mc', q: 'Welche Struktur besitzt eine Pflanzenzelle, eine Tierzelle aber nicht?',
          o: ['Zellwand', 'Zellmembran', 'Zellkern', 'Mitochondrien'], a: 0,
          w: 'Nur Pflanzenzellen haben eine Zellwand aus Cellulose. Zellmembran, Zellkern und Mitochondrien besitzen beide Zelltypen.' },
        { t: 'tf', q: 'Tierzellen besitzen Chloroplasten.', a: false,
          w: 'Chloroplasten gibt es nur in Pflanzenzellen und Algen. Tiere betreiben keine Fotosynthese.' },
        { t: 'match', pairs: [['Zellwand', 'gibt Form und Stabilität'], ['Chloroplast', 'Ort der Fotosynthese'], ['Vakuole', 'speichert Zellsaft'], ['Zellkern', 'enthält die Erbinformation']] },
        { t: 'multi', q: 'Welche Bestandteile kommen in Pflanzen- UND Tierzellen vor?',
          o: ['Zellkern', 'Mitochondrien', 'Zellmembran', 'Chloroplasten', 'Zellwand'], a: [0, 1, 2],
          w: 'Zellkern, Mitochondrien und Zellmembran haben beide. Chloroplasten und Zellwand gibt es nur bei Pflanzen.' },
        { t: 'tap', d: 'plantCell', target: 'chloro', q: 'Tippe auf einen Chloroplasten.',
          w: 'Chloroplasten sind die grünen, linsenförmigen Organellen. In ihnen läuft die Fotosynthese ab.' },
        { t: 'label', d: 'plantCell', target: 'vacuole',
          w: 'Die große Zellsaftvakuole nimmt oft den größten Teil der Pflanzenzelle ein.' },
        { t: 'type', q: 'Aus welchem Stoff besteht die Zellwand der Pflanzenzelle hauptsächlich?', accept: ['Cellulose', 'Zellulose'],
          w: 'Cellulose ist ein Kohlenhydrat aus langen Glucose-Ketten. Sie macht die Zellwand stabil.' },
        { t: 'cloze', text: 'Die Pflanzenzelle ist außen von einer festen {0} umgeben. Direkt darunter liegt die {1}. In den {2} findet die Fotosynthese statt.',
          blanks: ['Zellwand', 'Zellmembran', 'Chloroplasten'], extra: ['Vakuole', 'Ribosomen'],
          w: 'Von außen nach innen: erst die Zellwand, dann die Zellmembran.' }
      ]
    },
    {
      title: 'Genauer hingeschaut',
      qs: [
        { t: 'mc', q: 'Welche Aufgabe hat die Zellsaftvakuole?',
          o: ['Sie speichert Wasser und gelöste Stoffe und hält die Zelle prall', 'Sie stellt Proteine her', 'Sie betreibt Fotosynthese', 'Sie enthält die Erbinformation'], a: 0,
          w: 'Die Vakuole ist der Wasser- und Stoffspeicher der Pflanzenzelle. Ihr Innendruck stabilisiert die Zelle.' },
        { t: 'tf', q: 'Pflanzenzellen brauchen keine Mitochondrien, weil sie Chloroplasten haben.', a: false,
          w: 'Chloroplasten stellen Glucose her. Um die Energie daraus zu nutzen, brauchen auch Pflanzenzellen Mitochondrien (Zellatmung).' },
        { t: 'type', q: 'Wie heißt der grüne Farbstoff in den Chloroplasten?', accept: ['Chlorophyll', 'Blattgrün'],
          w: 'Chlorophyll fängt die Lichtenergie für die Fotosynthese ein.' },
        { t: 'label', d: 'animalCell', target: 'nucleus',
          w: 'Der Zellkern ist meist das größte Organell. Er enthält die DNA.' },
        { t: 'tap', d: 'animalCell', target: 'membrane', q: 'Tippe auf die Zellmembran.',
          w: 'Die Zellmembran ist die dünne äußere Grenze der Tierzelle. Eine Zellwand gibt es hier nicht.' },
        { t: 'sort', q: 'Nur Pflanzenzelle oder beide Zelltypen?', buckets: ['Nur Pflanzenzelle', 'Beide Zelltypen'],
          items: [['Zellwand', 0], ['Zellkern', 1], ['Chloroplast', 0], ['Mitochondrium', 1], ['große Zellsaftvakuole', 0], ['Zellmembran', 1], ['Ribosomen', 1]] },
        { t: 'mc', q: 'Was ist die Aufgabe der Zellmembran?',
          o: ['Sie grenzt die Zelle ab und kontrolliert den Stoffaustausch', 'Sie gibt der Zelle eine starre, feste Form', 'Sie speichert die Erbinformation', 'Sie stellt Energie bereit'], a: 0,
          w: 'Die Zellmembran entscheidet, welche Stoffe hinein- und hinausgelangen. Die starre Form kommt bei Pflanzen von der Zellwand.' },
        { t: 'mc', q: 'Du mikroskopierst ein Zwiebelhäutchen. Warum findest du in den Zellen keine Chloroplasten?',
          o: ['Die Zwiebel wächst unter der Erde – dort gibt es kein Licht', 'Zwiebelzellen sind Tierzellen', 'Chloroplasten sind im Lichtmikroskop grundsätzlich unsichtbar', 'Die Zellwand verdeckt die Chloroplasten'], a: 0,
          w: 'Chloroplasten werden nur in Pflanzenteilen gebildet, die Licht bekommen. Die Zwiebel liegt im Boden.' }
      ]
    },
    {
      title: 'KA-Niveau',
      qs: [
        { t: 'mc', q: 'Eine Zelle hat eine Zellwand, einen Zellkern und Mitochondrien, aber keine Chloroplasten. Was könnte es sein?',
          o: ['Eine Wurzelzelle einer Pflanze', 'Eine Muskelzelle eines Tiers', 'Ein rotes Blutkörperchen', 'Eine Hautzelle des Menschen'], a: 0,
          w: 'Zellwand heißt: keine Tierzelle. Wurzelzellen bekommen kein Licht und haben deshalb keine Chloroplasten.' },
        { t: 'tf', q: 'Die Zellwand kontrolliert, welche Stoffe in die Zelle gelangen.', a: false,
          w: 'Die Zellwand ist für Wasser und gelöste Stoffe durchlässig. Die Kontrolle übernimmt die Zellmembran.' },
        { t: 'order', q: 'Ordne die Strukturen der Pflanzenzelle von außen nach innen.',
          items: ['Zellwand', 'Zellmembran', 'Zellplasma', 'Zellsaftvakuole'],
          w: 'Die Zellwand liegt ganz außen, die Vakuole sitzt in der Mitte der Zelle.' },
        { t: 'type', q: 'Wie nennt man den Innendruck, mit dem die prall gefüllte Vakuole gegen die Zellwand drückt?',
          accept: ['Turgor', 'Turgordruck', 'Zellinnendruck', 'Zellsaftdruck'],
          w: 'Der Turgor hält krautige Pflanzen aufrecht. Fehlt Wasser, sinkt der Turgor und die Pflanze welkt.' },
        { t: 'mc', q: 'Warum platzt eine Pflanzenzelle in reinem Wasser nicht, ein rotes Blutkörperchen aber schon?',
          o: ['Die stabile Zellwand hält dem Innendruck stand', 'Pflanzenzellen nehmen kein Wasser auf', 'Die Vakuole pumpt das Wasser sofort wieder hinaus', 'Blutkörperchen haben eine dickere Zellmembran'], a: 0,
          w: 'Beide Zellen nehmen Wasser auf. Die Zellwand verhindert bei der Pflanzenzelle das Platzen, der Tierzelle fehlt sie.' },
        { t: 'tap', d: 'plantCell', target: 'nucleus', q: 'Tippe auf den Zellkern der Pflanzenzelle.',
          w: 'Der Zellkern liegt bei Pflanzenzellen meist am Rand, weil die Vakuole die Mitte einnimmt.' },
        { t: 'explain', op: 'Vergleiche', q: 'Vergleiche den Aufbau von Pflanzen- und Tierzelle.',
          points: ['Gemeinsam: Zellmembran, Zellplasma und Zellkern', 'Gemeinsam: Mitochondrien (dazu ER, Golgi-Apparat, Ribosomen)', 'Nur Pflanzenzelle: Zellwand aus Cellulose', 'Nur Pflanzenzelle: Chloroplasten', 'Nur Pflanzenzelle: große Zellsaftvakuole'],
          model: 'Beide Zelltypen besitzen Zellmembran, Zellplasma, Zellkern, Mitochondrien, ER, Golgi-Apparat und Ribosomen. Nur die Pflanzenzelle hat zusätzlich eine Zellwand aus Cellulose, Chloroplasten für die Fotosynthese und eine große Zellsaftvakuole.',
          tip: 'Bei „Vergleiche“ immer Gemeinsamkeiten UND Unterschiede nennen.' },
        { t: 'explain', op: 'Erkläre', q: 'Erkläre, warum Pflanzenzellen sowohl Chloroplasten als auch Mitochondrien brauchen.',
          points: ['Chloroplasten: Fotosynthese – mit Lichtenergie wird Glucose aufgebaut', 'Mitochondrien: Zellatmung – aus Glucose wird nutzbare Energie (ATP) gewonnen', 'Die Fotosynthese liefert nur den Energieträger, erst die Zellatmung macht die Energie für die Zelle nutzbar', 'Zellen ohne Licht (Wurzel, nachts) sind ganz auf die Zellatmung angewiesen'],
          model: 'In den Chloroplasten wird bei der Fotosynthese mit Lichtenergie Glucose aufgebaut. Glucose ist aber nur ein Energiespeicher. In den Mitochondrien wird sie bei der Zellatmung abgebaut, dabei wird Energie in Form von ATP für die Zelle nutzbar. Zellen ohne Licht, etwa in der Wurzel oder nachts, können gar keine Fotosynthese betreiben und brauchen die Zellatmung erst recht.' }
      ]
    }
  ]
});
