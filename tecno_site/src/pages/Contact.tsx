import { styled } from "@stitches/react"
import { Header } from "../components/Header"

import mainBg from "../assets/img/backgroundContact.png"
import { MainText } from "../components/MainText"
import { MaxWidthWrapper } from "../components/MaxWidthWrapper"
import { BackgroundImage } from "../components/BackgroundImage"
import { WrapperMainContent } from "../components/WrapperMainContent"

import { Form } from "../components/Form"
import { Hexagon } from "../components/Hexagon"

const WrapperForm = styled("div", {
	"& > div": {
		justifyContent: "start",
		margin: "20vh 0",
		height: "max-content",
	},
})

const OverFlowContainer = styled("div", {
	width: "100vw",
	overflow: "hidden",
})

function Contact() {
	return (
		<OverFlowContainer>
			<Header active="Contato"></Header>
			<BackgroundImage image={mainBg} fullHeight></BackgroundImage>
			<MaxWidthWrapper>
				<Hexagon />
				<WrapperForm>
					<WrapperMainContent>
						<h1>
							Entre em<MainText>contato</MainText>
						</h1>
						<Form />
					</WrapperMainContent>
				</WrapperForm>
			</MaxWidthWrapper>
		</OverFlowContainer>
	)
}

export default Contact
