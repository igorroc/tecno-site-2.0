import { globalCss } from "@stitches/react"

const globalStyles = globalCss({
	"*": {
		margin: 0,
		padding: 0,
		fontFamily: "Montserrat",
		fontSize: "16px",
	},
	"@font-face": {
		fontFamily: "Montserrat",
		src: "url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');",
	},

	body: {
		backgroundColor: "#1b1b1b",
		color: "white",
		overflowX: "hidden",
	},
	a: {
		textDecoration: "none",
	},
	".centerCarrousel": {
		"& .slick-slide > div > div": {
			"& h3:after": {
				backgroundColor: "#5A7BE7",
			},

			"&:after": {
				content: "",
				position: "absolute",
				top: "0",
				left: "0",
				width: "100%",
				height: "100%",

				background: "linear-gradient(#0000 50%, #131313 95%)",
			},
		},

		"& .slick-slide > div": {
			margin: "20px",
		},

		"& .slick-center > div > div": {
			background: "linear-gradient(#5552DE, #2F34A0, 40%, #132A7D)",
			maxHeight: "30em",

			"&:after": {
				content: "",
				position: "absolute",
				top: "0",
				left: "0",
				width: "100%",
				height: "100%",

				background: "none",
			},
		},
	},

	"::-webkit-scrollbar": {
		width: "10px",
	},

	"::-webkit-scrollbar-track": {
		background: "#0f0f0f",
	},

	"::-webkit-scrollbar-thumb": {
		background: "linear-gradient(to bottom, #21cfda, #c548ff)",
		borderRadius: "100px",
	},
})

function SetGlobalStyle() {
	globalStyles()
	return <span></span>
}

export default SetGlobalStyle
