import { Layout, ComLayout } from '../defs.js'
import { FourSevenSegmentDotColonLayout, SevenSegmentDotLayout } from '../util/defs.js'

export class Adafruit_LED_BP056 {
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
}