import { I2CAddressedBus } from '@johntalton/and-other-delights'


// System Setup
export const SS = 0b0010 << 4

export const OSCILLATOR_ON = 0b1
export const OSCILLATOR_OFF = 0b0

// Row/INT Set
export const RIS = 0b1010 << 4

// Display Setup
export const DS = 0b1000 << 4

export const DISPLAY_ON = 0b1
export const DISPLAY_OFF = 0b0

export const BLINK_OFF = 0b00 << 1
export const BLINK_2_HZ = 0b01 << 1
export const BLINK_1_HZ = 0b10 << 1
export const BLINK_HALF_HZ = 0b11 << 1

// Digital Dimming Data
export const DDD = 0b1110 << 4


// Key Data Memory 0x40 - 0x45
export const KDM = 0x40

// INT register flag
export const IRF = 0x60


export async function open(bus: I2CAddressedBus) {
  await bus.i2cWrite(Uint8Array.from([SS | OSCILLATOR_ON ]))
  await bus.i2cWrite(Uint8Array.from([DS | DISPLAY_ON | BLINK_OFF ]))
  await bus.i2cWrite(Uint8Array.from([DDD | 1 ]))
}

export class HT16K33 {

}