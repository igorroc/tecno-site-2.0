import { styled } from "@stitches/react"
import { Header } from "../components/Header"

import mainBg from "../assets/img/backgroundContact.png"
import { MainText } from "../components/MainText"
import { Button } from "../components/Button"
import { MaxWidthWrapper } from "../components/MaxWidthWrapper"
import { BackgroundImage } from "../components/BackgroundImage"
import { WrapperMainContent } from "../components/WrapperMainContent"

function Contact() {
	return (
		<div>
			<Header active="Contato"></Header>
			<BackgroundImage image={mainBg} fullHeight></BackgroundImage>
			<MaxWidthWrapper>
				<WrapperMainContent>
					<h1>
						Entre em<MainText>contato</MainText>
					</h1>
				</WrapperMainContent>
			</MaxWidthWrapper>
		</div>
	)
}

export default Contact
