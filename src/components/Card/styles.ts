import { styled } from "@stitches/react"

export const Wrapper = styled("div", {
	display: "flex",
	gap: "20px",
	flexWrap: "wrap",

	justifyContent: "center",
})

export const CardStyle = styled("div", {
	backgroundColor: "#28293e",
	display: "flex",
	flexDirection: "column",
	gap: "20px",
	flexWrap: "wrap",
	width: "300px",
	borderRadius: "10px",
	overflow: "hidden",

	"& .image": {
		position: "relative",
		width: "100%",
		minHeight: "250px",
		maxHeight: "250px",

		"& img": {
			width: "100%",
			height: "100%",
			objectFit: "cover",
		},

		"& .link": {
			position: "absolute",
			top: "0",
			left: "0",
			bottom: "0",
			right: "0",
			backgroundColor: "#232323df",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			opacity: "0",
			transition: "all 300ms ease-out",

			"& a": {
				padding: "10px 20px",
				backgroundColor: "#f7f7f710",
				border: "1px solid #fff3",
				borderRadius: "10px",
				fontSize: "1.2em",
				fontWeight: "bold",
				color: "white",
				transition: "all 300ms ease-in-out",

				"&:hover": {
					backgroundColor: "#f7f7f720",
				},
			},

			"&:hover": {
				opacity: "1",
			},
		},
	},

	"& .content": {
		padding: "20px",
		paddingTop: "5px",
		display: "flex",
		flexDirection: "column",
		gap: "10px",

		"& h3": {
			fontSize: "1.4em",
		},

		"& p": {
			color: "#fffa",
			fontSize: "1.1em",
		},
	},
})
