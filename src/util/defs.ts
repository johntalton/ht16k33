export type SevenSegmentDotLayout = {
	A: boolean,
	B: boolean,
	C: boolean,
	D: boolean,
	E: boolean,
	F: boolean,
	G: boolean,
	DP: boolean
}

export type FourSevenSegmentDotColonLayout = {
	colon: boolean,
	digit: {
		one: SevenSegmentDotLayout,
		two: SevenSegmentDotLayout,
		three: SevenSegmentDotLayout,
		four: SevenSegmentDotLayout
	}
}

export type FourteenSegmentDotLayout = {
	A: boolean,
	B: boolean,
	C: boolean,
	D: boolean,
	E: boolean,
	F: boolean,
	G?: boolean,
	G1?: boolean,
	G2?: boolean,
	H: boolean,
	J: boolean,
	K: boolean,
	L: boolean,
	M: boolean,
	N: boolean,
	DP: boolean
}

export type FourFourteenSegmentDotLayout = {
	digit: {
		one: FourteenSegmentDotLayout,
		two: FourteenSegmentDotLayout,
		three: FourteenSegmentDotLayout,
		four: FourteenSegmentDotLayout
	}
}