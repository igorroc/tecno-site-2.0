import { styled } from "@stitches/react"
import { Header } from "../components/Header"

import mainBg from "../assets/img/backgroundContact.png"
import { MainText } from "../components/MainText"
import { MaxWidthWrapper } from "../components/Global/MaxWidthWrapper"
import { BackgroundImage } from "../components/BackgroundImage"
import { WrapperMainContent } from "../components/WrapperMainContent"

import { Form } from "../components/Form"
import { Hexagon } from "../components/Hexagon"
import GlobalDiv from "../components/Global/GlobalDiv"
import { useEffect, useState } from "react"
import { Button } from "../components/Buttons/Button"

const WrapperForm = styled("div", {
	"& > div": {
		justifyContent: "start",
		margin: "20vh 0 0 0",
		height: "max-content",
	},
})

function Contact() {
	const [status, setStatus] = useState("form")
	const latitude = -14.796529895258624
	const longitude = -39.170944442327475

	return (
		<GlobalDiv>
			<Header active="Contato"></Header>
			<BackgroundImage image={mainBg} fullHeight></BackgroundImage>
			<MaxWidthWrapper>
				{status == "form" && (
					<WrapperForm>
						<WrapperMainContent>
							<h1>
								Entre em<MainText>contato</MainText>
							</h1>
							<Form n={status} setN={setStatus} />
						</WrapperMainContent>
					</WrapperForm>
				)}
				{status == "ok" && (
					<WrapperMainContent>
						<h1>
							Agradecemos seu <MainText>contato</MainText>
						</h1>
						<Button url="/">
							Início
							<i className="fa-solid fa-home"></i>
						</Button>
					</WrapperMainContent>
				)}
				{status == "erro" && (
					<WrapperMainContent>
						<h1>
							Ocorreu um <MainText>erro</MainText>
						</h1>
						<p>
							Envie um email diretamente para{" "}
							<a href="mailto:contato@tecnojr.com.br">
								contato@tecnojr.com.br
							</a>
						</p>
						<Button url="mailto:contato@tecnojr.com.br">
							Enviar email
							<i className="fa-solid fa-envelope"></i>
						</Button>
					</WrapperMainContent>
				)}
			</MaxWidthWrapper>
		</GlobalDiv>
	)
}

export default Contact
