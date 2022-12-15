import { styled } from "@stitches/react"

export const Div = styled("form", {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: "1em",
	flexWrap: "wrap",
	margin: "20px auto",
})

export const Pill = styled("label", {
	padding: "10px 20px",
	borderRadius: "20px",
	border: "2px solid #fff5",
	backgroundColor: "#23203355",
	color: "#fff",
	fontSize: "1em",
	cursor: "pointer",
	transition: "all 300ms ease-out ",

	"&:hover": {
		border: "2px solid #fffa",
		backgroundColor: "#232033",
	},

	"&:has(input:checked)": {
		backgroundColor: "#fff",
		color: "#232033",
		fontWeight: "bold",

		"&:hover": {
			backgroundColor: "#fffe",
		},
	},

	input: {
		display: "none",
	},
})
