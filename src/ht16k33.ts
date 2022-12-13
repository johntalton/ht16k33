import { I2CAddressedBus } from '@johntalton/and-other-delights'

import { Common } from './common.js'
import { BlinkRate, Layout } from './defs.js'


export class HT16K33 {
  #bus

  static from(bus: I2CAddressedBus) {
    return new HT16K33(bus)
  }

  constructor(bus: I2CAddressedBus) { this.#bus = bus }

  get name() { return this.#bus.name }

  async enableOscillator() { return this.setOscillator(true) }
  async disableOscillator() { return this.setOscillator(false) }
  async setOscillator(enable: boolean) {
    return Common.setOscillator(this.#bus, enable)
  }

  async enableInterruptPinMode() { return this.setInterruptPinMode(true) }
  async disableInterruptPinMode() { return this.setInterruptPinMode(false) }
  async setInterruptPinMode(enable: boolean) {
    return Common.setInterruptPinMode(this.#bus, enable)
  }

  async setDisplay(enable: boolean, blinkRate: BlinkRate) {
    return Common.setDisplay(this.#bus, enable, blinkRate)
  }


  async setDimming(value: number) {
    return Common.setDimming(this.#bus, value)
  }


  async setMemory(layout: Layout) {
    return Common.setMemory(this.#bus, layout)
  }

  // async getInterrupt() {
  //   return Common.getInterrupt(this.#bus)
  // }

}