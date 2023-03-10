import { styled } from "../../stitches.config"
import { keyframes } from "@stitches/react"

export const Animation = keyframes({
	"0%": { backgroundPositionX: "-100%" },
	"100%": { backgroundPositionX: "100%" },
})

export const FooterDiv = styled("footer", {
	backgroundColor: "#1a1823",
	width: "100%",
	display: "flex",
	marginTop: "150px",
	alignItems: "center",
	justifyContent: "center",

	"& #logoFooter": {
		height: "4em",
		width: "auto",
	},

	"& #goBack": {
		display: "flex",
		alignItems: "center",
		justifyContent: "right",
		gap: "10px",
		color: "white",
		width: "190px",
		textAlign: "center",

		transition: "letter-spacing 400ms ease-in-out",

		"&:hover": {
			letterSpacing: "1px",
		},
	},
	"& #copy": {
		textAlign: "center",
		marginBottom: "50px",

		a: {
			position: "relative",
			zIndex: 1,
			display: "inline-block",
			width: "fit-content",
			color: "#5aeb73",
			transition: "all 300ms ease-out",

			"&:after": {
				content: "",
				position: "absolute",
				zIndex: -1,
				left: 0,
				bottom: "-1px",
				width: "100%",
				height: "1px",
				background: "linear-gradient(90deg, #5aeb73,#0000, #5aeb73)",
				backgroundSize: "200% 100%",
				animation: `${Animation} 1s ease-in-out infinite reverse`,
			},

			"&:before": {
				content: "",
				position: "absolute",
				zIndex: -1,
				left: 0,
				bottom: "-1px",
				width: "100%",
				height: "1px",
				backgroundColor: "#5aeb73",
				opacity: 0,
				transition: "all 300ms ease-out",
			},

			"&:hover": {
				color: "#232323",
				fontWeight: "bold",
				padding: "0 5px",

				"&:after": {
					animationPlayState: "paused",
				},
				"&:before": {
					bottom: "0",
					opacity: 1,
					height: "100%",
				},
			},
		},
	},

	"@small": {
		"& #logoFooter": {
			height: "2.5em",
		},
	},

	"@medium": {
		"& #goBack": {
			justifyContent: "center",
		},
	},
})

export const ContactDiv = styled("div", {
	position: "relative",
	width: "80%",
	display: "flex",
	padding: "2em 3em",
	borderRadius: "5px 50px 50px 5px",
	transform: "translateY(-50%)",

	backgroundColor: "#202131",
	filter: `drop-shadow(0 1px 1px rgba(0,0,0,0.20))
					drop-shadow(0 2px 2px rgba(0,0,0,0.15))
					drop-shadow(0 4px 4px rgba(0,0,0,0.1))
					drop-shadow(0 6px 6px rgba(0,0,0,0.05))`,

	"& > div > p": {
		fontSize: "2em",
		fontWeight: "bold",
	},

	"& > button": {
		position: "absolute",
		top: "50%",
		right: "-100px",
		transform: "translateY(-50%)",
		letterSpacing: "1px",
		fontWeight: "bolder",
		fontSize: "2em",
		padding: "0.5em 1.6em",

		"&:hover": {
			transform: "translateY(-50%) scale(1.068)",
		},
	},

	"@large": {
		width: "max-content",
		flexDirection: "column",
		textAlign: "center",
		borderRadius: "20px",
		justifyContent: "center",
		alignItems: "center",
		paddingBottom: "4em",
		margin: "0 auto",

		"& > button": {
			transform: "translateY(50%)",
			top: "unset",
			right: "unset",
			bottom: "0",
		},
	},

	"@small": {
		fontSize: "12px",

		"& > div > p": {
			fontSize: "1.5em",
		},
	},
})

export const SocialList = styled("ul", {
	display: "flex",
	gap: "5px",

	"@medium": {
		gap: "2em",
	},
})

export const SocialListIcon = styled("a", {
	width: "1.5em",
	height: "1.5em",
	padding: "5px",

	display: "flex",
	justifyContent: "center",
	alignItems: "center",

	backgroundColor: "#1e1e1e",
	borderRadius: "100px",
	transition: "background 200ms ease-in-out, color 200ms ease-in-out",
	cursor: "pointer",
	color: "white",
	fontSize: "1em",

	"&:hover": {
		backgroundColor: "#292929",
		color: "#f25eff",
	},

	"@medium": {
		width: "2em",
		height: "2em",
	},
})

export const InfoItem = styled("a", {
	height: "max-content",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	gap: "1em",
	color: "white",
	maxWidth: "280px",
	textAlign: "center",
	transition: "color 200ms ease-in-out",

	"& .infoIcon > *": {
		fontSize: "3em",
	},

	"& span": {
		fontSize: "1.2em",
		fontWeight: "bold",
	},

	"& p": {
		fontSize: "1em",
	},

	"&:hover": {
		color: "#8ba2ff",
	},
})

export const FlexDiv = styled("div", {
	display: "flex",
	gap: "50px",
	variants: {
		column: {
			true: {
				flexDirection: "column",
			},
		},
		horizontalAlign: {
			center: {
				justifyContent: "center",
			},
			spaceAround: {
				justifyContent: "space-around",
			},
			spaceBetween: {
				justifyContent: "space-between",
			},
		},
		verticalAlign: {
			center: {
				alignItems: "center",
			},
			down: {
				alignItems: "end",
			},
		},
	},

	"@medium": {
		flexDirection: "column",
	},
})
