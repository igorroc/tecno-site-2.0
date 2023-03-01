import { styled } from "../../stitches.config"

export const HeaderDiv = styled("header", {
	position: "fixed",
	top: "0",
	backgroundColor: "#00000005",
	width: "100%",
	display: "flex",
	height: "80px",
	alignItems: "center",
	justifyContent: "center",
	backdropFilter: "blur(10px)",
	zIndex: "99",

	"@supports not (backdrop-filter: blur(10px))": {
		backgroundColor: "#232323",
	},

	"& #headerLogo svg": {
		fontSize: "1em",
		height: "30px",
		width: "auto",
	},
	"& ul": {
		listStyle: "none",
		display: "flex",
		gap: "2em",

		"& a": {
			color: "white",
			textDecoration: "none",
			position: "relative",
			lineHeight: "80px",
			height: "80px",

			transition: "all 100ms ease-in-out",
			"&:hover": {
				fontWeight: "bold",
				letterSpacing: "1px",
			},

			"&.headerActiveItem": {
				fontWeight: "bold",
				letterSpacing: "1px",

				".activeTab": {
					position: "absolute",
					left: 0,
					right: 0,
					bottom: -1,
					height: 2,
					backgroundColor: "white",
				},
			},
		},
	},

	"& > div > div": {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},

	"&::before": {
		content: "",
		width: "100%",
		height: "1px",
		position: "absolute",
		bottom: "0",
		zIndex: "-1",

		backgroundColor: "#fff5",
		filter: `drop-shadow(0 1px 1px rgba(0,0,0,1))
				drop-shadow(0 2px 2px rgba(0,0,0,0.8))
				drop-shadow(0 4px 4px rgba(0,0,0,0.6))
				drop-shadow(0 6px 6px rgba(0,0,0,0.4))
				drop-shadow(0 8px 8px rgba(0,0,0,0.2))`,

		transition: "all 300ms ease-out",
	},

	"&:hover::before": {
		backgroundColor: "#fff6",
	},

	"& #menuButton": {
		width: "2em",
		height: "2em",
		background: "none",
		outline: "none",
		border: "none",
		color: "#fff",
		cursor: "pointer",

		"& svg": {
			fontSize: "2em",
		},
	},
})

export const SideNav = styled("div", {
	position: "fixed",
	top: "0",
	left: "0",
	width: "100%",
	height: "100vh",
	backgroundColor: "#232323",
	transform: "translateX(100%)",

	transition: "transform 500ms ease-in-out",

	"&.active": {
		transform: "translateX(0%)",
	},

	"& #menuButton": {
		position: "absolute",
		top: "3vh",
		right: "5vw",
		color: "#ce0000",
	},

	"& ul": {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		height: "100%",
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
		gap: "1em",

		"& > a": {
			fontSize: "2em",
			width: "100%",
			"&.headerActiveItem": {
				"&::after": {
					display: "none",
					width: "0px",
					height: "0px",
				},
			},
		},

		"& button": {
			background: "#fff1",
			border: "3px solid #fff1",
			color: "#FFF",
			fontSize: "1.5em",
			padding: "1em 2em",
			borderRadius: "15px",
			cursor: "pointer",

			transition: "all 200ms ease-in-out",
			"&:hover": {
				fontWeight: "bold",
				border: "",
				background:
					"linear-gradient(to right, rgb(197, 72, 255), rgb(39, 242, 255)) no-repeat",
			},
		},
	},
})
