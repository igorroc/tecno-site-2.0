import React from "react"
import Tecno from "../../assets/icons/logo_white.svg?component"
import BrasilJr from "../../assets/img/partners/brasiljr.png"
import UniJr from "../../assets/img/partners/unijr.png"
import COLCIC from "../../assets/img/partners/colcic.png"
import UESC from "../../assets/img/partners/uesc.png"
import { OuterOrbit, OrbitContainer, OrbitCenter } from "./styles"

export default function Orbit() {
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
