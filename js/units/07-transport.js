BIO.unit({
  id: 'transport', icon: '🚪', color: '#B4E36A',
  title: 'Transport an Biomembranen',
  blurb: 'Passiv bergab, aktiv bergauf',
  sheet: {
    intro: 'Stoffe gelangen auf zwei Arten durch die Membran: passiv (ohne Energie, mit dem Konzentrationsgefälle) oder aktiv (mit Energie, gegen das Gefälle).',
    facts: [
      ['Passiver Transport', 'Ohne Energieaufwand. Teilchen wandern mit dem Konzentrationsgefälle: von viel nach wenig.'],
      ['Einfache Diffusion', 'Kleine, unpolare Teilchen (Sauerstoff, Kohlenstoffdioxid) wandern direkt durch die Lipidschicht.'],
      ['Erleichterte Diffusion', 'Passiv, aber mit Hilfe von Transportproteinen: Kanalproteine oder Carrier.'],
      ['Kanalprotein', 'Tunnel durch die Membran für ganz bestimmte Teilchen.'],
      ['Ionenkanal', 'Kanalprotein für geladene Teilchen (Ionen) wie Natrium oder Kalium. Lässt nur bestimmte Ionen durch, kann oft geöffnet und geschlossen werden.'],
      ['Carrier', 'Trägerprotein. Bindet ein Teilchen, ändert seine Form und gibt es auf der anderen Seite ab.'],
      ['Aktiver Transport', 'Gegen das Konzentrationsgefälle: von wenig nach viel. Braucht Energie in Form von ATP. Läuft über Carrier („Pumpen“).'],
      ['Natrium-Kalium-Pumpe', 'Bekanntestes Beispiel für aktiven Transport: pumpt Natrium-Ionen hinaus und Kalium-Ionen hinein.']
    ],
    merk: [
      'Passiv = Ball rollt den Berg hinunter. Aktiv = Ball wird den Berg hinaufgeschoben.',
      'Aktiv erkennst du an zwei Dingen: gegen das Gefälle und ATP.',
      'Ionen sind geladen und hydrophil. Durch das hydrophobe Membraninnere kommen sie nur über Ionenkanäle oder Pumpen.',
      'Kein ATP (z. B. Mitochondrien fallen aus) – kein aktiver Transport.'
    ],
    figs: [{ d: 'membrane' }]
  },
  lessons: [
    {
      title: 'Passiver Transport',
      qs: [
        { t: 'mc', q: 'Was kennzeichnet den passiven Transport?',
          o: ['Kein Energieaufwand, Transport mit dem Konzentrationsgefälle', 'Energieaufwand, Transport gegen das Konzentrationsgefälle', 'Er funktioniert nur bei Wasser', 'Er braucht immer ATP'], a: 0,
          w: 'Passiv heißt: Die Teilchen wandern von selbst von der hohen zur niedrigen Konzentration.' },
        { t: 'type', q: 'Wie heißt ein Tunnelprotein, durch das geladene Teilchen wie Natrium die Membran durchqueren?', accept: ['Ionenkanal', 'Ionenkanäle'],
          w: 'Ionenkanäle sind Kanalproteine, die jeweils nur bestimmte Ionen durchlassen.' },
        { t: 'tf', q: 'Ionen können problemlos direkt durch die Lipid-Doppelschicht diffundieren.', a: false,
          w: 'Ionen sind geladen und hydrophil. Das hydrophobe Innere der Membran hält sie auf.' },
        { t: 'mc', q: 'Welcher Stoff gelangt durch einfache Diffusion direkt durch die Lipidschicht?',
          o: ['Sauerstoff', 'Natrium-Ionen', 'Glucose', 'Proteine'], a: 0,
          w: 'Sauerstoff ist klein und unpolar. Er braucht kein Transportprotein.' },
        { t: 'tap', d: 'membrane', target: 'channel', q: 'Tippe auf das Kanalprotein.',
          w: 'Das Kanalprotein durchspannt die Membran und hat in der Mitte einen Tunnel.' },
        { t: 'mc', q: 'Was ist „erleichterte Diffusion“?',
          o: ['Passiver Transport mit Hilfe von Kanal- oder Carrierproteinen', 'Aktiver Transport mit ATP', 'Diffusion bei hoher Temperatur', 'Transport in Vesikeln'], a: 0,
          w: 'Die Teilchen folgen dem Konzentrationsgefälle, brauchen aber ein Protein als „Tür“.' },
        { t: 'sort', q: 'Passiver oder aktiver Transport?', buckets: ['passiv', 'aktiv'],
          items: [['Einfache Diffusion von Sauerstoff', 0], ['Osmose', 0], ['Ionen strömen durch einen Ionenkanal', 0], ['Natrium-Kalium-Pumpe', 1], ['Transport gegen das Konzentrationsgefälle', 1], ['Erleichterte Diffusion durch einen Carrier', 0]] },
        { t: 'cloze', text: 'Beim passiven Transport wandern Teilchen {0} dem Konzentrationsgefälle. Die Zelle braucht dafür {1} Energie. Ionen nutzen dazu {2}.',
          blanks: ['mit', 'keine', 'Ionenkanäle'], extra: ['gegen', 'viel', 'Vesikel'] }
      ]
    },
    {
      title: 'Aktiver Transport',
      qs: [
        { t: 'mc', q: 'Was kennzeichnet den aktiven Transport?',
          o: ['Transport gegen das Konzentrationsgefälle unter Energieverbrauch', 'Transport mit dem Konzentrationsgefälle ohne Energie', 'Transport direkt durch die Lipidschicht', 'Transport nur von Wasser'], a: 0,
          w: 'Aktiver Transport schafft Teilchen von der niedrigen zur hohen Konzentration. Das kostet Energie.' },
        { t: 'type', q: 'Welcher Energieträger liefert die Energie für den aktiven Transport? (Abkürzung)', accept: ['ATP', 'Adenosintriphosphat'],
          w: 'ATP (Adenosintriphosphat) ist der universelle Energieträger der Zelle.' },
        { t: 'tf', q: 'Aktiver Transport läuft über Carrierproteine, die man auch Pumpen nennt.', a: true,
          w: 'Pumpen binden das Teilchen und befördern es unter ATP-Verbrauch auf die andere Seite.' },
        { t: 'mc', q: 'Was macht die Natrium-Kalium-Pumpe?',
          o: ['Sie pumpt Natrium-Ionen aus der Zelle und Kalium-Ionen hinein – mit ATP', 'Sie lässt Wasser ohne Energie durch die Membran', 'Sie stellt ATP her', 'Sie transportiert Glucose ohne Energie in die Zelle'], a: 0,
          w: 'Die Natrium-Kalium-Pumpe ist das Paradebeispiel für aktiven Transport.' },
        { t: 'mc', q: 'Wurzelhaarzellen nehmen Mineralsalze aus dem Boden auf, obwohl deren Konzentration in der Zelle schon höher ist. Wie geht das?',
          o: ['Durch aktiven Transport', 'Durch einfache Diffusion', 'Durch Osmose', 'Durch Plasmolyse'], a: 0,
          w: 'Gegen das Konzentrationsgefälle geht es nur aktiv – also mit Carrierproteinen und ATP.' },
        { t: 'match', pairs: [['Kanalprotein', 'Tunnel für bestimmte Teilchen'], ['Carrier', 'bindet Teilchen, ändert Form'], ['Pumpe', 'transportiert mit ATP gegen das Gefälle'], ['Lipidschicht', 'lässt kleine unpolare Teilchen durch']] },
        { t: 'tf', q: 'Fallen die Mitochondrien einer Zelle aus, kommt auch der aktive Transport zum Erliegen.', a: true,
          w: 'Ohne Mitochondrien fehlt das ATP – und ohne ATP arbeitet keine Pumpe.' },
        { t: 'mc', q: 'Welcher Vergleich passt zum aktiven Transport?',
          o: ['Wasser wird mit einer Pumpe bergauf befördert', 'Ein Ball rollt den Hang hinunter', 'Ein Blatt treibt mit der Strömung', 'Tinte verteilt sich im Wasserglas'], a: 0,
          w: 'Bergauf geht es nicht von allein. Genau wie beim Transport gegen das Konzentrationsgefälle braucht es Energie.' }
      ]
    },
    {
      title: 'KA-Niveau',
      qs: [
        { t: 'mc', q: 'Außerhalb der Zelle ist mehr Glucose als innen. Glucose gelangt über ein Carrierprotein ohne ATP in die Zelle. Welche Transportart ist das?',
          o: ['Erleichterte Diffusion (passiv)', 'Aktiver Transport', 'Einfache Diffusion', 'Osmose'], a: 0,
          w: 'Mit dem Gefälle und ohne ATP ist passiv. Weil ein Protein hilft, heißt es erleichterte Diffusion.' },
        { t: 'mc', q: 'Ein Gift stoppt die ATP-Herstellung einer Zelle. Welcher Transport funktioniert trotzdem weiter?',
          o: ['Diffusion von Sauerstoff', 'Die Natrium-Kalium-Pumpe', 'Aufnahme von Mineralsalzen gegen das Gefälle', 'Jeder Transport über Pumpen'], a: 0,
          w: 'Passive Vorgänge wie die Diffusion brauchen kein ATP. Alle Pumpen stehen dagegen still.' },
        { t: 'tf', q: 'Durch ein Kanalprotein passt jedes beliebige Teilchen.', a: false,
          w: 'Kanalproteine sind wählerisch. Ein Ionenkanal lässt nur bestimmte Ionen durch.' },
        { t: 'sort', q: 'Welche Eigenschaft gehört zu welchem Transport?', buckets: ['passiv', 'aktiv'],
          items: [['mit dem Konzentrationsgefälle', 0], ['gegen das Konzentrationsgefälle', 1], ['braucht ATP', 1], ['führt zum Konzentrationsausgleich', 0], ['baut einen Konzentrationsunterschied auf', 1], ['kommt ohne Energie aus', 0]] },
        { t: 'type', q: 'Wie nennt man ein Transportprotein, das ein Teilchen bindet und dabei seine Form ändert?', accept: ['Carrier', 'Carrierprotein', 'Trägerprotein', 'Carrier-Protein'],
          w: 'Carrier (Trägerproteine) arbeiten wie eine Drehtür. Pumpen sind Carrier, die zusätzlich ATP verbrauchen.' },
        { t: 'explain', op: 'Vergleiche', q: 'Vergleiche aktiven und passiven Transport an Biomembranen.',
          points: ['Passiv: mit dem Konzentrationsgefälle – aktiv: gegen das Konzentrationsgefälle', 'Passiv: ohne Energie – aktiv: braucht Energie (ATP)', 'Passiv: durch Lipidschicht, Kanalproteine oder Carrier – aktiv: nur über Carrier (Pumpen)', 'Beispiele genannt (z. B. Diffusion, Osmose, Ionenkanal – Natrium-Kalium-Pumpe)', 'Gemeinsam: Stoffe gelangen durch die Membran, oft mit Hilfe von Proteinen'],
          model: 'Bei beiden Transportarten gelangen Stoffe durch die Membran. Beim passiven Transport wandern die Teilchen mit dem Konzentrationsgefälle, die Zelle braucht dafür keine Energie. Er läuft direkt durch die Lipidschicht (einfache Diffusion) oder über Kanalproteine und Carrier (erleichterte Diffusion). Beim aktiven Transport werden Teilchen gegen das Konzentrationsgefälle befördert. Das kostet Energie in Form von ATP und läuft über Carrierproteine, die Pumpen, zum Beispiel die Natrium-Kalium-Pumpe.',
          tip: 'Vergleichskriterien nennen: Richtung, Energie, beteiligte Strukturen, Beispiel.' },
        { t: 'explain', op: 'Erkläre', q: 'Erkläre, warum Ionen die Membran nur über Ionenkanäle (oder Pumpen) durchqueren können.',
          points: ['Ionen sind geladen und damit hydrophil', 'Das Innere der Membran ist hydrophob (Fettsäure-Schwänze)', 'Ionen können den hydrophoben Bereich nicht durchdringen', 'Ionenkanäle sind Proteine, die einen Tunnel durch die Membran bilden', 'Ein Kanal lässt nur bestimmte Ionen durch'],
          model: 'Ionen sind elektrisch geladen und deshalb hydrophil. Das Innere der Lipid-Doppelschicht besteht aus den hydrophoben Fettsäure-Schwänzen. Diesen Bereich können geladene Teilchen nicht durchdringen. Ionenkanäle sind integrale Proteine, die einen Tunnel durch die Membran bilden. Durch ihn können ganz bestimmte Ionen mit dem Konzentrationsgefälle hindurchströmen.' }
      ]
    }
  ]
});
