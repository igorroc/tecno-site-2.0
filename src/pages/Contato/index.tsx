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

import { motion } from "framer-motion"

const animations = {
	initial: { opacity: 0, y: -50 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -50 },
}

export default function Contato() {
	const [status, setStatus] = useState("form")
	const latitude = -14.796529895258624
	const longitude = -39.170944442327475

	return (
		<motion.div
			variants={animations}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.3 }}
		>
			<GlobalDiv>
				<BackgroundImage
					image={mainBg}
					fullHeight
					blurHash="o866[v1V=RJynnbE$,NXsrW-f8fiS0oNWUjuj[WUayj[a{jua{juaxjvWnoNWToNR%s;WTo3bEjv"
				/>
				<MaxWidthWrapper>
					{status == "form" && (
						<WrapperForm>
							<WrapperMainContent>
								<h1>
									Entre em<MainText>contato</MainText>
								</h1>
								<Form setStatus={setStatus} />
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
							<Button url="mailto:contato@tecnojr.com.br" newTab>
								Enviar email
								<i className="fa-solid fa-envelope"></i>
							</Button>
						</WrapperMainContent>
					)}
				</MaxWidthWrapper>
			</GlobalDiv>
		</motion.div>
	)
}
