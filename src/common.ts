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

	static async getMemory(bus: I2CAddressedBus): Promise<Layout> {
		await bus.i2cWrite(Uint8Array.from([ REGISTER.MEM ]))
		const buffer = await bus.i2cRead(16)
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer)

		function makeCom(b0: number, b1: number): ComLayout {
			return {
				row0: ((b0 >> 0) & 0b1) === 0b1,
				row1: ((b0 >> 1) & 0b1) === 0b1,
				row2: ((b0 >> 2) & 0b1) === 0b1,
				row3: ((b0 >> 3) & 0b1) === 0b1,
				row4: ((b0 >> 4) & 0b1) === 0b1,
				row5: ((b0 >> 5) & 0b1) === 0b1,
				row6: ((b0 >> 6) & 0b1) === 0b1,
				row7: ((b0 >> 7) & 0b1) === 0b1,

				row8: ((b1 >> 0) & 0b1) === 0b1,
				row9: ((b1 >> 1) & 0b1) === 0b1,
				row10: ((b1 >> 2) & 0b1) === 0b1,
				row11: ((b1 >> 3) & 0b1) === 0b1,
				row12: ((b1 >> 4) & 0b1) === 0b1,
				row13: ((b1 >> 5) & 0b1) === 0b1,
				row14: ((b1 >> 6) & 0b1) === 0b1,
				row15: ((b1 >> 7) & 0b1) === 0b1,
			}
		}

		return {
			com0: makeCom(u8[0], u8[1]),
			com1: makeCom(u8[2], u8[3]),
			com2: makeCom(u8[4], u8[5]),
			com3: makeCom(u8[6], u8[7]),
			com4: makeCom(u8[8], u8[9]),
			com5: makeCom(u8[10], u8[11]),
			com6: makeCom(u8[12], u8[13]),
			com7: makeCom(u8[14], u8[15])
		}
	}

	// static async getInterrupt(bus: I2CAddressedBus) {

	// }
}