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
	html: {
		scrollBehavior: "smooth",
	},

	body: {
		backgroundColor: "#1b1b1b",
		color: "white",
		overflowX: "hidden",
	},
	a: {
		textDecoration: "none",
		fontSize: "1em",
		color: "#31e7ff",
	},

	".centerCarrousel": {
		"& .slick-slide": {
			"&.slick-current > div > div": {
				boxShadow: "0px 10px 20px #000a",
				transform: "scale(1.1)",
			},
			"& > div > div": {
				boxShadow: "unset",

			"& h3:after": {
				backgroundColor: "#5A7BE7",
			},
		},

			"& > div": {
			margin: "20px",
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
