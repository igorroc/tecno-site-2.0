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

const WrapperForm = styled("div", {
	"& > div": {
		justifyContent: "start",
		margin: "20vh 0",
		height: "max-content",
	},
})

function Contact() {
	return (
		<GlobalDiv>
			<Header active="Contato"></Header>
			<BackgroundImage image={mainBg} fullHeight></BackgroundImage>
			<MaxWidthWrapper>
				{/* <Hexagon /> */}
				<WrapperForm>
					<WrapperMainContent>
						<h1>
							Entre em<MainText>contato</MainText>
						</h1>
						<Form />
					</WrapperMainContent>
				</WrapperForm>
			</MaxWidthWrapper>
		</GlobalDiv>
	)
}

export default Contact
