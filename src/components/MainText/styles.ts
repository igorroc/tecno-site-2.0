import { keyframes, styled } from "@stitches/react"

export const gradientAnimation = keyframes({
	"0%": {
		backgroundPosition: "-100%",
	},
	"100%": {
		backgroundPosition: "100%",
	},
})

export const Text = styled("span", {
	fontSize: "1em",
	fontWeight: "bold",
	color: "transparent",
	width: "max-content",
	background:
		"linear-gradient(110deg, #C548FF, #27F2FF, #C548FF, #27F2FF, #C548FF)",
	backgroundClip: "text",
	backgroundSize: "200%",
	backgroundPosition: "-100%",
	animation: `${gradientAnimation} 8s infinite linear`,
	display: "block",

	variants: {
		size: {
			giant: {
				fontSize: "10em",
			},
			large: {
				fontSize: "5em",
			},
			medium: {
				fontSize: "2em",
			},
			normal: {
				fontSize: "1em",
			},
		},
	},
})
