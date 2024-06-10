import { Layout, ComLayout } from '../defs.js'
import { FourFourteenSegmentDotLayout, FourteenSegmentDotLayout } from '../util/defs.js'

export class Adafruit4Digit14SegmentFeatherwing {
	static get productUrl() { return 'https://www.adafruit.com/product/3089' }

	static toLayout(layout: FourFourteenSegmentDotLayout): Layout {
		function makeCom(digit: FourteenSegmentDotLayout): ComLayout {
			const { A, B, C, D, E, F, G1, G2, H, J, K, L, M, N, DP } = digit

			return {
				row0: A,
				row1: B,
				row2: C,
				row3: D,
				row4: E,
				row5: F,
				row6: G1,
				row7: G2,
				row8: H,
				row9: J,
				row10: K,
				row11: L,
				row12: M,
				row13: N,
				row14: DP,
				row15: false
			}
		}

		return {
			com0: makeCom(layout.digit.one),
			com1: makeCom(layout.digit.two),
			com2: makeCom(layout.digit.three),
			com3: makeCom(layout.digit.four)
		}
	}

	static fromLayout(layout: Layout): FourFourteenSegmentDotLayout {
		function fromCom(com?: ComLayout) {
			return {
				A: com?.row0 ?? false,
				B: com?.row1 ?? false,
				C: com?.row2 ?? false,
				D: com?.row3 ?? false,
				E: com?.row4 ?? false,
				F: com?.row5 ?? false,
				G1: com?.row6 ?? false,
				G2: com?.row7 ?? false,
				H: com?.row8 ?? false,
				J: com?.row9 ?? false,
				K: com?.row10 ?? false,
				L: com?.row11 ?? false,
				M: com?.row12 ?? false,
				N: com?.row13 ?? false,
				DP: com?.row14 ?? false
			}
		}

		return {
			digit: {
				one: fromCom(layout.com0),
				two: fromCom(layout.com1),
				three: fromCom(layout.com3),
				four: fromCom(layout.com4)
			}
		}
	}
}
