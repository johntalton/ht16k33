import { FourSevenSegmentDotColonLayout } from './defs.js'
import { encodeLayoutDSEG7 } from './dseg7.js'
import { ledSegmentASCII } from './segment-ascii.js'


export class Segment {
	static encodeTime24_4Digit_7Segment(time: Date, colon: boolean): FourSevenSegmentDotColonLayout {
		const h = time.getHours()
		const m = time.getMinutes()

		const [ digit0, digit1 ] = h.toString().padStart(2, '0').split('')
		const [ digit2, digit3 ] = m.toString().padStart(2, '0').split('')

		return Segment.encodeString_4Digit_DSEG7([ digit0, digit1, digit2, digit3 ].join(''), colon)
	}

	static _encodeTime12_4Digit_7Segment(time: Date, colon: boolean): FourSevenSegmentDotColonLayout {
		const h = time.getHours()
		const m = time.getMinutes()

		const pm = h > 12
		const H = pm ? h - 12 : h

		const [ digit0, digit1 ] = H.toString().padStart(2, ' ').split('')
		const [ digit2, digit3 ] = m.toString().padStart(2, '0').split('')

		return Segment.encodeString_4Digit_DSEG7([ digit0, digit1, digit2, digit3 ].join(''), colon)
	}


	static encodeString_4Digit_DSEG7(digits: string, colon: boolean): FourSevenSegmentDotColonLayout {
		const dp = false

		return {
			colon: colon,
			digit: {
				one: encodeLayoutDSEG7(digits[0], dp),
				two: encodeLayoutDSEG7(digits[1], dp),
				three: encodeLayoutDSEG7(digits[2], dp),
				four: encodeLayoutDSEG7(digits[3], dp)
			}
		}
	}

	static encodeString_4Digit_SegmentASCII(digits: string, colon: boolean): FourSevenSegmentDotColonLayout {
		return {
			colon,
			digit: {
				one: ledSegmentASCII(digits[0]),
				two: ledSegmentASCII(digits[1]),
				three: ledSegmentASCII(digits[2]),
				four: ledSegmentASCII(digits[3])
			}
		}
	}

}


