import { keyframes, styled } from "@stitches/react"
import React from "react"
import Tecno from "../assets/icons/logo_white.svg?component"
import BrasilJr from "../assets/img/partners/brasiljr.png"
import UniJr from "../assets/img/partners/unijr.png"
import COLCIC from "../assets/img/partners/colcic.png"
import UESC from "../assets/img/partners/uesc.png"

const SpinRight = keyframes({
	"100%": {
		"-webkit-transform": "rotate(360deg)",
		"-moz-transform": "rotate(360deg)",
		"-ms-transform": "rotate(360deg)",
		"-o-transform": "rotate(360deg)",
		transform: "rotate(360deg)",
	},
})

const SpinLeft = keyframes({
	"100%": {
		"-webkit-transform": "$$scale rotate(-360deg)",
		"-moz-transform": "$$scale rotate(-360deg)",
		"-ms-transform": "$$scale rotate(-360deg)",
		"-o-transform": "$$scale rotate(-360deg)",
		transform: "$$scale rotate(-360deg)",
	},
})

const OrbitContainer = styled("div", {
	position: "relative",
	top: "25px",
	right: "25px",
	marginLeft: "auto",
	width: "500px",
	height: "500px",
})

const OuterOrbit = styled("div", {
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

const OrbitCenter = styled("div", {
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

function Orbit() {
	React.useEffect(() => {
		let qtdElements = document.querySelectorAll(".orbitRotate").length
		document.querySelectorAll(".orbitRotate")?.forEach((element, index) => {
			let delay = 20 / qtdElements
			;(element as HTMLElement).style.animationDelay = `${index * delay}s`

			if (element)
				if (element.firstChild)
					(
						element.firstChild as HTMLElement
					).style.animationDelay = `${index * delay}s`
		})
	}, [])

	return (
		<OrbitContainer>
			<OuterOrbit className="orbitRotate">
				<div className="iconParceiro">
					<img src={BrasilJr} alt="Icone BrasilJr" />
				</div>
			</OuterOrbit>
			<OuterOrbit className="orbitRotate">
				<div className="iconParceiro">
					<img src={UniJr} alt="Icone BrasilJr" />
				</div>
			</OuterOrbit>
			<OuterOrbit className="orbitRotate">
				<div className="iconParceiro">
					<img src={COLCIC} alt="Icone Colcic" />
				</div>
			</OuterOrbit>
			<OuterOrbit className="orbitRotate">
				<div className="iconParceiro">
					<img src={UESC} alt="Icone BrasilJr" />
				</div>
			</OuterOrbit>

			{/* LOGO */}
			<OrbitCenter>
				<Tecno />
			</OrbitCenter>
		</OrbitContainer>
	)
}

export default Orbit
