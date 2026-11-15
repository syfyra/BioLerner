/* BioLerner – Skizzen als SVG (Zelltypen, Biomembran, Plasmolyse)
   Jede Struktur ist eine Gruppe <g class="part" data-part="…">, damit man sie
   markieren, antippen und beschriften kann. */
(function () {
  'use strict';

  var C = {
    cyto: '#FFEFD2', mem: '#E0892B',
    nuc: '#CDBBF6', nucS: '#6A4FC8',
    er: '#8E7BD8', ser: '#B49BEA', golgi: '#E85D9A', ves: '#F9B7D2',
    mito: '#FF8A6B', mitoS: '#B93E22',
    lyso: '#9BE38F', lysoS: '#3E9B45',
    ribo: '#3B2E7A',
    wall: '#93CE63', wallS: '#4E8F2A',
    vac: '#C4E8FB', vacS: '#4BA3D9',
    chl: '#4CB05A', chlS: '#1F6B2B'
  };

  function P(id, inner) { return '<g class="part" data-part="' + id + '">' + inner + '</g>'; }
  function hit(cx, cy, r) {
    return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#000" fill-opacity="0" pointer-events="all"/>';
  }
  function dots(pts, r, fill) {
    return pts.map(function (p) {
      return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + r + '" fill="' + fill + '"/>';
    }).join('');
  }
  function ribos(pts) {
    var cx = 0, cy = 0;
    pts.forEach(function (p) { cx += p[0]; cy += p[1]; });
    cx /= pts.length; cy /= pts.length;
    return P('ribo', hit(cx, cy, 15) + dots(pts, 3, C.ribo));
  }
  function mito(cx, cy, rot, sc) {
    return P('mito', '<g transform="translate(' + cx + ' ' + cy + ') rotate(' + rot + ') scale(' + (sc || 1) + ')">' +
      '<rect x="-30" y="-14" width="60" height="28" rx="14" fill="' + C.mito + '" stroke="' + C.mitoS + '" stroke-width="3"/>' +
      '<path d="M-19 -11v13M-9 11v-13M1 -11v13M11 11v-13M21 -11v11" stroke="' + C.mitoS + '" stroke-width="3" stroke-linecap="round" fill="none"/></g>');
  }
  function lyso(cx, cy, r) {
    return P('lyso', hit(cx, cy, r + 4) + '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + C.lyso + '" stroke="' + C.lysoS + '" stroke-width="3"/>' +
      dots([[cx - 3, cy - 2], [cx + 3, cy + 1], [cx - 1, cy + 4], [cx + 2, cy - 4]], 1.5, C.lysoS));
  }
  function chloro(cx, cy, rot) {
    return P('chloro', '<g transform="translate(' + cx + ' ' + cy + ') rotate(' + rot + ')">' +
      '<ellipse rx="25" ry="13" fill="' + C.chl + '" stroke="' + C.chlS + '" stroke-width="3"/>' +
      '<g fill="' + C.chlS + '"><rect x="-17" y="-5" width="8" height="10" rx="2"/><rect x="-4" y="-7" width="8" height="14" rx="2"/><rect x="9" y="-5" width="8" height="10" rx="2"/></g>' +
      '<path d="M-9 0h5M4 0h5" stroke="' + C.chlS + '" stroke-width="2"/></g>');
  }
  function nucleus(cx, cy, r) {
    return P('nucleus', '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + C.nuc + '" stroke="' + C.nucS +
      '" stroke-width="4.5" stroke-dasharray="' + (r / 3) + ' 4"/><circle cx="' + (cx + r * 0.26) + '" cy="' + (cy + r * 0.22) + '" r="' + (r * 0.29) +
      '" fill="' + C.nucS + '"/>');
  }

  // ------------------------------------------------------------ Tierzelle
  function animalCell() {
    var blob = 'M200 20C290 10 380 60 382 150C384 240 300 286 204 282C104 286 18 242 20 150C22 60 112 12 200 20Z';
    var s = '';
    s += P('cyto', '<path d="' + blob + '" fill="' + C.cyto + '"/>');
    s += P('membrane', '<path d="' + blob + '" fill="none" stroke="' + C.mem + '" stroke-width="6.5"/>' +
      '<path d="' + blob + '" fill="none" stroke="#000" stroke-opacity="0" stroke-width="24" pointer-events="stroke"/>');
    s += P('rer', '<g fill="none" stroke="' + C.er + '" stroke-width="7" stroke-linecap="round">' +
      '<path d="M150 108C128 130 128 168 150 190"/><path d="M138 98C110 128 110 172 138 200"/><path d="M126 90C94 124 94 178 126 208"/></g>' +
      dots([[133, 127], [129, 149], [133, 171], [118, 122], [112.5, 150], [118, 178], [103.5, 118], [97.5, 150], [103.5, 182]], 2.7, C.ribo));
    s += nucleus(206, 148, 46);
    s += P('ser', '<g fill="none" stroke="' + C.ser + '" stroke-width="6.5" stroke-linecap="round">' +
      '<path d="M256 180C272 188 266 204 282 208C296 212 290 228 304 234"/><path d="M250 196C258 210 248 220 260 232"/></g>');
    s += P('golgi', '<g fill="none" stroke="' + C.golgi + '" stroke-width="6" stroke-linecap="round">' +
      '<path d="M270 80C288 72 310 72 328 80"/><path d="M266 92C288 83 312 83 334 92"/><path d="M268 104C288 96 312 96 332 104"/><path d="M274 116C290 109 308 109 324 116"/></g>');
    s += P('vesicle', hit(350, 108, 16) +
      '<circle cx="348" cy="97" r="6.5" fill="' + C.ves + '" stroke="' + C.golgi + '" stroke-width="2.5"/>' +
      '<circle cx="354" cy="118" r="5.5" fill="' + C.ves + '" stroke="' + C.golgi + '" stroke-width="2.5"/>');
    s += mito(130, 60, -20) + mito(138, 240, 10) + mito(326, 186, -55);
    s += lyso(64, 128, 10) + lyso(222, 250, 11);
    s += ribos([[172, 222], [181, 229], [190, 221]]) + ribos([[244, 52], [253, 58], [261, 50]]) + ribos([[70, 178], [79, 185], [62, 190]]);
    return s;
  }

  // --------------------------------------------------------- Pflanzenzelle
  function plantCell() {
    var s = '';
    s += P('wall', '<rect x="6" y="24" width="388" height="270" rx="34" fill="' + C.wall + '" stroke="' + C.wallS + '" stroke-width="3"/>');
    s += P('cyto', '<rect x="27" y="45" width="346" height="228" rx="18" fill="#EEF8D8"/>');
    s += P('membrane', '<rect x="27" y="45" width="346" height="228" rx="18" fill="none" stroke="' + C.mem + '" stroke-width="4.5"/>' +
      '<rect x="27" y="45" width="346" height="228" rx="18" fill="none" stroke="#000" stroke-opacity="0" stroke-width="13" pointer-events="stroke"/>');
    s += P('vacuole', '<path d="M176 104C216 84 286 88 312 114C334 138 330 204 308 226C282 250 206 248 180 228C150 206 146 130 176 104Z" fill="' +
      C.vac + '" stroke="' + C.vacS + '" stroke-width="3"/>');
    s += P('er', '<g fill="none" stroke="' + C.er + '" stroke-width="5.5" stroke-linecap="round">' +
      '<path d="M118 82C132 96 134 116 122 132"/><path d="M128 74C146 94 148 120 132 140"/></g>' +
      dots([[130, 96], [132, 116], [142, 90], [146, 110], [139, 130]], 2.4, C.ribo));
    s += nucleus(82, 104, 30);
    s += P('golgi', '<g fill="none" stroke="' + C.golgi + '" stroke-width="4.5" stroke-linecap="round">' +
      '<path d="M134 57C146 51 160 51 172 57"/><path d="M132 66C146 60 160 60 174 66"/><path d="M136 75C147 70 159 70 170 75"/></g>');
    s += chloro(240, 68, 0) + chloro(316, 80, 24) + chloro(354, 164, 90) + chloro(296, 256, -6) + chloro(60, 200, 84) + chloro(102, 250, -16);
    s += mito(196, 259, 4, 0.8) + mito(118, 180, -68, 0.8);
    s += ribos([[40, 150], [48, 157], [56, 149]]) + ribos([[346, 232], [354, 239], [361, 230]]) + ribos([[250, 262], [258, 268], [244, 268]]);
    return s;
  }

  // ------------------------------------------------------------ Bakterium
  function bacterium() {
    var s = '';
    var pili = [[90, 90, 82, 68], [136, 85, 133, 62], [190, 85, 191, 62], [244, 86, 250, 64], [280, 98, 294, 80],
      [96, 212, 88, 234], [176, 215, 176, 238], [232, 214, 238, 236], [276, 204, 290, 222],
      [52, 128, 30, 120], [52, 172, 30, 180]];
    s += P('pili', pili.map(function (p) {
      return '<path d="M' + p[0] + ' ' + p[1] + 'L' + p[2] + ' ' + p[3] + '" stroke="#8A6B3A" stroke-width="2.5" stroke-linecap="round"/>' +
        '<path d="M' + p[0] + ' ' + p[1] + 'L' + p[2] + ' ' + p[3] + '" stroke="#000" stroke-opacity="0" stroke-width="12" pointer-events="stroke"/>';
    }).join(''));
    var fl = 'M298 150C318 118 334 182 352 150C366 124 382 174 396 146';
    s += P('flagellum', '<path d="' + fl + '" fill="none" stroke="#8A6B3A" stroke-width="5" stroke-linecap="round"/>' +
      '<path d="' + fl + '" fill="none" stroke="#000" stroke-opacity="0" stroke-width="22" pointer-events="stroke"/>');
    s += P('wall', '<rect x="46" y="82" width="258" height="136" rx="68" fill="#C9AE7C" stroke="#7A6238" stroke-width="3"/>');
    s += P('cyto', '<rect x="63" y="99" width="224" height="102" rx="51" fill="#FFF3CF"/>');
    s += P('membrane', '<rect x="63" y="99" width="224" height="102" rx="51" fill="none" stroke="' + C.mem + '" stroke-width="4.5"/>' +
      '<rect x="63" y="99" width="224" height="102" rx="51" fill="none" stroke="#000" stroke-opacity="0" stroke-width="11" pointer-events="stroke"/>');
    var nuc = 'M150 150C140 122 176 118 182 140C188 160 204 122 220 138C236 156 206 178 196 162C188 150 178 184 158 176C146 170 156 160 150 150Z';
    s += P('nucleoid', '<path d="' + nuc + '" fill="#000" fill-opacity="0" pointer-events="all"/>' +
      '<path d="' + nuc + '" fill="none" stroke="' + C.nucS + '" stroke-width="4.5" stroke-linejoin="round"/>' +
      '<path d="' + nuc + '" fill="none" stroke="#000" stroke-opacity="0" stroke-width="14" pointer-events="stroke"/>');
    [[250, 128, 9], [238, 176, 8], [106, 158, 8]].forEach(function (p) {
      s += P('plasmid', hit(p[0], p[1], p[2] + 6) + '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + p[2] + '" fill="none" stroke="#D94F8C" stroke-width="3.5"/>');
    });
    s += ribos([[92, 128], [101, 136], [110, 126]]) + ribos([[262, 152], [271, 160], [259, 164]]) +
      ribos([[128, 184], [138, 189], [146, 181]]) + ribos([[198, 110], [208, 106], [216, 113]]) + ribos([[196, 186], [206, 190], [214, 184]]);
    return s;
  }

  // ----------------------------------------------------------- Biomembran
  function lipid(x, y, dir) {
    var y1 = y + dir * 8;
    var tails = 'M' + (x - 3.5) + ' ' + y1 + 'q-3 ' + (dir * 7.5) + ' 0 ' + (dir * 15) + 't0 ' + (dir * 15) +
      'M' + (x + 3.5) + ' ' + y1 + 'q3 ' + (dir * 7.5) + ' 0 ' + (dir * 15) + 't0 ' + (dir * 15);
    var top = dir > 0 ? y1 : y1 - 30;
    return P('tail', '<rect x="' + (x - 9) + '" y="' + top + '" width="18" height="30" fill="#000" fill-opacity="0" pointer-events="all"/>' +
      '<path d="' + tails + '" fill="none" stroke="#C99A3C" stroke-width="2.6" stroke-linecap="round"/>') +
      P('head', hit(x, y, 10) + '<circle cx="' + x + '" cy="' + y + '" r="8" fill="#FFC857" stroke="#B77A12" stroke-width="2.5"/>');
  }
  function sugar(pts) {
    var d = 'M' + pts.map(function (p) { return p[0] + ' ' + p[1]; }).join('L');
    return '<path d="' + d + '" fill="none" stroke="#C24F80" stroke-width="2"/>' + dots(pts.slice(1), 5, '#F28BB3');
  }
  function membrane() {
    var s = '<rect x="0" y="0" width="420" height="66" fill="#E3F4FF"/><rect x="0" y="174" width="420" height="66" fill="#FFF1D6"/>' +
      '<text x="10" y="19" class="dg-t">außen</text><text x="10" y="231" class="dg-t">innen (Zellplasma)</text>';
    for (var x = 16; x <= 376; x += 20) {
      if ((x > 84 && x < 130) || (x > 228 && x < 272)) continue;
      s += lipid(x, 78, 1) + lipid(x, 162, -1);
    }
    s += P('channel', '<rect x="87" y="60" width="17" height="120" rx="8.5" fill="#8D9BF5" stroke="#4553B8" stroke-width="3"/>' +
      '<rect x="108" y="60" width="17" height="120" rx="8.5" fill="#8D9BF5" stroke="#4553B8" stroke-width="3"/>' +
      '<rect x="102" y="62" width="8" height="116" fill="#000" fill-opacity="0" pointer-events="all"/>');
    s += P('integral', '<path transform="translate(-3 0)" d="M236 66C236 54 266 54 266 68C266 90 258 100 262 120C266 140 270 160 264 176C258 188 238 186 236 174C232 156 242 140 238 120C234 100 236 86 236 66Z" fill="#5CCDB0" stroke="#2A8C73" stroke-width="3"/>');
    s += P('carb', hit(247, 32, 18) + sugar([[248, 57], [248, 46], [242, 36], [249, 26], [242, 16]]) + sugar([[249, 26], [260, 21]]) +
      hit(338, 54, 14) + sugar([[336, 70], [337, 60], [342, 50], [336, 40]]));
    s += P('peripheral', '<ellipse cx="186" cy="183" rx="25" ry="12.5" fill="#FF9F7A" stroke="#C2512A" stroke-width="3"/>');
    return s;
  }

  // ----------------------------------------------- Plasmolyse (Zwiebelzelle)
  function plasmo(o) {
    var pl = o && o.state === 'plasmo';
    var s = '<rect x="0" y="0" width="400" height="240" fill="' + (pl ? '#FFF1C9' : '#E6F5FF') + '"/>';
    s += P('wall', '<rect x="40" y="32" width="320" height="180" rx="22" fill="' + C.wall + '" stroke="' + C.wallS + '" stroke-width="3"/>');
    if (!pl) {
      s += P('membrane', '<rect x="57" y="49" width="286" height="146" rx="10" fill="#EEF8D8" stroke="' + C.mem + '" stroke-width="4.5"/>');
      s += P('vacuole', '<rect x="80" y="66" width="240" height="112" rx="38" fill="#E7A9DB" stroke="#A8479A" stroke-width="3"/>');
      s += '<circle cx="74" cy="178" r="8" fill="' + C.nuc + '" stroke="' + C.nucS + '" stroke-width="2.5"/>';
    } else {
      s += P('gap', '<rect x="57" y="49" width="286" height="146" rx="10" fill="#FFF1C9"/>');
      s += P('membrane', '<path d="M128 78C176 60 252 64 288 86C314 104 310 150 284 166C246 188 164 184 128 166C98 150 98 92 128 78Z" fill="#EEF8D8" stroke="' +
        C.mem + '" stroke-width="4.5"/>');
      s += P('vacuole', '<ellipse cx="208" cy="122" rx="72" ry="33" fill="#C76DB6" stroke="#8E2F80" stroke-width="3"/>');
      s += '<circle cx="121" cy="124" r="8" fill="' + C.nuc + '" stroke="' + C.nucS + '" stroke-width="2.5"/>';
      if (o.arrows) {
        s += '<g fill="#2E8FD0" stroke="#2E8FD0" stroke-width="4" stroke-linecap="round">' +
          '<path d="M300 122h30"/><path d="M338 122l-9-6v12z" stroke-width="1"/>' +
          '<path d="M206 170v22"/><path d="M206 200l-6-9h12z" stroke-width="1"/></g>' +
          '<text x="304" y="112" class="dg-t" style="fill:#2E8FD0">H₂O</text>';
      }
    }
    s += '<text x="8" y="20" class="dg-t">' + (pl ? 'außen: konzentrierte Salzlösung' : 'außen: Wasser') + '</text>';
    return s;
  }

  // ------------------------------------------------------- Beschreibungen
  var D = {
    animalCell: {
      title: 'Tierzelle', vb: '0 0 400 300', draw: animalCell,
      order: ['membrane', 'cyto', 'nucleus', 'rer', 'ser', 'golgi', 'vesicle', 'mito', 'lyso', 'ribo'],
      parts: {
        membrane: { n: 'Zellmembran', pin: [372, 32], at: [346, 64] },
        cyto: { n: 'Zellplasma', pin: [300, 148] },
        nucleus: { n: 'Zellkern', pin: [188, 130] },
        rer: { n: 'raues ER', pin: [76, 152], at: [97, 152] },
        ser: { n: 'glattes ER', pin: [300, 258], at: [296, 229] },
        golgi: { n: 'Golgi-Apparat', pin: [298, 56], at: [298, 76] },
        vesicle: { n: 'Vesikel', pin: [366, 142], at: [356, 122] },
        mito: { n: 'Mitochondrium', pin: [92, 252], at: [112, 244] },
        lyso: { n: 'Lysosom', pin: [44, 106], at: [58, 121] },
        ribo: { n: 'Ribosom', pin: [226, 38], at: [246, 51] }
      }
    },
    plantCell: {
      title: 'Pflanzenzelle', vb: '0 0 400 300', draw: plantCell,
      order: ['wall', 'membrane', 'cyto', 'vacuole', 'nucleus', 'chloro', 'mito', 'er', 'golgi', 'ribo'],
      parts: {
        wall: { n: 'Zellwand', pin: [300, 12], at: [300, 33] },
        membrane: { n: 'Zellmembran', pin: [352, 206], at: [373, 206] },
        cyto: { n: 'Zellplasma', pin: [50, 244] },
        vacuole: { n: 'Vakuole', pin: [240, 168] },
        nucleus: { n: 'Zellkern', pin: [78, 100] },
        chloro: { n: 'Chloroplast', pin: [354, 118], at: [354, 140] },
        mito: { n: 'Mitochondrium', pin: [150, 262], at: [174, 260] },
        er: { n: 'ER (Endoplasmatisches Retikulum)', pin: [160, 108], at: [145, 108] },
        golgi: { n: 'Golgi-Apparat', pin: [198, 54], at: [176, 62] },
        ribo: { n: 'Ribosom', pin: [38, 124], at: [46, 148] }
      }
    },
    bacterium: {
      title: 'Bakterienzelle', vb: '0 0 400 300', draw: bacterium,
      order: ['wall', 'membrane', 'cyto', 'nucleoid', 'plasmid', 'ribo', 'flagellum', 'pili'],
      parts: {
        wall: { n: 'Zellwand', pin: [216, 56], at: [216, 86] },
        membrane: { n: 'Zellmembran', pin: [136, 246], at: [136, 201] },
        cyto: { n: 'Zellplasma', pin: [128, 114] },
        nucleoid: { n: 'Bakterienchromosom (DNA)', pin: [166, 132], at: [180, 142] },
        plasmid: { n: 'Plasmid', pin: [276, 112], at: [259, 124] },
        ribo: { n: 'Ribosom', pin: [84, 152], at: [98, 134] },
        flagellum: { n: 'Flagellum (Geißel)', pin: [352, 112], at: [352, 148] },
        pili: { n: 'Pili (Haftfäden)', pin: [18, 150], at: [32, 122] }
      }
    },
    membrane: {
      title: 'Biomembran (Flüssig-Mosaik-Modell)', vb: '0 0 420 240', draw: membrane,
      order: ['head', 'tail', 'channel', 'integral', 'carb', 'peripheral'],
      parts: {
        head: { n: 'hydrophiler Kopf', pin: [404, 70], at: [385, 78] },
        tail: { n: 'hydrophober Schwanz', pin: [404, 122], at: [382, 106] },
        channel: { n: 'Kanalprotein', pin: [106, 38], at: [106, 62] },
        integral: { n: 'integrales Protein', pin: [284, 206], at: [256, 180] },
        carb: { n: 'Kohlenhydratkette', pin: [214, 26], at: [240, 31] },
        peripheral: { n: 'peripheres Protein', pin: [186, 214], at: [186, 194] }
      }
    },
    plasmo: {
      title: 'Pflanzenzelle im Versuch', vb: '0 0 400 240', draw: plasmo,
      order: ['wall', 'membrane', 'vacuole'],
      parts: {
        wall: { n: 'Zellwand', pin: [200, 16], at: [200, 38] },
        membrane: { n: 'Zellmembran', pin: [330, 224], at: [300, 162] },
        vacuole: { n: 'Vakuole', pin: [208, 122] },
        gap: { n: 'Raum zwischen Zellwand und Zellmembran', pin: [78, 70] }
      }
    }
  };

  function pinSvg(p, txt, cls) {
    var x = p.pin[0], y = p.pin[1], s = '<g class="pin ' + (cls || '') + '">';
    if (p.at) {
      s += '<line x1="' + x + '" y1="' + y + '" x2="' + p.at[0] + '" y2="' + p.at[1] + '" class="pin-line"/>' +
        '<circle cx="' + p.at[0] + '" cy="' + p.at[1] + '" r="3.2" class="pin-dot"/>';
    }
    var r = cls === 'num' ? 11.5 : 14;
    s += '<circle cx="' + x + '" cy="' + y + '" r="' + (r + 5) + '" class="pin-ring"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" class="pin-b"/>' +
      '<text x="' + x + '" y="' + y + '" class="pin-t" text-anchor="middle" dy=".36em">' + txt + '</text></g>';
    return s;
  }

  /* o.mark  – Struktur hervorheben und mit „?“ versehen
     o.marks – [{part, text, cls}] mehrere Marken (für die Auflösung)
     o.legend – alle Strukturen nummerieren
     o.tap   – Strukturen antippbar machen
     o.state – Zustand (nur Plasmolyse-Skizze) */
  function render(name, o) {
    o = o || {};
    var d = D[name];
    if (!d) return '';
    var body = d.draw(o), extra = '', cls = 'dg';
    var marks = o.marks ? o.marks.slice() : [];
    if (o.mark) marks.push({ part: o.mark, text: '?', cls: '' });
    if (marks.length) {
      cls += ' dg-mark';
      marks.forEach(function (m) {
        body = body.split('data-part="' + m.part + '"').join('data-part="' + m.part + '" data-on="' + (m.cls || '1') + '"');
        if (d.parts[m.part]) extra += pinSvg(d.parts[m.part], m.text, m.cls);
      });
    }
    if (o.legend) {
      cls += ' dg-legend';
      d.order.forEach(function (id, i) { extra += pinSvg(d.parts[id], i + 1, 'num'); });
    }
    if (o.tap) cls += ' dg-tap';
    return '<svg class="' + cls + '" viewBox="' + d.vb + '" role="img" aria-label="Skizze: ' + d.title + '">' + body + extra + '</svg>';
  }

  function names(name) {
    var out = {}, d = D[name];
    Object.keys(d.parts).forEach(function (k) { out[k] = d.parts[k].n; });
    return out;
  }
  function legend(name) {
    var d = D[name];
    return d.order.map(function (id) { return d.parts[id].n; });
  }

  window.Diagrams = { render: render, names: names, legend: legend, has: function (n) { return !!D[n]; }, title: function (n) { return D[n].title; } };
})();
