import { styled } from "@stitches/react"

export const Grid = styled("div", {
	width: "100%",
	display: "flex",
	gap: "3em",
	flexWrap: "wrap",
	justifyContent: "center",
})

export const Card = styled("div", {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	width: "285px",
	height: "390px",
	backgroundColor: "#232033",
	borderRadius: "5px",
	filter: `drop-shadow(0 1px 1px rgba(0,0,0,0.05))
			drop-shadow(0 2px 2px rgba(0,0,0,0.10))
			drop-shadow(0 4px 4px rgba(0,0,0,0.15))
			drop-shadow(0 8px 8px rgba(0,0,0,0.20))`,
	transition: "all 300ms ease-out",

	"&:hover img": {
		filter: "grayscale(0)",
		transform: "scale(1.3) rotateZ(10deg)",
	},

	"&.hide": {
		// transform: "scale(0)",
		// overflow: "hidden",
		// width: "0",
		// height: "0",
		display: "none",
	},
})

export const ImgWrapper = styled("div", {
	width: "100%",
	height: "100%",
	borderRadius: "5px 5px 0 0",
	overflow: "hidden",

	"& img": {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		filter: "grayscale(1)",

		transition: "all 200ms ease-out",
	},
})

export const Box = styled("div", {
	display: "flex",
	gap: "0.5em",
	flexDirection: "column",
	width: "max-content",
	textAlign: "center",
	padding: "1em 2em",
	fontSize: "1em",

	transform: "translateY(-50%)",

	borderRadius: "5px",
	backgroundColor: "#232033",
	filter: `drop-shadow(0 1px 1px rgba(0,0,0,0.05))
			drop-shadow(0 2px 2px rgba(0,0,0,0.10))
			drop-shadow(0 4px 4px rgba(0,0,0,0.15))
			drop-shadow(0 8px 8px rgba(0,0,0,0.20))`,

	"& .memberName": {
		fontSize: "1.5em",
	},

	"& .memberRole": {
		fontSize: "1em",
		fontWeight: "normal",
		color: "#5A7BE7",
	},
})

export const LinksRow = styled("div", {
	display: "flex",
	gap: "1em",
	transform: "translateY(-50%)",

	"& .memberLink": {
		width: "1.5em",
		height: "1.5em",
		fontSize: "1.5em",

		display: "flex",
		alignItems: "center",
		justifyContent: "center",

		borderRadius: "5px",
		backgroundColor: "#ffffff20",
		color: "#fff",

		transition: "background 100ms ease-in-out ",

		"&:hover": {
			backgroundColor: "#5A7BE7aa",
			opacity: "1",
		},
	},
})
