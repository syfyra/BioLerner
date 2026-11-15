BIO.unit({
  id: 'prokaryoten', icon: '🦠', color: '#FFC83D',
  title: 'Pro- und Eukaryoten',
  blurb: 'Mit Kern oder ohne – der Feinbau im Vergleich',
  sheet: {
    intro: 'Prokaryoten (Bakterien) haben keinen Zellkern. Eukaryoten (Tiere, Pflanzen, Pilze, viele Einzeller) haben einen echten Zellkern und Organellen mit Membran.',
    facts: [
      ['Prokaryot', '„pro“ = vor, „karyon“ = Kern. Zelle ohne Zellkern, z. B. Bakterien. Etwa 1–10 µm groß.'],
      ['Eukaryot', '„eu“ = echt. Zelle mit Zellkern und membranumgrenzten Organellen. Etwa 10–100 µm groß.'],
      ['Bakterienchromosom', 'Ringförmige DNA, die frei im Zellplasma liegt.'],
      ['Plasmid', 'Kleiner zusätzlicher DNA-Ring. Trägt Zusatzgene (z. B. Antibiotika-Resistenz) und kann an andere Bakterien weitergegeben werden.'],
      ['Flagellum', 'Geißel. Dient der Fortbewegung.'],
      ['Ribosomen', 'Haben Pro- UND Eukaryoten. Ohne Ribosomen keine Proteine.'],
      ['Fehlt bei Prokaryoten', 'Zellkern, Mitochondrien, ER, Golgi-Apparat, Chloroplasten, Lysosomen'],
      ['Gemeinsam', 'Zellmembran, Zellplasma, DNA, Ribosomen']
    ],
    merk: [
      'Kein Kern heißt nicht keine DNA: Sie schwimmt als Ring frei im Zellplasma.',
      'Zellwand ist kein Pflanzen-Monopol: Auch Bakterien und Pilze haben eine.',
      'Alles, was eine eigene Membran hat (Kern, Mitochondrien, ER, Golgi), gibt es nur bei Eukaryoten.'
    ],
    figs: [{ d: 'bacterium' }]
  },
  lessons: [
    {
      title: 'Kern oder kein Kern',
      qs: [
        { t: 'mc', q: 'Was ist der wichtigste Unterschied zwischen Pro- und Eukaryoten?',
          o: ['Prokaryoten haben keinen Zellkern', 'Prokaryoten haben keine DNA', 'Prokaryoten haben keine Zellmembran', 'Eukaryoten haben keine Ribosomen'], a: 0,
          w: 'Prokaryoten besitzen DNA, aber keinen Zellkern. Die DNA liegt frei im Zellplasma.' },
        { t: 'tf', q: 'Bakterien sind Prokaryoten.', a: true,
          w: 'Bakterien sind die bekanntesten Prokaryoten: klein, ohne Zellkern, ohne Organellen mit Membran.' },
        { t: 'sort', q: 'Prokaryot oder Eukaryot?', buckets: ['Prokaryot', 'Eukaryot'],
          items: [['Darmbakterium', 0], ['Pflanzenzelle', 1], ['Tierzelle', 1], ['Hefepilz', 1], ['Amöbe', 1], ['Milchsäurebakterium', 0]] },
        { t: 'type', q: 'Wie heißt der kleine DNA-Ring, den viele Bakterien zusätzlich zum Bakterienchromosom besitzen?', accept: ['Plasmid', 'Plasmide'],
          w: 'Plasmide tragen Zusatzgene, zum Beispiel für Antibiotika-Resistenz.' },
        { t: 'tap', d: 'bacterium', target: 'flagellum', q: 'Tippe auf das Flagellum (die Geißel).',
          w: 'Das Flagellum ist der lange, bewegliche Faden. Damit bewegt sich das Bakterium fort.' },
        { t: 'mc', q: 'Wo befindet sich die DNA einer Bakterienzelle?',
          o: ['Frei im Zellplasma', 'Im Zellkern', 'In den Mitochondrien', 'In der Zellwand'], a: 0,
          w: 'Bakterien haben keinen Zellkern. Ihr ringförmiges Chromosom liegt frei im Zellplasma.' },
        { t: 'label', d: 'bacterium', target: 'plasmid', not: ['pili'],
          w: 'Plasmide sind die kleinen DNA-Ringe neben dem großen Bakterienchromosom.' },
        { t: 'match', pairs: [['Flagellum', 'Fortbewegung'], ['Plasmid', 'kleiner DNA-Ring mit Zusatzgenen'], ['Ribosom', 'stellt Proteine her'], ['Zellwand', 'Schutz und Form']] }
      ]
    },
    {
      title: 'Feinbau der Zellen',
      qs: [
        { t: 'multi', q: 'Was besitzt eine Bakterienzelle?',
          o: ['Ribosomen', 'Zellmembran', 'Zellwand', 'Mitochondrien', 'Zellkern'], a: [0, 1, 2],
          w: 'Bakterien haben Ribosomen, Zellmembran und Zellwand. Mitochondrien und Zellkern fehlen ihnen.' },
        { t: 'tf', q: 'Prokaryoten besitzen keine Ribosomen.', a: false,
          w: 'Jede Zelle braucht Ribosomen, um Proteine herzustellen – auch Bakterien.' },
        { t: 'mc', q: 'Wie groß sind Bakterienzellen im Vergleich zu Tier- und Pflanzenzellen?',
          o: ['Etwa zehnmal kleiner', 'Etwa gleich groß', 'Etwa zehnmal größer', 'Etwa doppelt so groß'], a: 0,
          w: 'Prokaryoten messen etwa 1–10 µm, Eukaryotenzellen etwa 10–100 µm.' },
        { t: 'cloze', text: 'Prokaryoten besitzen keinen {0}. Ihre DNA liegt als ringförmiges {1} frei im {2}. Zusätzliche kleine DNA-Ringe heißen {3}.',
          blanks: ['Zellkern', 'Bakterienchromosom', 'Zellplasma', 'Plasmide'], extra: ['Golgi-Apparat', 'Lysosomen'] },
        { t: 'mc', q: 'Warum sind Plasmide für Bakterien nützlich?',
          o: ['Sie tragen Zusatzgene, z. B. für Resistenz gegen Antibiotika', 'Sie liefern die Energie für die Zelle', 'Sie bewegen das Bakterium vorwärts', 'Sie verdauen Nahrungsteilchen'], a: 0,
          w: 'Plasmide können zwischen Bakterien ausgetauscht werden. So verbreiten sich Resistenzen.' },
        { t: 'label', d: 'bacterium', target: 'nucleoid', not: ['pili'],
          w: 'Das Bakterienchromosom ist die große, verknäulte, ringförmige DNA in der Zellmitte.' },
        { t: 'tf', q: 'Eukaryotische Zellen sind durch Membranen in viele Reaktionsräume gegliedert.', a: true,
          w: 'Das nennt man Kompartimentierung. Prokaryoten haben solche Räume nicht.' },
        { t: 'mc', q: 'Was bedeutet der Wortteil „eu“ in „Eukaryot“?',
          o: ['echt', 'vor', 'ohne', 'klein'], a: 0,
          w: 'Eukaryoten haben einen „echten“ Kern. „Pro“ bedeutet „vor“ – Prokaryoten gab es vor den Zellen mit Kern.' }
      ]
    },
    {
      title: 'KA-Niveau',
      qs: [
        { t: 'mc', q: 'Im Elektronenmikroskop siehst du eine Zelle mit Zellwand, Ribosomen und ringförmiger DNA, aber ohne Zellkern. Was ist es?',
          o: ['Ein Bakterium', 'Eine Pflanzenzelle', 'Eine Tierzelle', 'Eine Pilzzelle'], a: 0,
          w: 'Kein Zellkern und ringförmige DNA: Das ist ein Prokaryot. Pflanzen, Tiere und Pilze sind Eukaryoten.' },
        { t: 'tf', q: 'Jede Zelle mit Zellwand ist eine Pflanzenzelle.', a: false,
          w: 'Auch Bakterien und Pilze haben eine Zellwand. Sie besteht dort nur aus anderen Stoffen als bei Pflanzen.' },
        { t: 'type', q: 'Wie lautet der Fachbegriff für Lebewesen ohne echten Zellkern?', accept: ['Prokaryoten', 'Prokaryot', 'Prokaryonten', 'Prokaryont', 'Procyte'],
          w: 'Prokaryoten sind Lebewesen ohne Zellkern, zum Beispiel Bakterien.' },
        { t: 'sort', q: 'Nur bei Eukaryoten – oder bei Pro- und Eukaryoten?', buckets: ['Nur Eukaryoten', 'Pro- und Eukaryoten'],
          items: [['Zellkern', 0], ['Mitochondrium', 0], ['Ribosomen', 1], ['Zellmembran', 1], ['Golgi-Apparat', 0], ['DNA', 1], ['ER', 0], ['Zellplasma', 1]] },
        { t: 'tap', d: 'bacterium', target: 'nucleoid', q: 'Tippe auf das Bakterienchromosom.',
          w: 'Das Bakterienchromosom liegt als großer, verknäulter Ring in der Mitte der Zelle.' },
        { t: 'mc', q: 'Welche Aufgabe hat das Flagellum?',
          o: ['Fortbewegung', 'Speicherung der Erbinformation', 'Herstellung von Proteinen', 'Abbau von Abfallstoffen'], a: 0,
          w: 'Das Flagellum dreht sich wie ein Propeller und treibt das Bakterium an.' },
        { t: 'explain', op: 'Vergleiche', q: 'Vergleiche den Aufbau einer Prokaryoten- und einer Eukaryotenzelle.',
          points: ['Eukaryoten haben einen Zellkern, Prokaryoten nicht', 'Bei Prokaryoten liegt die DNA ringförmig frei im Zellplasma (dazu oft Plasmide)', 'Organellen mit Membran (Mitochondrien, ER, Golgi-Apparat) gibt es nur bei Eukaryoten', 'Prokaryoten sind viel kleiner (etwa 1–10 µm statt 10–100 µm)', 'Gemeinsam: Zellmembran, Zellplasma, Ribosomen, DNA'],
          model: 'Beide Zelltypen besitzen Zellmembran, Zellplasma, Ribosomen und DNA. Eukaryoten haben einen Zellkern, in dem die DNA liegt, und Organellen mit Membran wie Mitochondrien, ER und Golgi-Apparat. Prokaryoten fehlen Zellkern und diese Organellen: Ihre ringförmige DNA liegt frei im Zellplasma, oft kommen Plasmide dazu. Außerdem sind Prokaryoten etwa zehnmal kleiner.',
          tip: 'Eine Tabelle mit den Zeilen Zellkern, DNA, Organellen, Größe hilft beim Sortieren.' }
      ]
    }
  ]
});
