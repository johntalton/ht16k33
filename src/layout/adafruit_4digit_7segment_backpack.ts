import { Layout, ComLayout } from '../defs.js'
import { FourSevenSegmentDotColonLayout, SevenSegmentDotLayout } from '../util/defs.js'

export class Adafruit4Digit7SegmentBackpack {
	static get productUrl() { return 'https://www.adafruit.com/product/1002' }

	static toLayout(layout: FourSevenSegmentDotColonLayout): Layout {
		function makeCom(digit: SevenSegmentDotLayout): ComLayout {
			const { A, B, C, D, E, F, G, DP } = digit
			return {
				row0: A,
				row1: B,
				row2: C,
				row3: D,
				row4: E,
				row5: F,
				row6: G,
				row7: DP
			}
		}

		return {
			com0: makeCom(layout.digit.one),
			com1: makeCom(layout.digit.two),
			com2: { row1: layout.colon },
			com3: makeCom(layout.digit.three),
			com4: makeCom(layout.digit.four)
		}
	}

	static fromLayout(layout: Layout): FourSevenSegmentDotColonLayout {
		function fromCom(com?: ComLayout) {
			return {
				A: com?.row0 ?? false,
				B: com?.row1 ?? false,
				C: com?.row2 ?? false,
				D: com?.row3 ?? false,
				E: com?.row4 ?? false,
				F: com?.row5 ?? false,
				G: com?.row6 ?? false,
				DP: com?.row7 ?? false
			}
		}

		return {
			colon: layout.com2?.row1 ?? false,
			digit: {
				one: fromCom(layout.com0),
				two: fromCom(layout.com1),
				three: fromCom(layout.com3),
				four: fromCom(layout.com4)
			}
		}
	}
}