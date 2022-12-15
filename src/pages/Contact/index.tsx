import { WrapperForm } from "./styles"

import { useState } from "react"

import mainBg from "../../assets/img/backgroundContact.png"

import { Header } from "../../components/Header"
import { MainText } from "../../components/MainText"
import { MaxWidthWrapper } from "../../components/Global/MaxWidthWrapper"
import { BackgroundImage } from "../../components/BackgroundImage"
import { WrapperMainContent } from "../../components/WrapperMainContent"
import { Form } from "../../components/Form"
import GlobalDiv from "../../components/Global/GlobalDiv"
import { Button } from "../../components/Buttons/Button"

export default function Contact() {
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
