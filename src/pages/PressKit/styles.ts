import { styled } from "@stitches/react"

import PatternWhite from "../../assets/img/pattern_white.png"
import PatternBlack from "../../assets/img/pattern_black.png"

export const WrapperTransparente = styled("div", {
	position: "relative",

	minWidth: 300,
	height: 160,
	border: "1px solid #fff3",
	borderRadius: 16,

	padding: "1em",

	display: "flex",
	flex: 1,
	justifyContent: "center",
	alignItems: "center",

	background: `url(${PatternBlack})`,
	backgroundPosition: "0px 0px",
	backgroundSize: "30px",

	img: {
		objectFit: "contain",
		width: "100%",
		height: "100%",
		maxWidth: 292,
	},

	"&.inverted": {
		backgroundPosition: "0% 50%",
		backgroundSize: "30px",
		background: `url(${PatternWhite})`,

		a: {
			color: "#4275f9",
		},
	},

	".links": {
		position: "absolute",
		bottom: "1em",
		right: "1em",
		display: "flex",
		gap: "1em",
		a: {
			fontWeight: 600,
			opacity: 0.8,
			transition: "all 0.3s ease-out",

			"&:hover": {
				opacity: 1,
			},
		},
	},
})

export const WrapperDivs = styled("div", {
	display: "flex",
	gap: "3em",
	flexWrap: "wrap",
	margin: "3em 0",
})

export const Title = styled("h1", {
	fontSize: "1.8em",
	fontWeight: 600,
	margin: "2em 0",
})

export const Description = styled("p", {
	fontSize: "1.2em",
	margin: "2em 0",
})

export const CardColor = styled("div", {
	minWidth: 300,
	height: 160,
	border: "1px solid #fff3",
	borderRadius: 16,
	padding: "1em",

	display: "flex",
    flex: 1,
	flexDirection: "column",
	justifyContent: "space-between",

	".title": {
		fontSize: "2em",
		fontWeight: 600,
	},
	".description": {
		display: "flex",
		flexDirection: "column",
		gap: "0.3em",
		p: {
			fontSize: "1.5em",
			fontWeight: 400,
			opacity: 0.8,
		},
	},
})
