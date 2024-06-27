import { Layout, ComLayout } from '../defs.js'

export type BiColor = 'red' | 'green' | 'yellow' | 'black'

export type SetPixel = {
	x: number,
	y: number,
	color: BiColor
}

// pin 1 controls col 5 (1 indexed) mapped to row4 (0 indexed) on the device
// and is Green, pin 2 is red

export class AdafruitMatrix8x8BiColor {
	static get productUrl() { return 'https://www.adafruit.com/product/902' }

	// static test() {
	// 	function _compare() {

	// 	}

	// 	function _test(valid: boolean) {
	// 		if(!valid) { throw new Error('fail') }
	// 	}

	// 	Adafruit_Matrix_BiColor_8x8.toLayout()
	// }

	// static toLayout(buffer: ArrayBuffer) {}

	static toLayout(layout: Array<SetPixel>): Layout {
		function colorC(c: string, x: number, y: number) {
			const [ sp, ] = layout
				.filter(sp => sp.y === y)
				.filter(sp => sp.x === x)
			if(sp === undefined) { return false }
			const { color } = sp
			return color === c || color === 'yellow'
		}

		function color1(x: number, y: number) {
			return colorC('green', x, y)
		}

		// writing this, vs color1, as a lambda, because... and example of code
		const color2 = (x: number, y: number) => colorC('red', x, y)

		function makeCom(y: number): ComLayout {
			return {
				row0: color1(0, y),
				row1: color1(1, y),
				row2: color1(2, y),
				row3: color1(3, y),
				row4: color1(4, y),
				row5: color1(5, y),
				row6: color1(6, y),
				row7: color1(7, y),

				row8: color2(0, y),
				row9: color2(1, y),
				row10: color2(2, y),
				row11: color2(3, y),
				row12: color2(4, y),
				row13: color2(5, y),
				row14: color2(6, y),
				row15: color2(7, y)
			}
		}

		return {
			com0: makeCom(0),
			com1: makeCom(1),
			com2: makeCom(2),
			com3: makeCom(3),
			com4: makeCom(4),
			com5: makeCom(5),
			com6: makeCom(6),
			com7: makeCom(7)
		}
	}

	static fromLayout(_layout: Layout): Array<SetPixel> {
		throw new Error('no implementation')
		//return {}
	}
}
