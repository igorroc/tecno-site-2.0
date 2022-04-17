import { styled } from "@stitches/react"
import { Header } from "../components/Header"

import mainBg from "../assets/img/backgroundHome.png"
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

function Home() {
	return (
		<div>
			<Header></Header>
			<BackgroundImage image={mainBg}></BackgroundImage>
			<MaxWidthWrapper>
				<WrapperContent>
					<h1>
						Implementando
						<MainText>Sonhos e Soluções</MainText>
					</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Aspernatur sapiente mollitia id, excepturi
						voluptates ad, veniam soluta dicta maxime, cumque porro.
						Enim doloremque sapiente voluptatum! Consequuntur rerum
						cumque animi. Veritatis.
					</p>
					<Button url="http://prosel.tecnojr.com.br/">
						PROSEL
						<i className="fa-solid fa-arrow-right"></i>
					</Button>
					<ScrollIndicator />
				</WrapperContent>
			</MaxWidthWrapper>
		</div>
	)
}

export default Home
