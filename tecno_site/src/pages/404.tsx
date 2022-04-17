import { styled } from "@stitches/react"
import { Header } from "../components/Header"
import { CodeText } from "../components/CodeText"
import { Button } from "../components/Button"
import { BackgroundImage } from "../components/BackgroundImage"
import { MainText } from "../components/MainText"

import img404 from "/src/assets/img/background404.png"

const Wrapper = styled("div", {
	position: "absolute",
	width: "100%",
	height: "100%",
	overflow: "hidden",
})

const WrapperContent = styled("div", {
	width: "50%",
	maxWidth: "510px",
	margin: "10vh auto",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center",
	gap: "50px",
})

const Paragraph = styled("p", {
	lineHeight: "2em",
	fontSize: "1.2em",
	textShadow: "0px 1px 5px black",
})

function PageNotFound() {
	return (
		<Wrapper>
			<Header active="404" />
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

export default PageNotFound
