// const OpenAI14Segment = {
//   'A': 'BCEFG1G2KMN',
//   'B': 'ABCDEFG1G2JKLN',
//   'C': 'ADEF',
//   'D': 'ABCDEFMNFG1G2',
//   'E': 'ABCDEFHG1G2',
//   'F': 'ABCG1G2HEF',
//   'G': 'ABCDEFG1G2N',
//   'H': 'ABCG1G2EFKMN',
//   'I': 'BCHK',
//   'J': 'BCDHKLN',
//   'K': 'AFG1G2CEKMN',
//   'L': 'DEFHG1G2',
//   'M': 'ACEG1G2KHNM',
//   'N': 'ACG1G2EFKMN',
//   'O': 'ABCDEFG1G2',
//   'P': 'ABCG1G2EFJK',
//   'Q': 'ABCDEFG1G2M',
//   'R': 'ABCG1G2EFJKM',
//   'S': 'ABCDFG1G2N',
//   'T': 'AJM',
//   'U': 'BCDEFG1G2N',
//   'V': 'CEG1G2AKM',
//   'W': 'ACEG1G2KHNM',
//   'X': 'BCEFG1G2AKM',
//   'Y': 'BDG1G2AKM',
//   'Z': 'ABDEFG1G2MN'
// }

export const Bespoke: { [key: string]: string } = {
  ' ': '',
  '"': 'FJ',
  '$': '',
  '%': '',
  '&': '',
  '\'': '',
  '(': '',
  ')': '',
  '*': '',
  '+': '',
  ',': '',
  '-': '',
  '.': '.',
  '/': '',
  '0': 'ABCDEFKL',
  '1': 'BCK', // 'JM'
  '2': 'ABDG2L',
  '3': 'ABCDG2',
  '4': 'BCG2J', //'BCG2K',
  '5': 'ACDG2H',
  '6': 'DEFG1N',
  '7': 'AKM',
  '8': 'ABCDEFG1G2',
  '9': 'ABCG2H',
  ':': '',
  '<': 'KN',
  '=': '',
  '>': 'HL',
  '?': 'ABG2M',
  '@': '',
  'A': 'ABCEFG1G2',
  'B': 'ABCDG2JM',
  'C': 'ADEF',
  'D': 'ABCDJM',
  'E': 'ADEFG1G2',
  'F': 'AEFG1G2',
  'G': 'ACDEFG2',
  'H': 'BCEFG1G2',
  'I': 'ADJM',
  'J': 'BCDE',
  'K': 'EFG1KN',
  'L': 'DEF',
  'M': 'BCEFHKM',
  'N': 'BCEFHN',
  'O': 'ABCDEF',
  'P': 'ABEFG1G2',
  'Q': 'ABCDEFN',
  'R': 'ABEFG1G2N',
  'S': 'ACDFG1G2HN',
  'T': 'AJM',
  'U': 'BCDEF',
  'V': 'EFKL',
  'W': 'BCEFJLN',
  'X': 'HKLN',
  'Y': 'HKM',
  'Z': 'ADKL',
  '\\': 'HN',
  '^': 'FH',
  '_': 'D',
  '`': 'H',
  '|': 'JM',
  '~': 'ABCDEFG1G2HJKLMN'
}

export function _toSegment(strDef: string) {
  return {
    A: strDef.includes('A'),
    B: strDef.includes('B'),
    C: strDef.includes('C'),
    D: strDef.includes('D'),
    E: strDef.includes('E'),
    F: strDef.includes('F'),
    G1: strDef.includes('G1'),
    G2: strDef.includes('G2'),
    H: strDef.includes('H'),
    J: strDef.includes('J'),
    K: strDef.includes('K'),
    L: strDef.includes('L'),
    M: strDef.includes('M'),
    N: strDef.includes('N'),
    DP: strDef.includes('.')
  }

}

export function _to4dig14seg(letters: string) {
  const [ A, B, C, D ] = letters.split('')
  return {
    digit: {
      one: _toSegment(Bespoke[A]),
      two: _toSegment(Bespoke[B]),
      three: _toSegment(Bespoke[C]),
      four: _toSegment(Bespoke[D])
    }
  }
}

export class Font14SegmentBespoke {
  static encode4Digit(digit: string) {
    return _to4dig14seg(digit)
  }
}