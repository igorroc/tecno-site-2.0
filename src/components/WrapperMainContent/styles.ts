import { styled } from "../../stitches.config"

export const WrapperContent = styled("div", {
	position: "relative",
	height: "100vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	gap: "45px",

	"& > h1": {
		fontSize: "3em",
		width: "max-content",
		maxWidth: "440px",

		"& span": {
			display: "inline-block",
			margin: "0 0.2em",
		},
	},

	"& > p": {
		fontSize: "1.2em",
		maxWidth: "500px",
	},
})
