import { Layout, ComLayout } from '../defs.js'

export type BiColor = 'red' | 'green' | 'yellow' | 'black'

export type SetPixel = {
	x: number,
	y: number,
	color: BiColor
}

export class Adafruit_Matrix_BiColor_8x8 {
	static test() {
		function _compare() {

		}

		function _test(valid: boolean) {
			if(!valid) { throw new Error('fail') }
		}

		Adafruit_Matrix_BiColor_8x8.toLayout()
	}

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
			return colorC('red', x, y)
		}

		// writing this, vs color1, as a lambda, because... and example of code
		const color2 = (x: number, y: number) => colorC('green', x, y)

		function makeCom(com: number): ComLayout {
			return {
				row0: color1(com, 0),
				row1: color1(com, 1),
				row2: color1(com, 2),
				row3: color1(com, 3),
				row4: color1(com, 4),
				row5: color1(com, 5),
				row6: color1(com, 6),
				row7: color1(com, 7),

				row8: color2(com, 0),
				row9: color2(com, 1),
				row10: color2(com, 2),
				row11: color2(com, 3),
				row12: color2(com, 4),
				row13: color2(com, 5),
				row14: color2(com, 6),
				row15: color2(com, 7)
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
}
