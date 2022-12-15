import { Wrapper, WrapperContent, Paragraph } from "./styles"
import { Header } from "../../components/Header"
import { CodeText } from "../../components/CodeText"
import { Button } from "../../components/Buttons/Button"
import { BackgroundImage } from "../../components/BackgroundImage"
import { MainText } from "../../components/MainText"

import img404 from "/src/assets/img/background404.png"

export default function PageNotFound() {
	return (
		<Wrapper>
			<BackgroundImage image={img404} fullHeight />
			<WrapperContent>
				<MainText size="giant">404</MainText>
				<Paragraph>
					Bem... Eu não sei como você veio parar aqui em{" "}
					<CodeText text={window.location.pathname} />, mas eu acho
					que não tem nada de divertido por essas bandas. Que tal
					voltar para o início?
				</Paragraph>
				<Button url="/">
					<i className="fa-solid fa-house"></i> INÍCIO
				</Button>
			</WrapperContent>
		</Wrapper>
	)
}
