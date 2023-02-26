import { Layout, ComLayout } from '../defs.js'
import { FourFourteenSegmentDotLayout, FourteenSegmentDotLayout } from '../util/defs.js'

export class Adafruit4Digit14SegmentFeatherwing {
	static get productUrl() { return 'https://www.adafruit.com/product/3089' }

	static toLayout(layout: FourFourteenSegmentDotLayout): Layout {
		function makeCom(digit: FourteenSegmentDotLayout): ComLayout {
			const { A, B, C, D, E, F, G, G1, G2, H, J, K, L, M, N, DP } = digit

			const useG = G1 === undefined && G2 == undefined && G !== undefined

			const realG1 = useG ? G : G1
			const realG2 = useG ? G : G2

			return {
				row0: A,
				row1: B,
				row2: C,
				row3: D,
				row4: E,
				row5: F,
				row6: realG1,
				row7: realG2,
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
}
