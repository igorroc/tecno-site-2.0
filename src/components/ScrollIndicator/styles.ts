import { keyframes } from "@stitches/react"
import { styled } from "../../stitches.config"

const size = "1.6em"
const shadow = "0px 0px 5px #000"

export const slidingAnimation = keyframes({
	"0%": { transform: `rotateZ(-90deg) translateX(10%)` },
	"50%": { transform: `rotateZ(-90deg) translateX(-10%)` },
	"100%": { transform: `rotateZ(-90deg) translateX(10%)` },
})

export const floatingAnimation = keyframes({
	"0%": { transform: `translateX(50%) translateY(10%)` },
	"50%": { transform: `translateX(50%) translateY(-10%)` },
	"100%": { transform: `translateX(50%) translateY(10%)` },
})

export const Div = styled("div", {
	position: "absolute",
	top: "50%",
	right: "0",
	transform: "rotateZ(-90deg)",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	gap: "1em",
	color: "white",
	textShadow: shadow,
	fontSize: size,
	animation: `${slidingAnimation} 2s infinite ease-in-out`,
	cursor: "pointer",

	"& svg": {
		fontSize: "1em",
	},
	"& span": {
		fontSize: "1em",
	},

	"& .smallScreen": {
		display: "none",
	},

	"@medium": {
		top: "unset",
		bottom: "10vh",
		right: "50%",
		animationName: `${floatingAnimation}`,

		flexDirection: "column-reverse",
		alignItems: "center",
		justifyContent: "center",
		gap: "0.5em",

		"& .largeScreen": {
			display: "none",
		},

		"& .smallScreen": {
			display: "unset",
		},

		"& svg": {
			transform: "rotate(-90deg)",
		},
	},
})
