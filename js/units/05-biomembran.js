BIO.unit({
  id: 'biomembran', icon: '🧱', color: '#FF9CC5',
  title: 'Aufbau von Biomembranen',
  blurb: 'Lipide, Köpfe, Schwänze und Reaktionsräume',
  sheet: {
    intro: 'Biomembranen bestehen vor allem aus Lipiden und Proteinen. Die Lipide bilden eine Doppelschicht, weil ihr Kopf Wasser mag und ihre Schwänze nicht.',
    facts: [
      ['Lipid', 'Fett oder fettähnlicher Stoff. Membranlipide heißen Phospholipide.'],
      ['Phospholipid', 'Ein hydrophiler Kopf und zwei hydrophobe Schwänze (Fettsäurereste).'],
      ['hydrophil', 'Wasserliebend. Löst sich gut in Wasser (z. B. Zucker, Salz).'],
      ['hydrophob', 'Wassermeidend. Löst sich nicht in Wasser (z. B. Öl, Fett).'],
      ['Lipid-Doppelschicht', 'Zwei Lagen Phospholipide: Köpfe außen zum Wasser, Schwänze innen zueinander.'],
      ['Kompartimentierung', 'Gliederung der Zelle in abgegrenzte Reaktionsräume (Kompartimente) durch Membranen.'],
      ['Aufgaben der Membran', 'Abgrenzung, kontrollierter Stoffaustausch, Aufnahme von Signalen, Erkennung von Zellen'],
      ['Was kommt direkt durch?', 'Kleine, unpolare Teilchen wie Sauerstoff und Kohlenstoffdioxid. Ionen und große Teilchen wie Glucose nicht.']
    ],
    merk: [
      'Kopf zum Wasser, Schwanz weg vom Wasser – deshalb die Doppelschicht.',
      'Kompartimentierung = viele Räume, viele Reaktionen gleichzeitig, keiner stört den anderen.',
      'Eine Membran ist nur etwa 8 Nanometer dick. Im Lichtmikroskop sieht man ihren Aufbau nicht.'
    ],
    figs: [{ d: 'membrane' }]
  },
  lessons: [
    {
      title: 'Lipide und ihre zwei Seiten',
      qs: [
        { t: 'mc', q: 'Woraus bestehen Biomembranen hauptsächlich?',
          o: ['Aus Lipiden und Proteinen', 'Aus Cellulose', 'Aus DNA und Zucker', 'Aus Wasser und Salz'], a: 0,
          w: 'Lipide bilden die Grundstruktur, Proteine sind darin eingelagert. Dazu kommen einige Kohlenhydrate.' },
        { t: 'match', pairs: [['hydrophil', 'wasserliebend'], ['hydrophob', 'wassermeidend'], ['Lipid', 'Fett oder fettähnlicher Stoff'], ['Kompartiment', 'abgegrenzter Reaktionsraum']] },
        { t: 'tap', d: 'membrane', target: 'head', q: 'Tippe auf einen hydrophilen Kopf.',
          w: 'Die runden Köpfe der Phospholipide zeigen nach außen zum Wasser.' },
        { t: 'mc', q: 'Wie ist ein Phospholipid aufgebaut?',
          o: ['Ein hydrophiler Kopf und zwei hydrophobe Schwänze', 'Zwei hydrophile Köpfe und ein hydrophober Schwanz', 'Nur ein hydrophober Kopf', 'Eine Kette aus Glucose-Bausteinen'], a: 0,
          w: 'Der Kopf ist wasserliebend, die beiden Fettsäure-Schwänze sind wassermeidend.' },
        { t: 'tf', q: 'In der Lipid-Doppelschicht zeigen die hydrophoben Schwänze nach außen zum Wasser.', a: false,
          w: 'Genau umgekehrt: Die Schwänze verstecken sich innen, die Köpfe zeigen zum Wasser.' },
        { t: 'cloze', text: 'Ein Phospholipid besteht aus einem {0} Kopf und zwei {1} Schwänzen. In Wasser lagern sich die Moleküle zu einer {2} zusammen.',
          blanks: ['hydrophilen', 'hydrophoben', 'Doppelschicht'], extra: ['Zellwand', 'festen'] },
        { t: 'type', q: 'Wie nennt man die Gliederung der Zelle in abgegrenzte Reaktionsräume?', accept: ['Kompartimentierung'],
          w: 'Durch Kompartimentierung können viele verschiedene Reaktionen gleichzeitig ablaufen.' },
        { t: 'label', d: 'membrane', target: 'tail', o: ['hydrophober Schwanz', 'hydrophiler Kopf', 'Kohlenhydratkette', 'Kanalprotein'], a: 0,
          w: 'Die Fettsäure-Schwänze sind hydrophob und bilden das Innere der Membran.' }
      ]
    },
    {
      title: 'Warum eine Doppelschicht?',
      qs: [
        { t: 'mc', q: 'Warum bilden Phospholipide in Wasser von selbst eine Doppelschicht?',
          o: ['Die Köpfe wenden sich dem Wasser zu, die Schwänze lagern sich innen zusammen', 'Die Zelle baut sie unter Energieaufwand zusammen', 'Die Schwänze ziehen Wasser an', 'Die Köpfe stoßen sich gegenseitig ab'], a: 0,
          w: 'Innen und außen der Zelle ist Wasser. Nur in einer Doppelschicht sind alle Schwänze vor dem Wasser geschützt.' },
        { t: 'sort', q: 'Hydrophil oder hydrophob?', buckets: ['hydrophil', 'hydrophob'],
          items: [['Zucker', 0], ['Speiseöl', 1], ['Kochsalz', 0], ['Wachs', 1], ['Butterfett', 1], ['Essig', 0]] },
        { t: 'tf', q: 'Dank Kompartimentierung können verschiedene Stoffwechselvorgänge gleichzeitig ablaufen, ohne sich zu stören.', a: true,
          w: 'Jeder Reaktionsraum hat eigene Bedingungen. So verdaut das Lysosom, ohne den Rest der Zelle anzugreifen.' },
        { t: 'mc', q: 'Welches Teilchen gelangt am leichtesten direkt durch die Lipid-Doppelschicht?',
          o: ['Sauerstoff', 'Natrium-Ion', 'Glucose', 'Protein'], a: 0,
          w: 'Sauerstoff ist klein und unpolar. Ionen und große Teilchen scheitern am hydrophoben Inneren.' },
        { t: 'multi', q: 'Welche Aufgaben haben Biomembranen?',
          o: ['Abgrenzung von Reaktionsräumen', 'Kontrolle des Stoffaustauschs', 'Aufnahme von Signalen', 'Speicherung der Erbinformation'], a: [0, 1, 2],
          w: 'Die Erbinformation steckt in der DNA, nicht in der Membran.' },
        { t: 'mc', q: 'Welcher Zellbestandteil ist NICHT von einer Biomembran umgeben?',
          o: ['Ribosom', 'Mitochondrium', 'Lysosom', 'Zellkern'], a: 0,
          w: 'Ribosomen haben keine Membran. Alle anderen genannten Organellen sind eigene Kompartimente.' },
        { t: 'tf', q: 'Den Aufbau einer Biomembran kann man im Lichtmikroskop genau erkennen.', a: false,
          w: 'Eine Biomembran ist nur etwa 8 Nanometer dick. Ihren Aufbau zeigt erst das Elektronenmikroskop.' },
        { t: 'mc', q: 'Warum mischen sich Öl und Wasser nicht?',
          o: ['Öl ist hydrophob', 'Öl ist hydrophil', 'Öl ist schwerer als Wasser', 'Wasser ist hydrophob'], a: 0,
          w: 'Hydrophobe Stoffe wie Öl meiden Wasser – genau wie die Schwänze der Phospholipide.' }
      ]
    },
    {
      title: 'KA-Niveau',
      qs: [
        { t: 'type', q: 'Wie lautet der Fachbegriff für „wassermeidend“?', accept: ['hydrophob'],
          w: 'hydrophob = wassermeidend, hydrophil = wasserliebend.' },
        { t: 'mc', q: 'Welcher Teil der Membran verhindert, dass Ionen einfach hindurchwandern?',
          o: ['Das hydrophobe Innere aus Fettsäure-Schwänzen', 'Die hydrophilen Köpfe', 'Die Kohlenhydratketten', 'Das Zellplasma'], a: 0,
          w: 'Ionen sind geladen und hydrophil. Durch den hydrophoben Bereich kommen sie nicht.' },
        { t: 'tap', d: 'membrane', target: 'tail', q: 'Tippe auf den hydrophoben Bereich der Membran.',
          w: 'Hydrophob sind die Schwänze der Phospholipide im Inneren der Doppelschicht.' },
        { t: 'tf', q: 'Biomembranen umgeben nur die Zelle als Ganzes, nicht die Organellen.', a: false,
          w: 'Auch Zellkern, Mitochondrien, ER, Golgi-Apparat, Lysosomen und Vakuole sind von Biomembranen umgeben.' },
        { t: 'mc', q: 'Das Lysosom enthält aggressive Verdauungsenzyme. Warum wird der Rest der Zelle nicht verdaut?',
          o: ['Die Enzyme sind durch die Lysosomenmembran abgetrennt', 'Die Enzyme sind immer inaktiv', 'Das Zellplasma ist hydrophob', 'Die Enzyme sind zu groß, um zu wirken'], a: 0,
          w: 'Das ist Kompartimentierung in Aktion: Die Membran trennt den Verdauungsraum vom Rest der Zelle.' },
        { t: 'explain', op: 'Erkläre', q: 'Erkläre den Begriff Kompartimentierung und ihre Bedeutung für die Zelle.',
          points: ['Die Zelle ist durch Biomembranen in abgegrenzte Reaktionsräume gegliedert', 'In den Räumen herrschen unterschiedliche Bedingungen (z. B. andere Enzyme)', 'Verschiedene Stoffwechselvorgänge laufen gleichzeitig ab, ohne sich zu stören', 'Beispiel genannt (z. B. Lysosom: Verdauung, Mitochondrium: Zellatmung)'],
          model: 'Kompartimentierung bedeutet, dass die Zelle durch Biomembranen in abgegrenzte Reaktionsräume, die Kompartimente, gegliedert ist. In jedem Raum herrschen eigene Bedingungen, zum Beispiel bestimmte Enzyme. Dadurch können viele verschiedene, auch gegenläufige Stoffwechselvorgänge gleichzeitig ablaufen, ohne sich zu stören. Ein Beispiel ist das Lysosom: Seine Verdauungsenzyme bleiben vom Rest der Zelle getrennt.',
          tip: 'Ein konkretes Beispiel bringt fast immer einen Extrapunkt.' },
        { t: 'explain', op: 'Beschreibe und erkläre', q: 'Beschreibe den Aufbau eines Phospholipids und erkläre, warum sich in Wasser eine Doppelschicht bildet.',
          points: ['Ein Phospholipid hat einen hydrophilen (wasserliebenden) Kopf', 'und zwei hydrophobe (wassermeidende) Schwänze aus Fettsäuren', 'Die Köpfe wenden sich dem Wasser zu', 'Die Schwänze lagern sich im Inneren zusammen, weg vom Wasser', 'Da innen und außen Wasser ist, entstehen zwei Schichten'],
          model: 'Ein Phospholipid besteht aus einem hydrophilen Kopf und zwei hydrophoben Fettsäure-Schwänzen. In wässriger Umgebung richten sich die Moleküle so aus, dass die Köpfe zum Wasser zeigen und die Schwänze sich vom Wasser abwenden. Weil sich sowohl außerhalb als auch innerhalb der Zelle Wasser befindet, lagern sich zwei Schichten mit den Schwänzen zueinander zusammen: die Lipid-Doppelschicht.' }
      ]
    }
  ]
});
