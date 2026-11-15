BIO.unit({
  id: 'organellen', icon: '🏭', color: '#FF9A7A',
  title: 'Zellorganellen und ihre Funktion',
  blurb: 'Die Zelle als Fabrik: Wer macht welchen Job?',
  sheet: {
    intro: 'Jedes Organell hat eine feste Aufgabe. Merk dir zu jedem Namen genau einen Job – dann sitzt die halbe KA.',
    facts: [
      ['Zellkern', 'Steuerzentrale. Enthält die DNA. Kernhülle aus zwei Membranen mit Kernporen.'],
      ['Mitochondrium', 'Kraftwerk. Zellatmung: stellt Energie (ATP) bereit. Zwei Membranen, die innere ist stark gefaltet.'],
      ['Ribosom', 'Proteinfabrik. Stellt Proteine her. Hat KEINE Membran.'],
      ['Raues ER', 'Mit Ribosomen besetzt. Stellt Proteine her und transportiert sie weiter.'],
      ['Glattes ER', 'Ohne Ribosomen. Stellt Lipide her und entgiftet.'],
      ['Golgi-Apparat', 'Poststelle. Verarbeitet, sortiert und verpackt Stoffe in Vesikel.'],
      ['Lysosom', 'Recyclinghof. Enthält Verdauungsenzyme, baut Fremdstoffe und defekte Zellteile ab.'],
      ['Vesikel', 'Kleines Membranbläschen für den Transport von Stoffen.'],
      ['Chloroplast', 'Solarkraftwerk der Pflanzenzelle. Fotosynthese. Zwei Membranen.']
    ],
    merk: [
      'Weg eines Proteins: Ribosom am rauen ER → ER → Golgi-Apparat → Vesikel → Zellmembran.',
      'Doppelmembran haben nur drei: Zellkern, Mitochondrium, Chloroplast.',
      'Viel Arbeit = viele Mitochondrien. Muskelzellen sind voll davon.'
    ],
    figs: [{ d: 'animalCell' }]
  },
  lessons: [
    {
      title: 'Wer macht was?',
      qs: [
        { t: 'match', pairs: [['Mitochondrium', 'Zellatmung, Energie'], ['Ribosom', 'stellt Proteine her'], ['Lysosom', 'Verdauung und Abbau'], ['Golgi-Apparat', 'verpackt und versendet']] },
        { t: 'mc', q: 'Welches Organell wird „Kraftwerk der Zelle“ genannt?',
          o: ['Mitochondrium', 'Ribosom', 'Lysosom', 'Zellkern'], a: 0,
          w: 'In den Mitochondrien läuft die Zellatmung ab. Dabei wird Energie in Form von ATP bereitgestellt.',
          quip: 'Das bin ICH. Danke, danke. Autogramme später.' },
        { t: 'tf', q: 'Ribosomen sind von einer Membran umgeben.', a: false,
          w: 'Ribosomen haben keine Membran. Deshalb gibt es sie auch bei Prokaryoten.' },
        { t: 'tap', d: 'animalCell', target: 'mito', q: 'Tippe auf ein Mitochondrium.',
          w: 'Mitochondrien erkennst du an der bohnenförmigen Gestalt und den Falten der inneren Membran.' },
        { t: 'label', d: 'animalCell', target: 'golgi',
          w: 'Der Golgi-Apparat besteht aus gestapelten, flachen Membransäckchen.' },
        { t: 'type', q: 'Welches Organell enthält Verdauungsenzyme und baut Abfallstoffe ab?', accept: ['Lysosom', 'Lysosomen'],
          w: 'Lysosomen zerlegen Fremdstoffe und defekte Zellbestandteile mit Verdauungsenzymen.' },
        { t: 'mc', q: 'Warum heißt das raue ER „rau“?',
          o: ['Es ist mit Ribosomen besetzt', 'Seine Membran ist besonders dick', 'Es liegt an der Zellwand', 'Es enthält viele Lysosomen'], a: 0,
          w: 'Die Ribosomen auf der Oberfläche lassen das ER im Elektronenmikroskop körnig, also „rau“, aussehen.' },
        { t: 'cloze', text: 'An den {0} werden Proteine hergestellt. Im {1} wird durch Zellatmung Energie bereitgestellt. Der {2} enthält die Erbinformation.',
          blanks: ['Ribosomen', 'Mitochondrium', 'Zellkern'], extra: ['Lysosom', 'Vesikeln'] }
      ]
    },
    {
      title: 'Teamwork in der Zelle',
      qs: [
        { t: 'order', q: 'Ein Protein soll die Zelle verlassen. Ordne seinen Weg.',
          items: ['Ribosom am rauen ER baut das Protein', 'Transport durch das ER', 'Golgi-Apparat verarbeitet und verpackt', 'Vesikel wandert zur Zellmembran', 'Abgabe nach außen'],
          w: 'Herstellen, transportieren, verpacken, verschicken: So arbeiten ER, Golgi-Apparat und Vesikel zusammen.' },
        { t: 'mc', q: 'Welche Aufgabe hat das glatte ER?',
          o: ['Herstellung von Lipiden und Entgiftung', 'Herstellung von Proteinen', 'Zellatmung', 'Speicherung der DNA'], a: 0,
          w: 'Das glatte ER trägt keine Ribosomen. Es stellt Lipide her und baut Giftstoffe ab.' },
        { t: 'label', d: 'animalCell', target: 'rer',
          w: 'Das raue ER liegt nah am Zellkern. Die dunklen Punkte darauf sind Ribosomen.' },
        { t: 'tap', d: 'animalCell', target: 'lyso', q: 'Tippe auf ein Lysosom.',
          w: 'Lysosomen sind kleine, runde Bläschen mit Verdauungsenzymen.' },
        { t: 'tf', q: 'Mitochondrien besitzen eine eigene DNA.', a: true,
          w: 'Mitochondrien und Chloroplasten haben eigene DNA und eigene Ribosomen.' },
        { t: 'mc', q: 'Wozu ist die innere Membran der Mitochondrien stark gefaltet?',
          o: ['Die Oberfläche wird größer – mehr Platz für die Zellatmung', 'Damit das Mitochondrium stabiler wird', 'Damit weniger Sauerstoff hineinkommt', 'Um DNA zu speichern'], a: 0,
          w: 'Mehr Membranfläche bedeutet mehr Enzyme der Zellatmung und damit mehr Energie.' },
        { t: 'multi', q: 'Welche Organellen sind von einer Doppelmembran umgeben?',
          o: ['Zellkern', 'Mitochondrium', 'Chloroplast', 'Lysosom', 'Golgi-Apparat'], a: [0, 1, 2],
          w: 'Nur Zellkern, Mitochondrien und Chloroplasten haben zwei Membranen. Lysosom und Golgi-Apparat haben eine.' },
        { t: 'match', q: 'Die Zelle als Fabrik: Welcher Vergleich passt?',
          pairs: [['Zellkern', 'Chefbüro mit Bauplänen'], ['Golgi-Apparat', 'Poststelle'], ['Lysosom', 'Recyclinghof'], ['Mitochondrium', 'Kraftwerk'], ['Ribosom', 'Werkbank für Proteine']] }
      ]
    },
    {
      title: 'KA-Niveau',
      qs: [
        { t: 'mc', q: 'Welche Zellen enthalten besonders viel raues ER und einen großen Golgi-Apparat?',
          o: ['Drüsenzellen, die Enzyme oder Hormone abgeben', 'Fettzellen', 'Rote Blutkörperchen', 'Abgestorbene Hornzellen der Haut'], a: 0,
          w: 'Enzyme und viele Hormone sind Proteine. Wer viel davon herstellt und verschickt, braucht viel raues ER und Golgi-Apparat.' },
        { t: 'tf', q: 'Der Golgi-Apparat stellt die Proteine her.', a: false,
          w: 'Proteine entstehen an den Ribosomen. Der Golgi-Apparat verarbeitet und verpackt sie nur.' },
        { t: 'type', q: 'Wie heißen die kleinen Membranbläschen, in denen Stoffe durch die Zelle transportiert werden?', accept: ['Vesikel', 'Vesikeln'],
          w: 'Vesikel schnüren sich von Membranen ab und verschmelzen am Ziel wieder mit einer Membran.' },
        { t: 'mc', q: 'Wozu dienen die Kernporen in der Kernhülle?',
          o: ['Stoffaustausch zwischen Zellkern und Zellplasma', 'Herstellung von Energie', 'Verdauung von Fremdstoffen', 'Befestigung der Ribosomen'], a: 0,
          w: 'Durch die Kernporen gelangen zum Beispiel Kopien der Baupläne aus dem Kern zu den Ribosomen.' },
        { t: 'mc', q: 'In einer Zelle fallen die Lysosomen aus. Was ist die Folge?',
          o: ['Abfallstoffe und defekte Zellteile sammeln sich an', 'Die Zelle kann keine Proteine mehr bauen', 'Die Zelle hat keine Energie mehr', 'Die DNA wird zerstört'], a: 0,
          w: 'Ohne Lysosomen wird nichts mehr abgebaut. Die Zelle „vermüllt“.' },
        { t: 'label', d: 'animalCell', target: 'ribo',
          w: 'Ribosomen sind winzige Körnchen. Sie liegen frei im Zellplasma oder sitzen auf dem rauen ER.' },
        { t: 'explain', op: 'Beschreibe', q: 'Beschreibe den Weg eines Verdauungsenzyms von der Herstellung bis zur Abgabe aus der Zelle.',
          points: ['Herstellung an den Ribosomen des rauen ER', 'Transport durch das ER', 'Vesikel bringen das Protein zum Golgi-Apparat', 'Golgi-Apparat verarbeitet, sortiert und verpackt es in Vesikel', 'Vesikel verschmilzt mit der Zellmembran und gibt den Inhalt nach außen ab'],
          model: 'Das Enzym ist ein Protein und wird an den Ribosomen des rauen ER hergestellt. Es gelangt ins ER und wird dort weitertransportiert. Vesikel bringen es zum Golgi-Apparat, der es verarbeitet und in neue Vesikel verpackt. Diese Vesikel wandern zur Zellmembran, verschmelzen mit ihr und geben das Enzym nach außen ab.',
          tip: '„Beschreibe“ heißt: der Reihe nach, in ganzen Sätzen, ohne Begründung.' },
        { t: 'explain', op: 'Erkläre', q: 'Erkläre, warum Muskelzellen besonders viele Mitochondrien enthalten.',
          points: ['Muskelzellen leisten Bewegungsarbeit und haben einen hohen Energiebedarf', 'Mitochondrien stellen durch Zellatmung Energie (ATP) bereit', 'Viele Mitochondrien = viel Energie pro Zeit', 'Der Bau der Zelle passt zu ihrer Aufgabe (Struktur und Funktion)'],
          model: 'Muskelzellen müssen sich ständig zusammenziehen und verbrauchen dabei sehr viel Energie. Diese Energie wird in den Mitochondrien durch Zellatmung als ATP bereitgestellt. Je mehr Mitochondrien eine Zelle hat, desto mehr Energie steht ihr pro Zeit zur Verfügung. Der Bau der Muskelzelle ist also an ihre Aufgabe angepasst.' }
      ]
    }
  ]
});
