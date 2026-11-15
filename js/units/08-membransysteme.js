BIO.unit({
  id: 'membransysteme', icon: '📦', color: '#FFB25C',
  title: 'Membransysteme und Oberflächen',
  blurb: 'Vesikel-Verkehr und der Trick mit der Faltung',
  sheet: {
    intro: 'Die Membranen der Zelle arbeiten zusammen und tauschen über Vesikel Material aus. Und: Wo viel passieren soll, wird die Membranfläche durch Faltung vergrößert.',
    facts: [
      ['Inneres Membransystem', 'Kernhülle, ER, Golgi-Apparat, Vesikel, Lysosomen und Zellmembran stehen miteinander in Verbindung.'],
      ['Membranfluss', 'Vesikel schnüren sich von einer Membran ab und verschmelzen mit einer anderen. So wandern Stoffe und Membranmaterial durch die Zelle.'],
      ['Exocytose', 'Abgabe von Stoffen: Ein Vesikel verschmilzt mit der Zellmembran und entleert sich nach außen.'],
      ['Endocytose', 'Aufnahme von Stoffen: Die Zellmembran stülpt sich ein und schnürt ein Vesikel nach innen ab.'],
      ['Doppelmembran', 'Zellkern, Mitochondrium, Chloroplast'],
      ['Einfache Membran', 'ER, Golgi-Apparat, Lysosom, Vakuole, Vesikel'],
      ['Oberflächenvergrößerung', 'Durch Faltung, Stapelung oder Ausstülpung passt mehr Membranfläche in denselben Raum. Mehr Fläche = mehr Stoffaustausch und mehr Platz für Enzyme.'],
      ['Beispiele', 'Gefaltete innere Mitochondrienmembran, Membranstapel im Chloroplasten, Mikrovilli der Darmzellen, Lungenbläschen, Wurzelhaare']
    ],
    merk: [
      'Exo = raus (wie Exit). Endo = rein.',
      'Viel Fläche auf wenig Raum: gefaltet schlägt glatt.',
      'Struktur und Funktion gehören zusammen – der Bau verrät die Aufgabe.'
    ],
    figs: [{ d: 'animalCell' }]
  },
  lessons: [
    {
      title: 'Membranen im Team',
      qs: [
        { t: 'multi', q: 'Welche Strukturen gehören zum inneren Membransystem der Zelle?',
          o: ['ER', 'Golgi-Apparat', 'Kernhülle', 'Ribosom'], a: [0, 1, 2],
          w: 'Ribosomen haben keine Membran. ER, Golgi-Apparat und Kernhülle sind über Vesikel und direkte Verbindungen verknüpft.' },
        { t: 'mc', q: 'Wie tauschen ER, Golgi-Apparat und Zellmembran Stoffe aus?',
          o: ['Über Vesikel, die sich abschnüren und mit anderen Membranen verschmelzen', 'Über feste Röhren aus Cellulose', 'Gar nicht, sie arbeiten getrennt', 'Über die Ribosomen'], a: 0,
          w: 'Diesen Vesikel-Verkehr zwischen den Membranen nennt man Membranfluss.' },
        { t: 'match', pairs: [['Exocytose', 'Abgabe von Stoffen nach außen'], ['Endocytose', 'Aufnahme durch Einstülpen der Membran'], ['Vesikel', 'Membranbläschen für den Transport'], ['Kernhülle', 'Doppelmembran mit Poren']] },
        { t: 'tf', q: 'Das raue ER steht mit der Kernhülle in Verbindung.', a: true,
          w: 'Die äußere Membran der Kernhülle geht direkt in das ER über.' },
        { t: 'sort', q: 'Wie viele Membranen umgeben die Struktur?', buckets: ['Doppelmembran', 'einfache Membran', 'keine Membran'],
          items: [['Zellkern', 0], ['Mitochondrium', 0], ['Chloroplast', 0], ['Lysosom', 1], ['Golgi-Apparat', 1], ['Vakuole', 1], ['Ribosom', 2]] },
        { t: 'type', q: 'Wie heißt die Abgabe von Stoffen, bei der ein Vesikel mit der Zellmembran verschmilzt?', accept: ['Exocytose', 'Exozytose'],
          w: 'Bei der Exocytose entleert sich das Vesikel nach außen. „Exo“ heißt außen.' },
        { t: 'mc', q: 'Eine Fresszelle umschließt ein Bakterium mit ihrer Zellmembran und nimmt es in einem Vesikel auf. Wie heißt der Vorgang?',
          o: ['Endocytose', 'Exocytose', 'Osmose', 'Plasmolyse'], a: 0,
          w: 'Aufnahme durch Einstülpen der Membran ist Endocytose.' },
        { t: 'order', q: 'Eine Fresszelle beseitigt ein Bakterium. Ordne die Schritte.',
          items: ['Die Zellmembran stülpt sich um das Bakterium ein', 'Ein Vesikel schnürt sich nach innen ab', 'Das Vesikel verschmilzt mit einem Lysosom', 'Verdauungsenzyme zerlegen das Bakterium'] }
      ]
    },
    {
      title: 'Oberflächenvergrößerung',
      qs: [
        { t: 'mc', q: 'Welchen Vorteil hat eine vergrößerte Membranoberfläche?',
          o: ['Mehr Fläche für Stoffaustausch und Reaktionen im selben Raum', 'Die Zelle wird schwerer', 'Die Membran wird dicker', 'Es können weniger Stoffe hindurch'], a: 0,
          w: 'Mehr Fläche bedeutet mehr Transportproteine und Enzyme – und damit mehr Umsatz pro Zeit.' },
        { t: 'multi', q: 'Welche Beispiele zeigen das Prinzip der Oberflächenvergrößerung?',
          o: ['Gefaltete innere Mitochondrienmembran', 'Mikrovilli der Darmzellen', 'Lungenbläschen', 'Die glatte Kugelform einer Fettzelle'], a: [0, 1, 2],
          w: 'Faltungen, Ausstülpungen und viele kleine Bläschen vergrößern die Fläche. Eine glatte Kugel hat die kleinstmögliche Oberfläche.' },
        { t: 'mc', q: 'Die innere Mitochondrienmembran ist stark gefaltet. Was bringt das der Zelle?',
          o: ['Mehr Platz für die Enzyme der Zellatmung, also mehr Energie', 'Besseren Schutz der DNA', 'Weniger Sauerstoffbedarf', 'Eine festere Form'], a: 0,
          w: 'Die Enzyme der Zellatmung sitzen in der inneren Membran. Mehr Fläche bedeutet mehr ATP.' },
        { t: 'tf', q: 'Je größer die Membranoberfläche, desto mehr Stoffe können pro Zeit ausgetauscht werden.', a: true,
          w: 'Das gilt für die Zelle genauso wie für Lunge, Darm und Wurzel.' },
        { t: 'mc', q: 'Was sind Mikrovilli?',
          o: ['Fingerförmige Ausstülpungen der Zellmembran, z. B. bei Darmzellen', 'Kleine Vesikel im Zellplasma', 'Poren in der Kernhülle', 'Falten der Zellwand'], a: 0,
          w: 'Mikrovilli vergrößern die Oberfläche der Darmzellen um ein Vielfaches – für die Aufnahme von Nährstoffen.' },
        { t: 'mc', q: 'Ein Würfel wird in acht gleich große kleine Würfel zerteilt. Was passiert mit der gesamten Oberfläche?',
          o: ['Sie verdoppelt sich, das Volumen bleibt gleich', 'Sie halbiert sich', 'Sie bleibt gleich', 'Oberfläche und Volumen verdoppeln sich'], a: 0,
          w: 'Beim Zerteilen entstehen neue Außenflächen. Viele kleine Einheiten haben zusammen mehr Oberfläche als eine große.' },
        { t: 'cloze', text: 'Durch {0} der Membran wird die Oberfläche {1}. So passen mehr {2} und Transportproteine in die Membran.',
          blanks: ['Faltung', 'vergrößert', 'Enzyme'], extra: ['Auflösung', 'verkleinert', 'Zellkerne'] },
        { t: 'tf', q: 'Wurzelhaare vergrößern die Oberfläche der Wurzel und erleichtern so die Wasseraufnahme.', a: true,
          w: 'Viele feine Wurzelhaare haben zusammen eine riesige Oberfläche.' }
      ]
    },
    {
      title: 'KA-Niveau',
      qs: [
        { t: 'tap', d: 'animalCell', target: 'golgi', q: 'Tippe auf den Golgi-Apparat.',
          w: 'Der Golgi-Apparat ist der Stapel flacher Membransäckchen. Von ihm schnüren sich Vesikel ab.' },
        { t: 'mc', q: 'Bei der Exocytose verschmilzt ein Vesikel mit der Zellmembran. Was folgt daraus für die Zellmembran?',
          o: ['Sie erhält neues Membranmaterial', 'Sie verliert Membranmaterial', 'Sie wird durchlöchert', 'Sie wird hydrophil'], a: 0,
          w: 'Die Vesikelmembran wird Teil der Zellmembran. Auch das gehört zum Membranfluss.' },
        { t: 'tf', q: 'Endocytose und Exocytose sind möglich, weil Biomembranen beweglich und verformbar sind.', a: true,
          w: 'Eine starre Hülle könnte sich weder einstülpen noch mit Vesikeln verschmelzen. Das passt zum Flüssig-Mosaik-Modell.' },
        { t: 'mc', q: 'Im Chloroplasten sind die inneren Membranen zu Stapeln geschichtet. Welches Prinzip steckt dahinter?',
          o: ['Oberflächenvergrößerung', 'Kompartimentierung der DNA', 'Schutz vor Licht', 'Aktiver Transport'], a: 0,
          w: 'Viele gestapelte Membranen bieten viel Fläche für den grünen Farbstoff und die Fotosynthese.' },
        { t: 'label', d: 'animalCell', target: 'vesicle',
          w: 'Vesikel sind kleine Membranbläschen. Sie pendeln zwischen ER, Golgi-Apparat und Zellmembran.' },
        { t: 'explain', op: 'Erkläre', q: 'Erkläre das Prinzip der Oberflächenvergrößerung an einem Beispiel aus der Zelle.',
          points: ['Durch Faltung, Stapelung oder Ausstülpung entsteht mehr Membranfläche im selben Raum', 'Beispiel genannt (z. B. gefaltete innere Mitochondrienmembran)', 'In der größeren Fläche haben mehr Enzyme oder Transportproteine Platz', 'Dadurch läuft mehr Stoffaustausch bzw. Stoffumsatz pro Zeit ab (z. B. mehr ATP)'],
          model: 'Durch Faltung, Stapelung oder Ausstülpung von Membranen entsteht auf engem Raum eine große Oberfläche. Ein Beispiel ist die stark gefaltete innere Membran der Mitochondrien. In dieser großen Fläche haben viele Enzyme der Zellatmung Platz. Deshalb kann pro Zeit mehr Energie in Form von ATP bereitgestellt werden als bei einer glatten Membran.',
          tip: 'Immer Struktur (gefaltet) UND Funktion (mehr Umsatz) nennen.' },
        { t: 'explain', op: 'Beschreibe', q: 'Beschreibe die Vorgänge Endocytose und Exocytose.',
          points: ['Endocytose: Aufnahme von Stoffen in die Zelle', 'Die Zellmembran stülpt sich ein und schnürt ein Vesikel nach innen ab', 'Exocytose: Abgabe von Stoffen aus der Zelle', 'Ein Vesikel verschmilzt mit der Zellmembran und gibt den Inhalt nach außen ab'],
          model: 'Bei der Endocytose nimmt die Zelle Stoffe auf: Die Zellmembran stülpt sich um die Stoffe ein und schnürt ein Vesikel nach innen ab. Bei der Exocytose gibt die Zelle Stoffe ab: Ein Vesikel wandert zur Zellmembran, verschmilzt mit ihr und entleert seinen Inhalt nach außen.' }
      ]
    }
  ]
});
