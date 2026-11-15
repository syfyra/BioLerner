BIO.unit({
  id: 'mehrzeller', icon: '🧫', color: '#62D6D6',
  title: 'Vom Einzeller zum Mehrzeller',
  blurb: 'Arbeitsteilung, Gewebe und Zellstoffwechsel',
  sheet: {
    intro: 'Ein Einzeller kann alles allein. Im Mehrzeller spezialisieren sich die Zellen und teilen sich die Arbeit. Energie liefert in beiden Fällen der Zellstoffwechsel.',
    facts: [
      ['Einzeller', 'Lebewesen aus einer einzigen Zelle, die alle Lebensfunktionen erfüllt (z. B. Amöbe, Pantoffeltierchen, Bakterien).'],
      ['Zellkolonie', 'Lockerer Verband gleichartiger Zellen. Jede Zelle könnte auch allein überleben (z. B. Gonium).'],
      ['Mehrzeller', 'Viele spezialisierte Zellen mit Arbeitsteilung. Einzelne Zellen sind allein nicht lebensfähig.'],
      ['Volvox', 'Kugelalge als Übergangsform: Körperzellen und Fortpflanzungszellen teilen sich die Arbeit.'],
      ['Zelldifferenzierung', 'Zellen spezialisieren sich in Bau und Funktion auf bestimmte Aufgaben.'],
      ['Organisationsebenen', 'Zelle → Gewebe → Organ → Organsystem → Organismus'],
      ['Gewebe', 'Verband gleichartiger Zellen mit gleicher Aufgabe.'],
      ['Zellstoffwechsel', 'Alle chemischen Reaktionen in der Zelle. Baustoffwechsel baut körpereigene Stoffe auf, Energiestoffwechsel stellt Energie bereit.'],
      ['Fotosynthese', 'Chloroplast: Kohlenstoffdioxid + Wasser + Lichtenergie → Glucose + Sauerstoff'],
      ['Zellatmung', 'Mitochondrium: Glucose + Sauerstoff → Kohlenstoffdioxid + Wasser + Energie (ATP)'],
      ['autotroph / heterotroph', 'Autotroph: stellt energiereiche Stoffe selbst her (Pflanzen). Heterotroph: muss sie aufnehmen (Tiere, Pilze).']
    ],
    merk: [
      'Fotosynthese und Zellatmung sind Gegenspieler: Was die eine herstellt, verbraucht die andere.',
      'Auch Pflanzen atmen. Zellatmung läuft in allen Lebewesen ab.',
      'Warum viele kleine Zellen statt einer riesigen? Beim Wachsen nimmt das Volumen schneller zu als die Oberfläche – die Versorgung reicht dann nicht mehr.'
    ]
  },
  lessons: [
    {
      title: 'Einer für alles',
      qs: [
        { t: 'mc', q: 'Was ist ein Einzeller?',
          o: ['Ein Lebewesen aus einer Zelle, die alle Lebensfunktionen erfüllt', 'Eine einzelne Zelle aus einem Gewebe', 'Ein Lebewesen ohne Zellen', 'Eine Zelle ohne Stoffwechsel'], a: 0,
          w: 'Beim Einzeller übernimmt eine einzige Zelle Ernährung, Bewegung, Fortpflanzung und alles andere.' },
        { t: 'multi', q: 'Welche Lebewesen sind Einzeller?',
          o: ['Amöbe', 'Pantoffeltierchen', 'Bakterium', 'Regenwurm'], a: [0, 1, 2],
          w: 'Amöbe, Pantoffeltierchen und Bakterien bestehen aus einer Zelle. Ein Regenwurm ist ein Mehrzeller.' },
        { t: 'order', q: 'Ordne die Organisationsebenen von klein nach groß.',
          items: ['Zelle', 'Gewebe', 'Organ', 'Organsystem', 'Organismus'],
          w: 'Zellen bilden Gewebe, Gewebe bilden Organe, Organe arbeiten in Organsystemen zusammen.' },
        { t: 'tf', q: 'In einer Zellkolonie könnte jede Zelle auch allein überleben.', a: true,
          w: 'Das unterscheidet die Kolonie vom echten Mehrzeller: Dort sind die Zellen aufeinander angewiesen.' },
        { t: 'type', q: 'Wie nennt man die Spezialisierung von Zellen auf bestimmte Aufgaben?', accept: ['Zelldifferenzierung', 'Differenzierung', 'Spezialisierung', 'Zellspezialisierung'],
          w: 'Bei der Zelldifferenzierung entstehen Zellen mit unterschiedlichem Bau und unterschiedlicher Aufgabe.' },
        { t: 'mc', q: 'Was ist das Besondere an der Kugelalge Volvox?',
          o: ['Arbeitsteilung zwischen Körperzellen und Fortpflanzungszellen', 'Sie besteht aus nur einer Zelle', 'Alle Zellen sind völlig gleich', 'Sie hat keinen Stoffwechsel'], a: 0,
          w: 'Bei Volvox gibt es schon zwei Zelltypen. Sie gilt als Übergangsform zum Mehrzeller.' },
        { t: 'match', pairs: [['Einzeller', 'eine Zelle kann alles'], ['Zellkolonie', 'lockerer Verband gleicher Zellen'], ['Mehrzeller', 'spezialisierte Zellen, Arbeitsteilung'], ['Gewebe', 'gleichartige Zellen, gleiche Aufgabe']] },
        { t: 'order', q: 'Ordne die Entwicklungsreihe vom Einzeller zum Mehrzeller.',
          items: ['Einzelne Zelle, die alles kann', 'Kolonie aus wenigen gleichen Zellen', 'Kugel aus vielen Zellen mit erster Arbeitsteilung', 'Mehrzeller mit Geweben und Organen'] }
      ]
    },
    {
      title: 'Zellstoffwechsel',
      qs: [
        { t: 'mc', q: 'Was versteht man unter Zellstoffwechsel?',
          o: ['Alle chemischen Reaktionen, die in einer Zelle ablaufen', 'Nur die Aufnahme von Wasser', 'Die Teilung der Zelle', 'Den Austausch von Zellen im Körper'], a: 0,
          w: 'Zum Stoffwechsel gehören Aufbau, Umbau und Abbau von Stoffen – und die Bereitstellung von Energie.' },
        { t: 'cloze', q: 'Fotosynthese als Wortgleichung', text: 'Kohlenstoffdioxid + {0} + Lichtenergie → {1} + {2}',
          blanks: ['Wasser', 'Glucose', 'Sauerstoff'], any: [[1, 2]], extra: ['ATP', 'Stickstoff'],
          w: 'Die Fotosynthese baut aus energiearmen Stoffen mit Lichtenergie energiereiche Glucose auf. Sauerstoff wird frei.' },
        { t: 'cloze', q: 'Zellatmung als Wortgleichung', text: 'Glucose + {0} → {1} + Wasser + {2}',
          blanks: ['Sauerstoff', 'Kohlenstoffdioxid', 'Energie'], any: [[1, 2]], extra: ['Licht', 'Stärke'],
          w: 'Die Zellatmung ist die Umkehrung der Fotosynthese. Die frei werdende Energie wird als ATP nutzbar.' },
        { t: 'match', q: 'Wo läuft was ab?', pairs: [['Fotosynthese', 'Chloroplast'], ['Zellatmung', 'Mitochondrium'], ['Proteinherstellung', 'Ribosom'], ['Abbau von Abfall', 'Lysosom']] },
        { t: 'sort', q: 'Autotroph oder heterotroph?', buckets: ['autotroph', 'heterotroph'],
          items: [['Eiche', 0], ['Mensch', 1], ['Grünalge', 0], ['Champignon', 1], ['Amöbe', 1], ['Sonnenblume', 0]] },
        { t: 'type', q: 'Wie heißt der universelle Energieträger der Zelle? (Abkürzung)', accept: ['ATP', 'Adenosintriphosphat'],
          w: 'ATP liefert die Energie für fast alle Vorgänge in der Zelle, etwa für den aktiven Transport.' },
        { t: 'tf', q: 'Pflanzen betreiben nur Fotosynthese, aber keine Zellatmung.', a: false,
          w: 'Pflanzen atmen auch. Sie brauchen die Zellatmung, um die Energie der Glucose zu nutzen.' },
        { t: 'mc', q: 'Der Aufbau körpereigener Stoffe wie Proteine gehört zum …',
          o: ['Baustoffwechsel', 'Energiestoffwechsel', 'Membranfluss', 'Konzentrationsausgleich'], a: 0,
          w: 'Baustoffwechsel baut auf, Energiestoffwechsel stellt Energie bereit. Beide greifen ineinander.' }
      ]
    },
    {
      title: 'KA-Niveau',
      qs: [
        { t: 'mc', q: 'Warum können einzelne Zellen eines Mehrzellers meist nicht allein überleben?',
          o: ['Sie sind spezialisiert und auf die anderen Zellen angewiesen', 'Sie haben keinen Zellkern', 'Sie sind zu groß', 'Sie betreiben keinen Stoffwechsel'], a: 0,
          w: 'Spezialisierung hat ihren Preis: Eine Nervenzelle kann sich zum Beispiel nicht selbst ernähren.' },
        { t: 'tf', q: 'Zellatmung findet nur in Tierzellen statt.', a: false,
          w: 'Zellatmung läuft in den Zellen aller Lebewesen ab – auch in Pflanzen und Pilzen.' },
        { t: 'mc', q: 'Eine Zelle wächst. Was passiert mit dem Verhältnis von Oberfläche zu Volumen?',
          o: ['Das Volumen wächst schneller als die Oberfläche', 'Die Oberfläche wächst schneller als das Volumen', 'Beides wächst genau gleich', 'Die Oberfläche wird kleiner'], a: 0,
          w: 'Deshalb kann die Zellmembran eine sehr große Zelle nicht mehr ausreichend versorgen.' },
        { t: 'type', q: 'Wie nennt man Lebewesen, die energiereiche Stoffe selbst herstellen, z. B. durch Fotosynthese?', accept: ['autotroph', 'Autotrophe', 'autotrophe Lebewesen'],
          w: 'Autotroph heißt „sich selbst ernährend“. Tiere und Pilze sind heterotroph.' },
        { t: 'sort', q: 'Fotosynthese oder Zellatmung?', buckets: ['Fotosynthese', 'Zellatmung'],
          items: [['läuft im Chloroplasten ab', 0], ['läuft im Mitochondrium ab', 1], ['braucht Lichtenergie', 0], ['setzt Sauerstoff frei', 0], ['verbraucht Sauerstoff', 1], ['stellt ATP bereit', 1]] },
        { t: 'explain', op: 'Erkläre', q: 'Erkläre, welche Vorteile die Arbeitsteilung für Mehrzeller hat – und welchen Nachteil.',
          points: ['Spezialisierte Zellen erfüllen ihre Aufgabe besonders gut', 'Verschiedene Aufgaben können gleichzeitig erledigt werden', 'Der Organismus kann größer und leistungsfähiger werden', 'Nachteil: Die Zellen sind voneinander abhängig und allein nicht lebensfähig'],
          model: 'Im Mehrzeller sind die Zellen in Bau und Funktion spezialisiert. Dadurch erfüllt jede Zelle ihre Aufgabe besonders gut, und viele Aufgaben laufen gleichzeitig ab. Der Organismus kann so größer und leistungsfähiger werden als ein Einzeller. Der Nachteil: Die spezialisierten Zellen sind voneinander abhängig und allein nicht mehr lebensfähig.' },
        { t: 'explain', op: 'Erkläre', q: 'Erkläre, warum ein großes Lebewesen aus vielen kleinen Zellen besteht und nicht aus einer einzigen riesigen Zelle.',
          points: ['Der Stoffaustausch läuft über die Zelloberfläche (Zellmembran)', 'Beim Wachsen nimmt das Volumen stärker zu als die Oberfläche', 'Eine riesige Zelle hätte im Verhältnis zu wenig Oberfläche für ihre Versorgung', 'Viele kleine Zellen haben zusammen eine viel größere Oberfläche'],
          model: 'Alle Stoffe, die eine Zelle braucht oder abgibt, müssen durch die Zellmembran, also über die Oberfläche. Wächst eine Zelle, nimmt ihr Volumen stärker zu als ihre Oberfläche. Eine riesige Zelle hätte deshalb im Verhältnis zu ihrem Inhalt viel zu wenig Oberfläche, und die Wege im Inneren wären zu lang. Viele kleine Zellen haben zusammen eine viel größere Oberfläche und lassen sich gut versorgen.',
          tip: 'Stichwort Oberfläche-Volumen-Verhältnis.' },
        { t: 'explain', op: 'Vergleiche', q: 'Vergleiche Fotosynthese und Zellatmung.',
          points: ['Ort: Fotosynthese im Chloroplasten, Zellatmung im Mitochondrium', 'Fotosynthese: aus Kohlenstoffdioxid und Wasser entstehen Glucose und Sauerstoff', 'Zellatmung: aus Glucose und Sauerstoff entstehen Kohlenstoffdioxid und Wasser', 'Energie: Fotosynthese speichert Lichtenergie in Glucose, Zellatmung setzt Energie (ATP) frei', 'Vorkommen: Fotosynthese nur in grünen Pflanzenteilen und Algen, Zellatmung in allen Lebewesen'],
          model: 'Die Fotosynthese läuft in den Chloroplasten ab, die Zellatmung in den Mitochondrien. Bei der Fotosynthese entstehen aus Kohlenstoffdioxid und Wasser mit Hilfe von Lichtenergie Glucose und Sauerstoff, die Energie wird also in Glucose gespeichert. Bei der Zellatmung werden Glucose und Sauerstoff zu Kohlenstoffdioxid und Wasser umgesetzt, dabei wird Energie als ATP nutzbar. Die Vorgänge sind also gegenläufig. Fotosynthese betreiben nur grüne Pflanzenteile und Algen, Zellatmung alle Lebewesen.' }
      ]
    }
  ]
});
