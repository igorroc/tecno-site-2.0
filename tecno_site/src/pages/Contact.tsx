import { styled } from "@stitches/react"
import { Header } from "../components/Header"

import mainBg from "../assets/img/backgroundContact.png"
import { MainText } from "../components/MainText"
import { Button } from "../components/Button"
import { MaxWidthWrapper } from "../components/MaxWidthWrapper"
import { BackgroundImage } from "../components/BackgroundImage"

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

function Contact() {
	return (
		<div>
			<Header active="Contato"></Header>
			<BackgroundImage image={mainBg} fullHeight></BackgroundImage>
			<MaxWidthWrapper>
				<WrapperContent>
					<h1>
						Entre em<MainText>contato</MainText>
					</h1>
				</WrapperContent>
			</MaxWidthWrapper>
		</div>
	)
}

export default Contact
