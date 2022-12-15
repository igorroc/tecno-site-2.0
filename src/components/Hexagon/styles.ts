import { styled } from "@stitches/react"

export const HexDiv = styled("div", {
	$$size: "60vw",
	width: "$$size",
	height: "$$size",
	position: "absolute",
	right: "0",
	top: "0",
	transform: "translate(25%, 50vh) translateY(-50%) ",
	filter: `drop-shadow(0 1px 1px rgba(0,0,0,0.05))
			drop-shadow(0 2px 2px rgba(0,0,0,0.10))
			drop-shadow(0 4px 4px rgba(0,0,0,0.15))
			drop-shadow(0 8px 8px rgba(0,0,0,0.20))`,

	"& > svg": {
		width: "$$size",
		height: "$$size",

		"&> path": {
			fill: "#232323",
		},
	},
})
