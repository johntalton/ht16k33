	// const layout = AdafruitMatrix8x8BiColor.toLayout([
		// 	{ x: 0, y: 0, color: 'red' },
		// 	{ x: 1, y: 1, color: 'green' },
		// 	{ x: 2, y: 2, color: 'red' },
		// 	{ x: 3, y: 3, color: 'yellow' },
		// 	{ x: 4, y: 4, color: 'yellow' },
		// 	{ x: 5, y: 5, color: 'green' },
		// 	{ x: 6, y: 6, color: 'red' },
		// 	{ x: 7, y: 7, color: 'green' }
		// ])




		function fromCanvas8x8BiColor(biArray) {
			return biArray.reduce((accumulator, rows, y) => [
					...accumulator,
					...rows.map((color, x) => ({ x, y, color }))
				], [])
		}

		// const layout = AdafruitMatrix8x8BiColor.toLayout(fromCanvas8x8BiColor([
		// 	[ 'green', 'yellow', 'yellow', 'black', 'black', 'black', 'black', 'black' ],
		// 	[ 'green', 'green', 'yellow', 'black', 'black', 'black', 'black', 'black' ],
		// 	[ 'yellow', 'yellow', 'yellow', 'black', 'black', 'black', 'black', 'black' ],
		// 	[ 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black' ],
		// 	[ 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black' ],
		// 	[ 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black' ],
		// 	[ 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black' ],
		// 	[ 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'red' ]
		// ]))
