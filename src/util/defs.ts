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