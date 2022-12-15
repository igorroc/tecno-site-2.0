import { styled } from "@stitches/react"

export const Wrapper = styled("div", {
	position: "absolute",
	top: "0",
	left: "0",
	width: "100%",
	height: "95vh",
	zIndex: "-10",
	filter: `drop-shadow(0 2px 1px rgba(0,0,0,0.09))
			drop-shadow(0 4px 2px rgba(0,0,0,0.09))
			drop-shadow(0 8px 4px rgba(0,0,0,0.09))
			drop-shadow(0 16px 8px rgba(0,0,0,0.09))
			drop-shadow(0 32px 16px rgba(0,0,0,0.09))`,
	"& img": {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		objectPosition: "bottom",
	},

	variants: {
		fullHeight: {
			true: {
				height: "100%",
				minHeight: "100vh",
			},
		},
	},
})
