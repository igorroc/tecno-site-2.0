import { styled } from "@stitches/react"

export const ListaWrapper = styled("ul", {
	display: "flex",
	flexDirection: "column",
	gap: "2em",
})

export const Item = styled("div", {
	"&": {
		"& .itemHead": {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			padding: "7px 20px",
			border: "2px solid #fff3",
			borderRadius: "5px",
			transition: "all 300ms ease-in-out",

			"& .iconArrow": {
				width: "25px",
				height: "25px",
				background: "#C171FF",
				borderRadius: "5px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				transition: "all 300ms ease-in-out",

				"& svg": {
					fontSize: "1.2em",
				},
			},
		},

		"& .itemDescription": {
			padding: "0 20px",
			border: "2px solid #fff3",
			borderTop: "none",
			borderWidth: "0px",
			borderRadius: "0px 0px 5px 5px",
			height: "max-content",
			maxHeight: "0px",
			overflow: "hidden",
			transition: "all 300ms ease-in-out",
		},

		"&:hover": {
			"& .itemHead": {
				background: "#FF71E0",
				borderRadius: "5px 5px 0px 0px",
				color: "black",
			},

			"& .itemDescription": {
				maxHeight: "200px",
				borderWidth: "2px",
				padding: "20px",
			},

			"& .iconArrow": {
				transform: "rotate(90deg)",
				background: "#fff",
				color: "#FF71E0",
			},
		},
	},
})
