import { I2CAddressedBus } from '@johntalton/and-other-delights'

import {
	BlinkRate, Layout, ComLayout,
	CONTROL, REGISTER,
	OSCILLATOR, DISPLAY,
	DIMMING_MASK,
	rateValue
} from './defs.js'

export class Common {
	static async setOscillator(bus: I2CAddressedBus, enable: boolean) {
		const command = CONTROL.SS
			| (enable ? OSCILLATOR.ON : OSCILLATOR.OFF)
		return bus.i2cWrite(Uint8Array.from([ command ]))
	}

	static async setInterruptPinMode(bus: I2CAddressedBus, enable: boolean) {
		const command = CONTROL.SS
			| (enable ? 1 : 0)
		return bus.i2cWrite(Uint8Array.from([ command ]))
	}

	static async setDisplay(bus: I2CAddressedBus, enable: boolean, blinkRate: BlinkRate) {
		const command = CONTROL.DS
			| (enable ? DISPLAY.ON : DISPLAY.OFF)
			| rateValue(blinkRate)
		return bus.i2cWrite(Uint8Array.from([ command ]))
	}


	static async setDimming(bus: I2CAddressedBus, value: number) {
		const command = CONTROL.DDD
			| (value & DIMMING_MASK)
		return bus.i2cWrite(Uint8Array.from([ command ]))
	}


	static async setMemory(bus: I2CAddressedBus, layout: Layout) {
		function layoutCom(comLayout?: ComLayout): [ number, number ] {
			if(comLayout === undefined) { return [0, 0] }

			const row07 = (comLayout.row0 ?? false ? 1 : 0)
			| (comLayout.row1 ?? false ? 1 : 0) << 1
			| (comLayout.row2 ?? false ? 1 : 0) << 2
			| (comLayout.row3 ?? false ? 1 : 0) << 3
			| (comLayout.row4 ?? false ? 1 : 0) << 4
			| (comLayout.row5 ?? false ? 1 : 0) << 5
			| (comLayout.row6 ?? false ? 1 : 0) << 6
			| (comLayout.row7 ?? false ? 1 : 0) << 7

		const row815 = (comLayout.row8 ?? false ? 1 : 0)
		| (comLayout.row9 ?? false ? 1 : 0) << 1
		| (comLayout.row10 ?? false ? 1 : 0) << 2
		| (comLayout.row11 ?? false ? 1 : 0) << 3
		| (comLayout.row12 ?? false ? 1 : 0) << 4
		| (comLayout.row13 ?? false ? 1 : 0) << 5
		| (comLayout.row14 ?? false ? 1 : 0) << 6
		| (comLayout.row15 ?? false ? 1 : 0) << 7

		return [ row07, row815 ]
		}

		const [ com0row07, com0row815 ] = layoutCom(layout.com0)
		const [ com1row07, com1row815 ] = layoutCom(layout.com1)
		const [ com2row07, com2row815 ] = layoutCom(layout.com2)
		const [ com3row07, com3row815 ] = layoutCom(layout.com3)
		const [ com4row07, com4row815 ] = layoutCom(layout.com4)
		const [ com5row07, com5row815 ] = layoutCom(layout.com5)
		const [ com6row07, com6row815 ] = layoutCom(layout.com6)
		const [ com7row07, com7row815 ] = layoutCom(layout.com7)

		const memory = Uint8Array.from([
			REGISTER.MEM,
			com0row07, com0row815,
			com1row07, com1row815,
			com2row07, com2row815,
			com3row07, com3row815,
			com4row07, com4row815,
			com5row07, com5row815,
			com6row07, com6row815,
			com7row07, com7row815
		])

		return bus.i2cWrite(memory)
	}

	// static async getInterrupt(bus: I2CAddressedBus) {

	// }
}