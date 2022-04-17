import { styled } from "@stitches/react"
import { Header } from "../components/Header"

import mainBg from "../assets/img/backgroundProjects.png"
import { MainText } from "../components/MainText"
import { Button } from "../components/Button"
import { MaxWidthWrapper } from "../components/MaxWidthWrapper"
import { BackgroundImage } from "../components/BackgroundImage"
import { ScrollIndicator } from "../components/ScrollIndicator"
import { Footer } from "../components/Footer"
import { Division } from "../components/Division"

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

function Projects() {
	return (
		<div>
			<Header active="Projetos"></Header>
			<BackgroundImage image={mainBg}></BackgroundImage>
			<MaxWidthWrapper>
				<WrapperContent>
					<h1>
						Conheça alguns dos
						<MainText>Sonhos e Soluções</MainText>
						já implementados
					</h1>

					<Button url="#">
						Saiba mais
						<i className="fa-solid fa-caret-down"></i>
					</Button>
					<ScrollIndicator />
				</WrapperContent>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptate asperiores consectetur temporibus exercitationem
					animi, nostrum repudiandae veniam id in minima magnam ullam
					eius illum. Ea dignissimos autem vitae laborum beatae.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptate asperiores consectetur temporibus exercitationem
					animi, nostrum repudiandae veniam id in minima magnam ullam
					eius illum. Ea dignissimos autem vitae laborum beatae.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptate asperiores consectetur temporibus exercitationem
					animi, nostrum repudiandae veniam id in minima magnam ullam
					eius illum. Ea dignissimos autem vitae laborum beatae.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptate asperiores consectetur temporibus exercitationem
					animi, nostrum repudiandae veniam id in minima magnam ullam
					eius illum. Ea dignissimos autem vitae laborum beatae.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptate asperiores consectetur temporibus exercitationem
					animi, nostrum repudiandae veniam id in minima magnam ullam
					eius illum. Ea dignissimos autem vitae laborum beatae.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptate asperiores consectetur temporibus exercitationem
					animi, nostrum repudiandae veniam id in minima magnam ullam
					eius illum. Ea dignissimos autem vitae laborum beatae.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptate asperiores consectetur temporibus exercitationem
					animi, nostrum repudiandae veniam id in minima magnam ullam
					eius illum. Ea dignissimos autem vitae laborum beatae.
				</p>
			</MaxWidthWrapper>
			<Footer />
		</div>
	)
}

export default Projects
