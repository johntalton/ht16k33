
export class Segment {
	static encodeTime24_4Digit(time: Date): string {
		const h = time.getHours()
		const m = time.getMinutes()

		const [ digit0, digit1 ] = h.toString().padStart(2, '0').split('')
		const [ digit2, digit3 ] = m.toString().padStart(2, '0').split('')

		return [ digit0, digit1, digit2, digit3 ].join('')
	}

	static clearMemory() {
		const ROWS = 16
		const COLS = 8

		const clearColumn = [...new Array(ROWS)].reduce((acc, _item, index) => ({
			...acc,
			[`row${index}`]: false
		}), {})

		return [...new Array(COLS)].reduce((acc, _item, index) => ({
			...acc,
			[`com${index}`]: clearColumn
		}), {})
	}
}
