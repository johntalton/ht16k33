
export class FontUtil {
	static segmentMapFromString(segmentString: string) {
		const hasG = (
			!segmentString?.includes('G1') &&
			!segmentString?.includes('G2') &&
			segmentString?.includes('G')
		)

		return {
			A: segmentString?.includes('A'),
			B: segmentString?.includes('B'),
			C: segmentString?.includes('C'),
			D: segmentString?.includes('D'),
			E: segmentString?.includes('E'),
			F: segmentString?.includes('F'),
			G: hasG,
			G1: segmentString?.includes('G1') || hasG,
			G2: segmentString?.includes('G2') || hasG,
			H: segmentString?.includes('H'),
			J: segmentString?.includes('J'),
			K: segmentString?.includes('K'),
			L: segmentString?.includes('L'),
			M: segmentString?.includes('M'),
			N: segmentString?.includes('N'),
			DP: segmentString?.includes('.')
		}
	}

	static digits4FromSegmentMap(mapping: { [key: string]: string }, letters: string, colon?: boolean) {
		const [A, B, C, D] = letters

		return {
			colon,
			digit: {
				one: FontUtil.segmentMapFromString(mapping[A]),
				two: FontUtil.segmentMapFromString(mapping[B]),
				three: FontUtil.segmentMapFromString(mapping[C]),
				four: FontUtil.segmentMapFromString(mapping[D])
			}
		}
	}
}