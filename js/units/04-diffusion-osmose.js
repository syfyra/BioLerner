BIO.unit({
  id: 'osmose', icon: '💧', color: '#6CCBFF',
  title: 'Diffusion und Osmose',
  blurb: 'Teilchen wandern von allein – Wasser auch',
  sheet: {
    intro: 'Teilchen bewegen sich ständig. Daraus folgt alles Weitere: Diffusion gleicht Konzentrationen aus, Osmose ist Diffusion von Wasser durch eine Membran.',
    facts: [
      ['Brownsche Molekularbewegung', 'Ständige, zufällige Eigenbewegung kleinster Teilchen. Je wärmer, desto schneller.'],
      ['Diffusion', 'Teilchen verteilen sich von selbst vom Ort hoher zum Ort niedriger Konzentration, bis die Konzentration ausgeglichen ist. Kostet die Zelle keine Energie.'],
      ['Konzentrationsgefälle', 'Unterschied der Konzentration zwischen zwei Orten. Diffusion läuft immer „bergab“.'],
      ['semipermeabel', 'Halbdurchlässig: Wasser kommt durch, größere gelöste Teilchen (Zucker, Salz) nicht.'],
      ['Osmose', 'Diffusion von Wasser durch eine semipermeable Membran – zur Seite mit mehr gelösten Teilchen.'],
      ['Plasmolyse', 'Pflanzenzelle in konzentrierter Salz- oder Zuckerlösung: Wasser strömt aus der Vakuole, sie schrumpft, die Zellmembran löst sich von der Zellwand.'],
      ['Deplasmolyse', 'Umkehrung: In Wasser strömt Wasser wieder ein, die Zellmembran legt sich wieder an die Zellwand.'],
      ['Tierzelle', 'Hat keine Zellwand: In reinem Wasser schwillt sie an und platzt, in Salzlösung schrumpft sie.']
    ],
    merk: [
      'Wasser folgt dem Salz: Es strömt dorthin, wo mehr gelöste Teilchen sind.',
      'Diffusion schneller bei: höherer Temperatur, größerem Konzentrationsunterschied, kurzem Weg, großer Fläche.',
      'Nach dem Ausgleich bewegen sich die Teilchen weiter – nur gleich viele in beide Richtungen.',
      'Zusatzbegriffe: hypertonisch = außen höher konzentriert, hypotonisch = außen niedriger, isotonisch = gleich.'
    ],
    figs: [{ d: 'plasmo', state: 'turgid', cap: 'Zwiebelzelle in Wasser: prall', nolegend: true },
      { d: 'plasmo', state: 'plasmo', arrows: true, cap: 'In Salzlösung: Plasmolyse', nolegend: true }]
  },
  lessons: [
    {
      title: 'Teilchen in Bewegung',
      qs: [
        { t: 'mc', q: 'Was versteht man unter Diffusion?',
          o: ['Teilchen verteilen sich von selbst vom Ort hoher zum Ort niedriger Konzentration', 'Die Zelle pumpt Teilchen unter Energieaufwand', 'Wasser gefriert an einer Membran', 'Teilchen wandern zum Ort der höheren Konzentration'], a: 0,
          w: 'Diffusion läuft von allein ab – immer in Richtung der niedrigeren Konzentration, bis alles gleich verteilt ist.' },
        { t: 'tf', q: 'Für die Diffusion muss die Zelle Energie aufwenden.', a: false,
          w: 'Diffusion ist ein passiver Vorgang. Antrieb ist die Eigenbewegung der Teilchen.' },
        { t: 'type', q: 'Wie heißt die ständige, zufällige Eigenbewegung kleinster Teilchen?', accept: ['Brownsche Molekularbewegung', 'Brownsche Bewegung', 'Brown’sche Molekularbewegung'],
          w: 'Benannt nach Robert Brown, der die Zitterbewegung 1827 unter dem Mikroskop beobachtete.' },
        { t: 'mc', q: 'Ein Teebeutel färbt heißes Wasser viel schneller als kaltes. Warum?',
          o: ['Bei höherer Temperatur bewegen sich die Teilchen schneller', 'Heißes Wasser enthält weniger Teilchen', 'Der Teebeutel wird in heißem Wasser größer', 'In kaltem Wasser gibt es keine Diffusion'], a: 0,
          w: 'Wärme beschleunigt die Brownsche Molekularbewegung – und damit die Diffusion.' },
        { t: 'cloze', text: 'Bei der Diffusion wandern Teilchen vom Ort {0} Konzentration zum Ort {1} Konzentration, bis ein {2} erreicht ist.',
          blanks: ['hoher', 'niedriger', 'Konzentrationsausgleich'], extra: ['Energieverbrauch', 'gleicher'] },
        { t: 'tf', q: 'Nach dem Konzentrationsausgleich bewegen sich die Teilchen nicht mehr.', a: false,
          w: 'Die Teilchen bewegen sich immer weiter. Es wandern nur gleich viele hin wie her – man sieht keine Veränderung mehr.' },
        { t: 'multi', q: 'Was beschleunigt die Diffusion?',
          o: ['Höhere Temperatur', 'Größerer Konzentrationsunterschied', 'Kürzerer Weg', 'Größere, schwerere Teilchen'], a: [0, 1, 2],
          w: 'Große Teilchen diffundieren langsamer. Wärme, ein steiles Gefälle und kurze Wege machen die Diffusion schneller.' },
        { t: 'mc', q: 'Was bedeutet „semipermeabel“?',
          o: ['Halbdurchlässig: nur bestimmte Teilchen können hindurch', 'Vollständig undurchlässig', 'Für alle Teilchen durchlässig', 'Nur für Gase durchlässig'], a: 0,
          w: 'Eine semipermeable Membran lässt Wasser durch, größere gelöste Teilchen wie Zucker aber nicht.' }
      ]
    },
    {
      title: 'Osmose',
      qs: [
        { t: 'mc', q: 'Was ist Osmose?',
          o: ['Diffusion von Wasser durch eine semipermeable Membran', 'Transport von Salz mit Hilfe von Energie', 'Verdunstung von Wasser an der Zelloberfläche', 'Diffusion von Zucker durch eine Membran'], a: 0,
          w: 'Bei der Osmose wandert nur das Wasser. Die gelösten Teilchen kommen nicht durch die Membran.' },
        { t: 'mc', q: 'In welche Richtung strömt das Wasser bei der Osmose?',
          o: ['Zur Seite mit der höheren Konzentration gelöster Teilchen', 'Zur Seite mit der niedrigeren Konzentration gelöster Teilchen', 'Immer aus der Zelle hinaus', 'Immer nach unten'], a: 0,
          w: 'Wasser strömt dorthin, wo mehr gelöste Teilchen sind – dort ist die Wasserkonzentration niedriger.' },
        { t: 'tf', q: 'Bei der Osmose wandern die gelösten Zuckerteilchen durch die Membran.', a: false,
          w: 'Zucker ist zu groß für die semipermeable Membran. Nur das Wasser wandert.' },
        { t: 'type', q: 'Wie nennt man das Ablösen der Zellmembran von der Zellwand, wenn eine Pflanzenzelle Wasser verliert?', accept: ['Plasmolyse'],
          w: 'Bei der Plasmolyse schrumpft die Vakuole und die Zellmembran löst sich von der Zellwand.' },
        { t: 'mc', q: 'Eine Zwiebelzelle liegt in konzentrierter Salzlösung. Was passiert?',
          o: ['Wasser strömt aus der Vakuole nach außen, die Zellmembran löst sich von der Zellwand', 'Wasser strömt in die Vakuole, die Zelle platzt', 'Salz strömt in die Vakuole, die Zelle wird größer', 'Es passiert nichts, weil die Zellwand alles abhält'], a: 0,
          w: 'Außen sind mehr gelöste Teilchen. Wasser verlässt die Zelle durch Osmose: Plasmolyse.' },
        { t: 'mc', fig: { d: 'plasmo', state: 'plasmo' }, q: 'Diese Zwiebelzelle lag zehn Minuten in einer Lösung. Welcher Vorgang ist abgelaufen?',
          o: ['Plasmolyse', 'Deplasmolyse', 'Zellteilung', 'Fotosynthese'], a: 0,
          w: 'Die Vakuole ist geschrumpft, die Zellmembran hat sich von der Zellwand gelöst: Plasmolyse.' },
        { t: 'mc', q: 'Wie machst du eine Plasmolyse wieder rückgängig (Deplasmolyse)?',
          o: ['Die Zelle in Wasser legen', 'Noch mehr Salz dazugeben', 'Die Zelle abkühlen', 'Die Zelle ins Dunkle stellen'], a: 0,
          w: 'In Wasser ist die Konzentration außen niedriger. Wasser strömt wieder in die Vakuole ein.' },
        { t: 'cloze', text: 'Bei der Osmose diffundiert {0} durch eine {1} Membran. Es strömt zur Seite mit der {2} Konzentration gelöster Teilchen.',
          blanks: ['Wasser', 'semipermeable', 'höheren'], extra: ['Salz', 'niedrigeren', 'undurchlässige'] }
      ]
    },
    {
      title: 'Alltag und Versuche',
      qs: [
        { t: 'mc', q: 'Warum wird Salat schlaff, wenn er lange im salzigen Dressing liegt?',
          o: ['Wasser strömt durch Osmose aus den Zellen ins Dressing', 'Das Salz zerstört die Zellwände', 'Die Zellen nehmen zu viel Wasser auf', 'Das Öl verstopft die Zellmembranen'], a: 0,
          w: 'Außen sind mehr gelöste Teilchen als in den Zellen. Die Zellen verlieren Wasser und damit ihren Innendruck.' },
        { t: 'mc', q: 'Ein rotes Blutkörperchen kommt in destilliertes Wasser. Was passiert?',
          o: ['Wasser strömt ein, die Zelle schwillt an und platzt', 'Wasser strömt aus, die Zelle schrumpft', 'Nichts, die Zellwand schützt die Zelle', 'Die Zelle teilt sich'], a: 0,
          w: 'In der Zelle sind mehr gelöste Teilchen als im Wasser. Wasser strömt ein – ohne Zellwand platzt die Zelle.' },
        { t: 'mc', q: 'Warum platzen reife Kirschen nach langem Regen?',
          o: ['Wasser strömt in die zuckerreichen Zellen der Kirsche', 'Der Regen ist zu kalt', 'Zucker strömt aus der Kirsche heraus', 'Die Schale löst sich im Wasser auf'], a: 0,
          w: 'Im Fruchtfleisch ist viel Zucker gelöst. Regenwasser strömt osmotisch ein, bis die Schale reißt.' },
        { t: 'tf', q: 'Meerwasser löscht den Durst gut, weil es viel Wasser enthält.', a: false,
          w: 'Meerwasser ist salziger als das Innere der Körperzellen. Es entzieht den Zellen Wasser.' },
        { t: 'order', q: 'Ordne den Ablauf der Plasmolyse.',
          items: ['Zelle liegt in konzentrierter Salzlösung', 'Wasser strömt aus der Vakuole nach außen', 'Die Vakuole wird kleiner', 'Die Zellmembran löst sich von der Zellwand'] },
        { t: 'mc', q: 'Ein Kartoffelstäbchen liegt einen Tag in starkem Salzwasser. Wie verändert es sich?',
          o: ['Es wird kürzer, leichter und biegsam', 'Es wird länger, schwerer und hart', 'Es verändert sich nicht', 'Es löst sich auf'], a: 0,
          w: 'Die Kartoffelzellen geben durch Osmose Wasser an das Salzwasser ab und verlieren ihren Innendruck.' },
        { t: 'explain', op: 'Erkläre', q: 'Eine Zelle der roten Zwiebel liegt in konzentrierter Salzlösung. Erkläre, was du im Mikroskop beobachtest.',
          points: ['Außen ist die Konzentration gelöster Teilchen höher als in der Vakuole', 'Die Membran ist semipermeabel: Wasser kommt durch, Salz nicht', 'Wasser strömt durch Osmose aus der Vakuole nach außen', 'Die Vakuole schrumpft (die Farbe wird kräftiger)', 'Die Zellmembran löst sich von der Zellwand: Plasmolyse'],
          model: 'In der Salzlösung ist die Konzentration gelöster Teilchen höher als im Zellsaft der Vakuole. Die Membran ist semipermeabel: Wasser kann hindurch, die Salzteilchen nicht. Deshalb strömt Wasser durch Osmose aus der Vakuole nach außen. Die Vakuole schrumpft, ihr Farbstoff wirkt dunkler, und die Zellmembran löst sich von der Zellwand. Diesen Vorgang nennt man Plasmolyse. Die Zellwand behält ihre Form.',
          tip: 'Beim Erklären immer die Kette: Konzentrationsunterschied → semipermeable Membran → Wasserstrom → Folge.' },
        { t: 'explain', op: 'Vergleiche', q: 'Vergleiche Diffusion und Osmose.',
          points: ['Gemeinsam: beide laufen ohne Energieaufwand ab (passiv)', 'Gemeinsam: Antrieb ist die Eigenbewegung der Teilchen, Richtung folgt dem Konzentrationsgefälle', 'Diffusion: alle Teilchenarten können sich verteilen, keine Membran nötig', 'Osmose: nur Wasser wandert, durch eine semipermeable Membran', 'Osmose ist ein Sonderfall der Diffusion'],
          model: 'Beide Vorgänge laufen ohne Energieaufwand ab und beruhen auf der Eigenbewegung der Teilchen. In beiden Fällen gleicht sich ein Konzentrationsunterschied aus. Bei der Diffusion verteilen sich beliebige Teilchen frei im Raum. Bei der Osmose wandert nur das Wasser, und zwar durch eine semipermeable Membran, die die gelösten Teilchen zurückhält. Osmose ist also ein Sonderfall der Diffusion.' }
      ]
    }
  ]
});
