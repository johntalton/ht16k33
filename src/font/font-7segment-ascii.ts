import { FourSevenSegmentDotColonLayout, SevenSegmentDotLayout } from '../util/defs.js'

// https://github.com/dmadison/LED-Segment-ASCII
export const DEFAULT_VALUE = 0b00000000

const SEVEN_SEGMENT_ASCII: { [key: string]: number } = {
	' ': 0b00000000,
	'!': 0b10000110,
	'"': 0b00100010,
	'#': 0b01111110,
	'$': 0b01101101,
	'%': 0b11010010,
	'&': 0b01000110,
	'\'': 0b00100000,
	'(': 0b00101001,
	')': 0b00001011,
	'*': 0b00100001,
	'+': 0b01110000,
	',': 0b00010000,
	'-': 0b01000000,
	'.': 0b10000000,
	'/': 0b01010010,
	'0': 0b00111111,
	'1': 0b00000110,
	'2': 0b01011011,
	'3': 0b01001111,
	'4': 0b01100110,
	'5': 0b01101101,
	'6': 0b01111101,
	'7': 0b00000111,
	'8': 0b01111111,
	'9': 0b01101111,
	':': 0b00001001,
	';': 0b00001101,
	'<': 0b01100001,
	'=': 0b01001000,
	'>': 0b01000011,
	'?': 0b11010011,
	'@': 0b01011111,
	'A': 0b01110111,
	'B': 0b01111100,
	'C': 0b00111001,
	'D': 0b01011110,
	'E': 0b01111001,
	'F': 0b01110001,
	'G': 0b00111101,
	'H': 0b01110110,
	'I': 0b00110000,
	'J': 0b00011110,
	'K': 0b01110101,
	'L': 0b00111000,
	'M': 0b00010101,
	'N': 0b00110111,
	'O': 0b00111111,
	'P': 0b01110011,
	'Q': 0b01101011,
	'R': 0b00110011,
	'S': 0b01101101,
	'T': 0b01111000,
	'U': 0b00111110,
	'V': 0b00111110,
	'W': 0b00101010,
	'X': 0b01110110,
	'Y': 0b01101110,
	'Z': 0b01011011,
	'[': 0b00111001,
	'\\': 0b01100100,
	']': 0b00001111,
	'^': 0b00100011,
	'_': 0b00001000,
	'`': 0b00000010,
	'a': 0b01011111,
	'b': 0b01111100,
	'c': 0b01011000,
	'd': 0b01011110,
	'e': 0b01111011,
	'f': 0b01110001,
	'g': 0b01101111,
	'h': 0b01110100,
	'i': 0b00010000,
	'j': 0b00001100,
	'k': 0b01110101,
	'l': 0b00110000,
	'm': 0b00010100,
	'n': 0b01010100,
	'o': 0b01011100,
	'p': 0b01110011,
	'q': 0b01100111,
	'r': 0b01010000,
	's': 0b01101101,
	't': 0b01111000,
	'u': 0b00011100,
	'v': 0b00011100,
	'w': 0b00010100,
	'x': 0b01110110,
	'y': 0b01101110,
	'z': 0b01011011,
	'{': 0b01000110,
	'|': 0b00110000,
	'}': 0b01110000,
	'~': 0b00000001,
	///'del': 0b00000000
}

export function _ledSegmentASCII(digit: string): SevenSegmentDotLayout {
  const value = SEVEN_SEGMENT_ASCII[digit] ?? DEFAULT_VALUE

  return {
    A: (value & 0b0000_0001) !== 0,
    B: (value & 0b0000_0010) !== 0,
    C: (value & 0b0000_0100) !== 0,
    D: (value & 0b0000_1000) !== 0,
    E: (value & 0b0001_0000) !== 0,
    F: (value & 0b0010_0000) !== 0,
    G: (value & 0b0100_0000) !== 0,
    DP: (value & 0b1000_0000) !== 0
  }
}

export class Font7SegmentASCII {
	static encode4Digit(digits: string, colon: boolean): FourSevenSegmentDotColonLayout {
		return {
			colon,
			digit: {
				one: _ledSegmentASCII(digits[0]),
				two: _ledSegmentASCII(digits[1]),
				three: _ledSegmentASCII(digits[2]),
				four: _ledSegmentASCII(digits[3])
			}
		}
	}
}