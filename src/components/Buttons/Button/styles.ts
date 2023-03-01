import { styled } from "@stitches/react"

export const CustomButton = styled("button", {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: "1em",
	fontSize: "1.2em",
	fontWeight: "bold",
	width: "max-content",
	height: "fit-content",
	color: "white",
	padding: "0.6em 1.5em",
	border: "none",
	outline: "none",
	borderRadius: "5em",
	background: "linear-gradient(to right, #5A7BE7, #9256EB, #5A7BE7) repeat",
	backgroundSize: "200% 100%",
	backgroundRepeat: "repeat",
	cursor: "pointer",
	letterSpacing: "1px",

	transition:
		"transform 256ms ease-in-out, background-position 256ms ease-in-out",
	"&:hover": {
		transform: "scale(1.068)",
		backgroundPosition: "100% 0%",
	},

	"& svg": {
		fontSize: "1.1em",
	},
})

export const CustomLink = styled("a", {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: "1em",
	fontSize: "1.2em",
	fontWeight: "bold",
	width: "max-content",
	height: "fit-content",
	color: "white",
	padding: "0.6em 1.5em",
	border: "none",
	outline: "none",
	borderRadius: "5em",
	background: "linear-gradient(to right, #5A7BE7, #9256EB, #5A7BE7) repeat",
	backgroundSize: "200% 100%",
	backgroundRepeat: "repeat",
	cursor: "pointer",
	letterSpacing: "1px",

	transition:
		"transform 256ms ease-in-out, background-position 256ms ease-in-out",
	"&:hover": {
		transform: "scale(1.068)",
		backgroundPosition: "100% 0%",
	},

	"& svg": {
		fontSize: "1.1em",
	},
})
