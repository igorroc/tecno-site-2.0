import { keyframes, styled } from "@stitches/react"

export const SpinRight = keyframes({
	"100%": {
		"-webkit-transform": "rotate(360deg)",
		"-moz-transform": "rotate(360deg)",
		"-ms-transform": "rotate(360deg)",
		"-o-transform": "rotate(360deg)",
		transform: "rotate(360deg)",
	},
})

export const SpinLeft = keyframes({
	"100%": {
		"-webkit-transform": "$$scale rotate(-360deg)",
		"-moz-transform": "$$scale rotate(-360deg)",
		"-ms-transform": "$$scale rotate(-360deg)",
		"-o-transform": "$$scale rotate(-360deg)",
		transform: "$$scale rotate(-360deg)",
	},
})

export const OrbitContainer = styled("div", {
	position: "relative",
	top: "25px",
	right: "25px",
	margin: "0 auto",
	width: "500px",
	height: "500px",
})

export const OuterOrbit = styled("div", {
	position: "absolute",
	top: "0%",
	right: "0%",
	width: "100%",
	height: "100%",
	borderRadius: "100%",
	"-webkit-animation": `${SpinRight} 20s linear infinite`,
	animation: `${SpinRight} 20s linear infinite`,
	pointerEvents: "none",

	"&:first-child": {
		border: "2px #4A437F dashed",
	},

	"& .iconParceiro": {
		position: "absolute",
		width: "max-content",
		maxWidth: "80px",
		height: "80px",
		top: "5%",
		left: "10%",
		backgroundColor: "white",
		borderRadius: "100%",
		overflow: "hidden",
		$$scale: "scale(1)",
		pointerEvents: "auto",

		"-webkit-animation": `${SpinLeft} 20s linear infinite`,
		animation: `${SpinLeft} 20s linear infinite`,
		transition: "all 300ms ease-in-out",

		"& img": {
			width: "100%",
			height: "100%",
			objectFit: "cover",
		},
	},

	"&:hover": {
		animationPlayState: "paused",

		"& .iconParceiro": {
			animationPlayState: "paused",
			transition: "all 300ms ease-in-out",

			"&:hover": {
				$$scale: "scale(2)",
				maxWidth: "280px",
				borderRadius: "10px",
			},
		},
	},
})

export const OrbitCenter = styled("div", {
	position: "absolute",
	width: "130px",
	height: "130px",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	background: "white",
	borderRadius: "100%",

	"& svg": {
		width: "60px",
		height: "auto",
		"& path": {
			fill: "#232225",
		},
	},
})
