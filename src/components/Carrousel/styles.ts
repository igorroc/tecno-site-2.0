import { styled } from "@stitches/react"

export const CarrouselWrapper = styled("div", {
	position: "relative",
	width: "100%",
	minWidth: "1000px",
	display: "flex",
	gap: "50px",
	alignItems: "center",
	justifyContent: "center",
})

export const Card = styled("div", {
	position: "relative",
	minHeight: "350px",
	height: "max-content",
	padding: "2em",
	fontSize: "1em",
	overflow: "hidden",
	background: "linear-gradient(#3A3A3A, #272727,  #131313)",
	backgroundSize: "100%",
	backgroundPosition: "-100%",
	borderRadius: "10px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "2em",
	margin: "0 auto",

	transition: "all 300ms ease-in",

	"& h3": {
		position: "relative",
		fontSize: "2em",
		textAlign: "center",

		"&:after": {
			content: "",
			position: "absolute",
			bottom: "-7px",
			left: "50%",
			transform: "translateX(-50%)",
			width: "75px",
			height: "3px",
			backgroundColor: "#fff",
			transition: "width 300ms ease-out",
		},
	},

	"& p": {
		textAlign: "center",
	},

	"&:hover": {
		backgroundPosition: "200%",

		"& h3:after": {
			width: "125px",
		},
	},
})

export const NodeIcon = styled("div", {
	width: "3em",
	height: "3em",
	padding: "1em",
	borderRadius: "50%",
	backgroundColor: "#5a7be7",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",

	"& svg": {
		fontSize: "3em",
	},
})
