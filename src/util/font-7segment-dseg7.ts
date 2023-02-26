
import { FourSevenSegmentDotColonLayout, SevenSegmentDotLayout } from './defs.js'

export function _encodeLayoutDigit(digit: string, DP: boolean): SevenSegmentDotLayout {
	const font: { [key: string]: SevenSegmentDotLayout } = {
		' ': { A: false, B: false, C: false, D: false, E: false, F: false, G: false, DP },
		'-': { A: false, B: false, C: false, D: false, E: false, F: false, G:  true, DP },
		'_': { A: false, B: false, C: false, D:  true, E: false, F: false, G: false, DP },
		'.': { A: false, B: false, C: false, D: false, E: false, F: false, G: false, DP:  true },
		'°': { A:  true, B:  true, C: false, D: false, E: false, F:  true, G:  true, DP },

		'0': { A:  true, B:  true, C:  true, D:  true, E:  true, F:  true, G: false, DP },
		'1': { A: false, B:  true, C:  true, D: false, E: false, F: false, G: false, DP },
		'2': { A:  true, B:  true, C: false, D:  true, E:  true, F: false, G:  true, DP },
		'3': { A:  true, B:  true, C:  true, D:  true, E: false, F: false, G:  true, DP },
		'4': { A: false, B:  true, C:  true, D: false, E: false, F:  true, G:  true, DP },
		'5': { A:  true, B: false, C:  true, D:  true, E: false, F:  true, G:  true, DP },
		'6': { A: false, B: false, C:  true, D:  true, E:  true, F:  true, G:  true, DP },
		'7': { A:  true, B:  true, C:  true, D: false, E: false, F: false, G: false, DP },
		'8': { A:  true, B:  true, C:  true, D:  true, E:  true, F:  true, G:  true, DP },
		'9': { A:  true, B:  true, C:  true, D: false, E: false, F:  true, G:  true, DP },

		'b': { A: false, B: false, C:  true, D:  true, E:  true, F:  true, G:  true, DP },
		'c': { A: false, B: false, C: false, D:  true, E:  true, F: false, G:  true, DP },
		'd': { A: false, B:  true, C:  true, D:  true, E:  true, F: false, G:  true, DP },
		'h': { A: false, B: false, C:  true, D: false, E:  true, F:  true, G:  true, DP },
		'i': { A: false, B: false, C:  true, D: false, E: false, F: false, G: false, DP },
		'k': { A:  true, B: false, C:  true, D: false, E:  true, F:  true, G:  true, DP },
		'n': { A: false, B: false, C:  true, D: false, E:  true, F: false, G:  true, DP },
		'o': { A: false, B: false, C:  true, D:  true, E:  true, F: false, G:  true, DP },
		'q': { A:  true, B:  true, C:  true, D: false, E: false, F:  true, G:  true, DP },
		'r': { A: false, B: false, C: false, D: false, E:  true, F: false, G:  true, DP },
		't': { A: false, B: false, C: false, D:  true, E:  true, F:  true, G:  true, DP },
		'u': { A: false, B: false, C:  true, D:  true, E:  true, F: false, G: false, DP },
		'y': { A: false, B:  true, C:  true, D:  true, E: false, F:  true, G:  true, DP },


		'A': { A:  true, B:  true, C:  true, D: false, E:  true, F:  true, G:  true, DP },
		'B': { A:  true, B:  true, C:  true, D:  true, E:  true, F:  true, G:  true, DP },
		'C': { A:  true, B: false, C: false, D:  true, E:  true, F:  true, G: false, DP },
		'D': { A:  true, B:  true, C:  true, D:  true, E:  true, F:  true, G: false, DP },
		'E': { A:  true, B: false, C: false, D:  true, E:  true, F:  true, G:  true, DP },
		'F': { A:  true, B: false, C: false, D: false, E:  true, F:  true, G:  true, DP },
		'G': { A:  true, B: false, C:  true, D:  true, E:  true, F:  true, G: false, DP },
		'H': { A: false, B:  true, C:  true, D: false, E:  true, F:  true, G:  true, DP },
		'I': { A: false, B:  true, C:  true, D: false, E: false, F: false, G: false, DP },
		'I*': { A: false, B: false, C: false, D: false, E:  true, F:  true, G: false, DP },
		'J': { A: false, B:  true, C:  true, D:  true, E:  true, F: false, G: false, DP },
		'K': { A: false, B:  true, C:  true, D: false, E:  true, F:  true, G:  true, DP },
		'L': { A: false, B: false, C: false, D:  true, E:  true, F:  true, G: false, DP },
		'M': { A:  true, B:  true, C:  true, D: false, E:  true, F:  true, G: false, DP },
		'N': { A:  true, B:  true, C:  true, D: false, E:  true, F:  true, G: false, DP },
		'O': { A:  true, B:  true, C:  true, D:  true, E:  true, F:  true, G: false, DP },
		'P': { A:  true, B:  true, C: false, D: false, E:  true, F:  true, G:  true, DP },
		'S': { A: false, B: false, C:  true, D:  true, E: false, F:  true, G:  true, DP },
		'U': { A: false, B:  true, C:  true, D:  true, E:  true, F:  true, G: false, DP },
		'V': { A: false, B:  true, C:  true, D:  true, E:  true, F:  true, G: false, DP },
		'W': { A: false, B:  true, C:  true, D:  true, E:  true, F:  true, G:  true, DP },
		'X': { A: false, B:  true, C:  true, D: false, E:  true, F:  true, G:  true, DP },
		'Z': { A:  true, B:  true, C: false, D:  true, E:  true, F: false, G: false, DP },
	}

	return font[digit] ?? { A:  true, B:  true, C:  true, D:  true, E:  true, F:  true, G:  true, DP:  true }
}

export function _encodeLayoutDSEG7(digit: string, DP: boolean): SevenSegmentDotLayout {
	// https://www.keshikan.net/fonts-e.html
	const dseg7: { [key: string]: string } = {
		'a': 'A',
		'b': 'b',
		'c': 'c',
		'd': 'd',
		'e': 'E',
		'f': 'F',
		'g': 'G',
		'h': 'h',
		'i': 'i',
		'j': 'J',
		'k': 'k',
		'l': 'L',
		'm': 'M',
		'n': 'n',
		'o': 'o',
		'p': 'P',
		'q': 'q',
		'r': 'r',
		's': 'S',
		't': 't',
		'u': 'u',
		'v': 'V',
		'w': 'W',
		'x': 'X',
		'y': 'y',
		'z': 'Z',
	}

	return _encodeLayoutDigit(dseg7[digit.toLowerCase()] ?? digit, DP)
}

export function encode4Digit(digit: string, DP: boolean) { return _encodeLayoutDSEG7(digit, DP) }

export class Font7SegmentDSEG {
	static encode4Digit(digits: string, colon: boolean): FourSevenSegmentDotColonLayout {
		const dp = false

		return {
			colon: colon,
			digit: {
				one: _encodeLayoutDSEG7(digits[0], dp),
				two: _encodeLayoutDSEG7(digits[1], dp),
				three: _encodeLayoutDSEG7(digits[2], dp),
				four: _encodeLayoutDSEG7(digits[3], dp)
			}
		}
	}
}