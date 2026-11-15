BIO.unit({
  id: 'mosaik', icon: '🧩', color: '#B5A0FF',
  title: 'Flüssig-Mosaik-Modell',
  blurb: 'Warum die Membran flüssig ist und trotzdem hält',
  sheet: {
    intro: 'Das Flüssig-Mosaik-Modell beschreibt die Biomembran als bewegliche Lipid-Doppelschicht, in der Proteine wie Mosaiksteinchen sitzen.',
    facts: [
      ['„Flüssig“', 'Lipide und viele Proteine sind seitlich gegeneinander beweglich. Die Membran ist nicht starr.'],
      ['„Mosaik“', 'Proteine sind wie Mosaiksteinchen in die Lipidschicht eingelagert.'],
      ['Integrales Protein', 'Ist in die Membran eingebettet oder durchspannt sie ganz (z. B. Kanalproteine).'],
      ['Peripheres Protein', 'Liegt der Membran nur außen oder innen auf.'],
      ['Kohlenhydratketten', 'Sitzen nur auf der Außenseite der Zellmembran. Dienen als Erkennungsmerkmal der Zelle (z. B. Blutgruppen).'],
      ['Aufgaben der Membranproteine', 'Stofftransport, Empfang von Signalen (Rezeptoren), Zellerkennung, Enzyme'],
      ['Wer hat es entwickelt?', 'Singer und Nicolson, 1972.']
    ],
    merk: [
      'Flüssig = beweglich. Mosaik = Proteine als Steinchen in der Lipidschicht.',
      'Integral = innen drin. Peripher = am Rand aufgelagert.',
      'Ein Modell ist eine vereinfachte Vorstellung, keine Kopie der Wirklichkeit.'
    ],
    figs: [{ d: 'membrane' }]
  },
  lessons: [
    {
      title: 'Flüssig und Mosaik',
      qs: [
        { t: 'mc', q: 'Was bedeutet „flüssig“ im Flüssig-Mosaik-Modell?',
          o: ['Lipide und Proteine sind in der Membran seitlich beweglich', 'Die Membran besteht aus Wasser', 'Die Membran löst sich ständig auf', 'Durch die Membran fließt alles ungehindert'], a: 0,
          w: 'Die Bausteine der Membran können sich seitlich gegeneinander verschieben – wie Korken auf einem Teich.' },
        { t: 'mc', q: 'Was bedeutet „Mosaik“ im Flüssig-Mosaik-Modell?',
          o: ['Proteine sind wie Mosaiksteinchen in die Lipidschicht eingelagert', 'Die Membran ist bunt gefärbt', 'Die Lipide haben unterschiedliche Farben', 'Die Membran besteht aus festen Platten'], a: 0,
          w: 'Von oben betrachtet ergeben Lipide und eingestreute Proteine ein Muster wie ein Mosaik.' },
        { t: 'tap', d: 'membrane', target: ['channel', 'integral'], q: 'Tippe auf ein integrales Protein.',
          w: 'Integrale Proteine sind in die Membran eingebettet oder durchspannen sie ganz.' },
        { t: 'label', d: 'membrane', target: 'peripheral', o: ['peripheres Protein', 'integrales Protein', 'Kohlenhydratkette', 'Phospholipid'], a: 0,
          w: 'Periphere Proteine liegen der Membran nur auf, sie durchspannen sie nicht.' },
        { t: 'tf', q: 'Die Biomembran ist eine starre, feste Hülle.', a: false,
          w: 'Die Membran ist beweglich und verformbar. Genau das beschreibt das Wort „flüssig“.' },
        { t: 'match', pairs: [['integrales Protein', 'durchspannt die Membran'], ['peripheres Protein', 'liegt der Membran auf'], ['Kohlenhydratkette', 'Erkennungsmerkmal der Zelle'], ['Phospholipid', 'Baustein der Doppelschicht']] },
        { t: 'mc', q: 'Wo sitzen die Kohlenhydratketten der Zellmembran?',
          o: ['Nur auf der Außenseite', 'Nur auf der Innenseite', 'Auf beiden Seiten', 'Im hydrophoben Inneren'], a: 0,
          w: 'Die Kohlenhydratketten ragen nach außen. Dort können andere Zellen sie „lesen“.' },
        { t: 'cloze', text: 'Nach dem Flüssig-Mosaik-Modell besteht die Membran aus einer {0}, in die {1} eingelagert sind. Die Bausteine sind seitlich {2}.',
          blanks: ['Lipid-Doppelschicht', 'Proteine', 'beweglich'], extra: ['Zellwand', 'starr', 'Ribosomen'] }
      ]
    },
    {
      title: 'Proteine mit Aufgaben',
      qs: [
        { t: 'multi', q: 'Welche Aufgaben übernehmen Membranproteine?',
          o: ['Transport von Stoffen', 'Empfang von Signalen', 'Erkennung von Zellen', 'Speicherung der Erbinformation'], a: [0, 1, 2],
          w: 'Membranproteine transportieren, empfangen Signale und helfen bei der Zellerkennung. DNA speichern sie nicht.' },
        { t: 'mc', q: 'Wer hat das Flüssig-Mosaik-Modell entwickelt?',
          o: ['Singer und Nicolson', 'Watson und Crick', 'Darwin und Wallace', 'Schleiden und Schwann'], a: 0,
          w: 'Singer und Nicolson stellten das Modell 1972 vor. Watson und Crick klärten die Struktur der DNA auf.' },
        { t: 'label', d: 'membrane', target: 'carb', o: ['Kohlenhydratkette', 'peripheres Protein', 'hydrophober Schwanz', 'Kanalprotein'], a: 0,
          w: 'Kohlenhydratketten hängen außen an Proteinen oder Lipiden.' },
        { t: 'tf', q: 'Ein Modell ist eine exakte Kopie der Wirklichkeit.', a: false,
          w: 'Modelle vereinfachen. Sie zeigen das Wichtige und können durch neue Erkenntnisse verbessert werden.' },
        { t: 'mc', q: 'Woran erkennt das Immunsystem, ob eine Zelle körpereigen oder fremd ist?',
          o: ['An den Kohlenhydratketten auf der Zelloberfläche', 'An der Dicke der Zellmembran', 'An der Anzahl der Mitochondrien', 'An der Farbe des Zellplasmas'], a: 0,
          w: 'Die Kohlenhydratketten wirken wie ein Ausweis. Auch die Blutgruppen beruhen auf solchen Ketten.' },
        { t: 'label', d: 'membrane', target: 'channel', o: ['Kanalprotein', 'peripheres Protein', 'Kohlenhydratkette', 'Phospholipid'], a: 0,
          w: 'Kanalproteine durchspannen die Membran und bilden einen Tunnel.' },
        { t: 'mc', q: 'Warum bleiben integrale Proteine in der Membran stecken?',
          o: ['Sie haben einen hydrophoben Bereich, der zum Inneren der Membran passt', 'Sie sind mit der Zellwand verklebt', 'Sie sind komplett hydrophil', 'Sie werden von Ribosomen festgehalten'], a: 0,
          w: 'Der mittlere Teil des Proteins ist hydrophob wie die Lipid-Schwänze, die Enden sind hydrophil.' },
        { t: 'type', q: 'Wie heißt das heute gültige Modell vom Aufbau der Biomembran?', accept: ['Flüssig-Mosaik-Modell', 'Fluid-Mosaik-Modell', 'Flüssig Mosaik Modell', 'Fluid-Mosaic-Modell'],
          w: 'Das Flüssig-Mosaik-Modell (englisch: fluid mosaic model).' }
      ]
    },
    {
      title: 'KA-Niveau',
      qs: [
        { t: 'tap', d: 'membrane', target: 'peripheral', q: 'Tippe auf das periphere Protein.',
          w: 'Das periphere Protein liegt der Membran auf der Innenseite auf.' },
        { t: 'tf', q: 'Kanalproteine gehören zu den integralen Proteinen.', a: true,
          w: 'Ein Kanal muss die ganze Membran durchspannen – das können nur integrale Proteine.' },
        { t: 'sort', q: 'Wofür steht die Eigenschaft im Namen des Modells?', buckets: ['„flüssig“', '„Mosaik“'],
          items: [['Lipide wechseln seitlich ihren Platz', 0], ['Proteine sind in die Lipidschicht eingestreut', 1], ['Die Membran ist verformbar', 0], ['Verschiedene Bausteine ergeben ein Muster', 1]] },
        { t: 'mc', q: 'Zwei Zellen mit unterschiedlich markierten Membranproteinen werden verschmolzen. Nach kurzer Zeit sind die Proteine gleichmäßig gemischt. Was zeigt das?',
          o: ['Proteine sind in der Membran seitlich beweglich', 'Proteine werden ständig neu gebildet', 'Die Membran ist starr', 'Proteine wandern durch das Zellplasma'], a: 0,
          w: 'Dieser Versuch belegt den „flüssigen“ Charakter der Membran.' },
        { t: 'mc', q: 'Welche Aussage über Modelle in der Biologie stimmt?',
          o: ['Sie können durch neue Erkenntnisse verändert werden', 'Sie zeigen die Wirklichkeit in allen Einzelheiten', 'Sie gelten für immer', 'Sie werden nicht überprüft'], a: 0,
          w: 'Auch das Membranmodell wurde mehrfach verbessert, bis das Flüssig-Mosaik-Modell entstand.' },
        { t: 'explain', op: 'Beschreibe', q: 'Beschreibe den Aufbau der Biomembran nach dem Flüssig-Mosaik-Modell.',
          points: ['Grundstruktur ist eine Lipid-Doppelschicht aus Phospholipiden', 'Hydrophile Köpfe zeigen nach außen, hydrophobe Schwänze nach innen', 'Integrale Proteine sind eingelagert oder durchspannen die Membran', 'Periphere Proteine liegen der Membran auf', 'Kohlenhydratketten sitzen auf der Außenseite', 'Die Bausteine sind seitlich beweglich'],
          model: 'Die Biomembran besteht aus einer Doppelschicht von Phospholipiden. Deren hydrophile Köpfe zeigen nach außen zum Wasser, die hydrophoben Schwänze zeigen nach innen zueinander. In diese Lipidschicht sind integrale Proteine eingelagert, manche durchspannen sie ganz. Periphere Proteine liegen der Membran auf. Auf der Außenseite tragen Proteine und Lipide Kohlenhydratketten. Alle Bausteine sind seitlich gegeneinander beweglich.',
          tip: 'Arbeite dich von der Grundstruktur (Lipide) zu den Extras (Proteine, Kohlenhydrate) vor.' },
        { t: 'explain', op: 'Erkläre', q: 'Erkläre die beiden Namensteile „flüssig“ und „Mosaik“ des Flüssig-Mosaik-Modells.',
          points: ['„Flüssig“: Lipide und Proteine sind seitlich gegeneinander beweglich', 'Die Membran ist deshalb nicht starr, sondern verformbar', '„Mosaik“: Proteine sind in die Lipid-Doppelschicht eingelagert', 'wie einzelne Steinchen in einem Mosaik'],
          model: '„Flüssig“ bedeutet, dass die Phospholipide und viele Proteine seitlich gegeneinander beweglich sind. Die Membran ist also nicht starr, sondern verformbar. „Mosaik“ beschreibt, dass die Proteine wie einzelne Steinchen in die Lipid-Doppelschicht eingelagert sind und zusammen mit den Lipiden ein Muster ergeben.' }
      ]
    }
  ]
});
