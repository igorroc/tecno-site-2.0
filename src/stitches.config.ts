import { createStitches } from "@stitches/react"

export const { styled, css } = createStitches({
	media: {
		small: "(max-width: 600px)",
		medium: "(max-width: 900px)",
		large: "(max-width: 1000px)",
	},
})
