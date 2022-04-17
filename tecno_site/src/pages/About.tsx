import { styled } from "@stitches/react"
import { Header } from "../components/Header"

import mainBg from "../assets/img/backgroundAbout.png"
import { MainText } from "../components/MainText"
import { Button } from "../components/Button"
import { MaxWidthWrapper } from "../components/MaxWidthWrapper"
import { BackgroundImage } from "../components/BackgroundImage"
import { ScrollIndicator } from "../components/ScrollIndicator"

const WrapperContent = styled("div", {
	position: "relative",
	width: "100%",
	display: "flex",
	flexDirection: "column",
	gap: "45px",

	marginTop: "6em",

	"& > h1": {
		fontSize: "3em",
		width: "max-content",
	},

	"& > p": {
		fontSize: "1.2em",
		maxWidth: "500px",
	},
})

function About() {
	return (
		<div>
			<Header active="Sobre"></Header>
			<BackgroundImage image={mainBg}></BackgroundImage>
			<MaxWidthWrapper>
				<WrapperContent>
					<h1>
						Quem é a<MainText>TecnoJr?</MainText>
					</h1>
					<p>
						Fundada em 2002, a Empresa TecnoJr é voltada para o
						curso de Ciência da Computação da Universidade Estadual
						de Santa Cruz (UESC). Desde então, vem atuando na área
						de desenvolvimento de sistemas e aproximando o mundo
						acadêmico do empresarial, desenvolvendo o espírito
						empreendedor de seus colaboradores. Atualmente é
						constituida por 19 membros.
					</p>
					<Button url="#">
						Membros
						<i className="fa-solid fa-user"></i>
					</Button>
					<ScrollIndicator />
				</WrapperContent>
			</MaxWidthWrapper>
		</div>
	)
}

export default About
