import { keyframes, styled } from "@stitches/react"

export const animationMeshGradient = keyframes({
	"0%": {
		backgroundPosition: "-100% -100%",
	},
	"100%": {
		backgroundPosition: "100% 100%",
	},
})

export const LinksWrapper = styled("div", {
	width: "100%",
	maxWidth: "300px",
	margin: "100px auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "50px",
})

export const Header = styled("header", {
	width: "100vw",
	height: "max-content",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	textAlign: "center",
	gap: "1em",

	"& a": { color: "white" },

	"& .logo": {
		width: "5em",
		height: "5em",
	},

	"& h1": {
		fontSize: "2em",
	},

	"& h2": {
		fontSize: "1em",
		fontWeight: "normal",
	},
})

export const SocialWrapper = styled("div", {
	display: "flex",
	alignItems: "center",
	gap: "20px",
	background: "#fff1",
	padding: "1em 2em",
	borderRadius: "10px",

	"& a": {
		color: "#fff6",
		transition: "color 200ms ease",

		"&:hover": {
			color: "white",
		},

		"& svg": {
			fontSize: "1.5em",
			transition: "font-size 200ms ease",

			"&:hover": {
				fontSize: "1.7em",
			},
		},
	},
})

export const Section = styled("div", {
	width: "90%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "20px",

	"& h3": {
		fontSize: "2em",
	},

	"& a": {
		width: "100%",
		padding: "1em 2em",
		borderRadius: "10px",
		background: "#fff1",
		color: "white",
		fontWeight: "500",
		textAlign: "center",
		transition: "background 200ms ease, letter-spacing 200ms ease",

		"&:hover": {
			background: "#fff2",
			letterSpacing: "2px",
		},
	},
})

export const Background = styled("div", {
	width: "100vw",
	height: "100vh",
	position: "fixed",
	top: "0",
	left: "0",
	zIndex: "-1",
	backgroundColor: "#5d0ca0",
	backgroundImage: `radial-gradient(at 66% 93%, hsla(235, 90%, 58%, 1) 0, hsla(235, 90%, 58%, 0) 50%),
	radial-gradient(at 22% 2%, hsla(156, 95%, 69%, 1) 0, hsla(156, 95%, 69%, 0) 50%),
	radial-gradient(at 66% 66%, hsla(353, 90%, 65%, 1) 0, hsla(353, 90%, 65%, 0) 50%),
	radial-gradient(at 86% 10%, hsla(284, 88%, 56%, 1) 0, hsla(284, 88%, 56%, 0) 50%),
	radial-gradient(at 96% 72%, hsla(298, 86%, 56%, 1) 0, hsla(298, 86%, 56%, 0) 50%),
	radial-gradient(at 25% 87%, hsla(273, 86%, 50%, 1) 0, hsla(273, 86%, 50%, 0) 50%),
	radial-gradient(at 95% 29%, hsla(346, 95%, 51%, 1) 0, hsla(346, 95%, 51%, 0) 50%),
	radial-gradient(at 21% 67%, hsla(284, 88%, 54%, 1) 0, hsla(284, 88%, 54%, 0) 50%),
	radial-gradient(at 24% 14%, hsla(153, 94%, 57%, 1) 0, hsla(153, 94%, 57%, 0) 50%)`,
	backgroundRepeat: "repeat",
	backgroundSize: "200%",
	filter: "blur(100px)",

	animation: `${animationMeshGradient} 5s infinite linear`,

	"&::after": {
		content: "",
		position: "absolute",
		top: "0",
		left: "0",
		bottom: "0",
		right: "0",
		background: "#000a",
		zIndex: "1",
	},
})
