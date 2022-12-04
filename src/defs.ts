


// system Setup
export const OSCILLATOR = {
	ON: 0b1,
	OFF: 0b0
}

// Display Setup
export const DISPLAY = {
	ON: 0b1,
	OFF: 0b0
}

//
export const BLINK = {
	OFF: 0b00 << 1,
	HZ_2: 0b01 << 1,
	HZ_1: 0b10 << 1,
	HZ_HALF: 0b11 << 1
}


export const REGISTER = {
	// Display Memory
	MEM: 0x00,

	// Key Data Memory 0x40 - 0x45
	KDM: 0x40,

	// INT register flag
	IRF: 0x60

}


export const CONTROL = {
	// System Setup
	SS: 0b0010 << 4,

	// Row/INT Set
	RIS: 0b1010 << 4,

	// Display Setup
	DS: 0b1000 << 4,

	// Digital Dimming Data
	DDD: 0b1110 << 4
}


export const DIMMING_MASK = 0x0F


//
export type BlinkRate = 'off' | '0.5hz' | '1hz' | '2hz'

export function rateValue(rate: BlinkRate | String): number {
	if(rate === 'off') { return BLINK.OFF }
	if(rate === '0.5hz') { return BLINK.HZ_HALF }
	if(rate === '1hz') { return BLINK.HZ_1 }
	if(rate === '2hz') { return BLINK.HZ_2 }

	throw new Error('unknown rate')
}

export type ComLayout = {
	row0?: boolean,
	row1?: boolean,
	row2?: boolean,
	row3?: boolean,
	row4?: boolean,
	row5?: boolean,
	row6?: boolean,
	row7?: boolean,
	row8?: boolean,
	row9?: boolean,
	row10?: boolean,
	row11?: boolean,
	row12?: boolean,
	row13?: boolean,
	row14?: boolean,
	row15?: boolean,
}

export type Layout = {
	com0?: ComLayout,
	com1?: ComLayout,
	com2?: ComLayout,
	com3?: ComLayout,
	com4?: ComLayout,
	com5?: ComLayout,
	com6?: ComLayout,
	com7?: ComLayout,
}



