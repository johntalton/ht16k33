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
		function layoutCom(comLayout?: ComLayout) {
			if(comLayout === undefined) { return 0 }

			return (comLayout.row0 ?? false ? 1 : 0)
			| (comLayout.row1 ?? false ? 1 : 0) << 1
			| (comLayout.row2 ?? false ? 1 : 0) << 2
			| (comLayout.row3 ?? false ? 1 : 0) << 3
			| (comLayout.row4 ?? false ? 1 : 0) << 4
			| (comLayout.row5 ?? false ? 1 : 0) << 5
			| (comLayout.row6 ?? false ? 1 : 0) << 6
			| (comLayout.row7 ?? false ? 1 : 0) << 7
		}

		const com0row07 = layoutCom(layout.com0)
		const com1row07 = layoutCom(layout.com1)
		const com2row07 = layoutCom(layout.com2)
		const com3row07 = layoutCom(layout.com3)
		const com4row07 = layoutCom(layout.com4)

		const memory = Uint8Array.from([
			REGISTER.MEM,
			com0row07, 0,
			com1row07, 0,
			com2row07, 0,
			com3row07, 0,
			com4row07, 0
		])

		return bus.i2cWrite(memory)
	}

	// static async getInterrupt(bus: I2CAddressedBus) {

	// }
}