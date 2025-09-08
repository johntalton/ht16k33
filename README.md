# HT16K33

LED driver commonly used for many different type of displays

[![npm Version](http://img.shields.io/npm/v/@johntalton/ht16k33.svg)](https://www.npmjs.com/package/@johntalton/ht16k33)
![GitHub package.json version](https://img.shields.io/github/package-json/v/johntalton/ht16k33)
[![CI](https://github.com/johntalton/ht16k33/actions/workflows/CI.yaml/badge.svg)](https://github.com/johntalton/ht16k33/actions/workflows/CI.yaml)


## Layout

The `setMemory` method takes in a "Layout", this is the direct chip specific setup. It is defined a the set of common (com0, com1..) and rows (row0, row1).

The Layout object has 8 (com0 .. com7) each having 16 rows (row0 .. row15) that are Boolean values for On or Off.

While setting these directly is supported, it is much easier to you a product specific defined Layout helper.

### Segmented

Layout helpers are defined for both 7 and 14 segmented displays are supported (Adafruit [here](https://www.adafruit.com/product/1002) and [here](https://www.adafruit.com/product/3089))

In addition several "fonts" are defined in terms of common A, B, C ...etc segmentation.

(see example)

### Matrix

Other Layouts, like for this [8x8 BiColor Matrix](https://www.adafruit.com/product/902) display are also provided.

```javascript

const layout = AdafruitMatrix8x8BiColor.toLayout([
  { x: 5, y: 5, color: 'yellow' }, // set 5,5 to yellow
  //... others
  // missing x,y will be set to "black" / unset
])
```

# Example

```javascript
import { I2CAddressedBus } from '@johntalton/and-other-delights'
import { HT16K33, BLINK } from '@johntalton/ht16k33'

const bus = /* byob - bring your own I2CBus */
const aBus = new I2CAddressedBus(bus, 0x70)
const device = new HT16K33(aBus)

await device.enableOscillator()
await device.setDisplay(true, BLINK.OFF)

// Layout helper can be used or set directly
// directly define the Layout values here
const customLayout = {
  /* set com/row values */
  com0: { row0: true, /* ... */ row15: false },
  com1: /* ...etc */
}
await device.setMemory(customLayout)

```

## Layout for 4 digit 7 segment display form ASCII font
```javascript
const device = /* .. init code from above */
// set the time for a 4 digit 7 segment display
// create encoding for desired text "1130"
// result is values for A,B,C,... etc segments and the colon
const encoded = Font7SegmentASCII.encode4Digit('1130', true)
// convert the encoded segment representation into a Product specific
// memory layout, in this case a classic Adafruit display:
// https://www.adafruit.com/product/1002
const layout = Adafruit4Digit7SegmentBackpack.toLayout(encoded)
// and now set it
await device.setMemory(layout)
```