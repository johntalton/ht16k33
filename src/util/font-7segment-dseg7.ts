
import { FontUtil } from './font.js'

const DSEG7: { [key: string]: string } = {
	' ': '',
	'-': 'G',
	'_': 'D',
	'.': 'DP',
	'°': 'ABFG',

	'0': 'ABCDEF',
	'1': 'BC',
	'2': 'ABDEG',
	'3': 'ABCDG',
	'4': 'BCFG',
	'5': 'ACDFG',
	'6': 'CDEFG',
	'7': 'ABC',
	'8': 'ABCDEFG',
	'9': 'ABCFG',

	'b': 'CDEFG',
	'c': 'DEG',
	'd': 'BCDEG',
	'h': 'CEFG',
	'i': 'C',
	'k': 'ACEFG',
	'n': 'CEG',
	'o': 'CDEG',
	'q': 'ABCFG',
	'r': 'EG',
	't': 'DEFG',
	'u': 'CDE',
	'y': 'BCDFG',

	'A': 'ABCEFG',
	'B': 'ABCDEFG',
	'C': 'ADEF',
	'D': 'ABCDEF',
	'E': 'ADEFG',
	'F': 'AEFG',
	'G': 'ACDEF',
	'H': 'BCEFG',
	'I': 'BC',
	'I*': 'EF',
	'J': 'BCDE',
	'K': 'BCEFG',
	'L': 'DEF',
	'M': 'ABCEF',
	'N': 'ABCEF',
	'O': 'ABCDEF',
	'P': 'ABEFG',
	'S': 'CDFG',
	'U': 'BCDEF',
	'V': 'BCDEF',
	'W': 'BCDEFG',
	'X': 'BCEFG',
	'Z': 'ABDE',
}

const aliases: { [key: string]: string } = {
	// https://www.keshikan.net/fonts-e.html
	'a': 'A',
	'e': 'E',
	'f': 'F',
	'g': 'G',
	'j': 'J',
	'l': 'L',
	'm': 'M',
	'p': 'P',
	's': 'S',
	'v': 'V',
	'w': 'W',
	'x': 'X'
}

export class Font7SegmentDSEG {
	static encode4Digit(digit: string) {
		const resolvedDigit = aliases[digit] ?? digit

		return FontUtil.digits4FromSegmentMap(DSEG7, resolvedDigit)
	}
}
