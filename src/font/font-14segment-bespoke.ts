
import { FontUtil } from './font.js'
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
	'\\': 'HN',
	'^': 'FH',
	'_': 'D',
	'`': 'H',
	'|': 'JM',
	':': '',
	'<': 'KN',
	'=': '',
	'>': 'HL',
	'?': 'ABG2M',
	'@': '',
	'~': 'ABCDEFG1G2HJKLMN',

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

	'A': 'ABCEFG1G2',
	'B': 'ABCDG2JM',
	'C': 'ADEF',
	'D': 'ABCDJM',
	'E': 'ADEFG1', // 'ADEFG1G2',
	'F': 'AEFG1', // 'AEFG1G2',
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
	'Z': 'ADKL'
}

export class Font14SegmentBespoke {
	static encode4Digit(digit: string, _colon: boolean) {
		return FontUtil.digits4FromSegmentMap(Bespoke, digit)
	}
}