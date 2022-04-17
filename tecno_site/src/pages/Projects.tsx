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
import { WrapperMainContent } from "../components/WrapperMainContent"

function Projects() {
	return (
		<div>
			<Header active="Projetos"></Header>
			<BackgroundImage image={mainBg}></BackgroundImage>
			<MaxWidthWrapper>
				<WrapperMainContent>
					<h1>
						Conheça alguns dos
						<MainText>Sonhos e Soluções</MainText>
						já implementados
					</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Aspernatur sapiente mollitia id, excepturi
						voluptates ad, veniam soluta dicta maxime, cumque porro.
						Enim doloremque sapiente voluptatum! Consequuntur rerum
						cumque animi. Veritatis.
					</p>

					<Button url="#">
						Saiba mais
						<i className="fa-solid fa-caret-down"></i>
					</Button>
					<ScrollIndicator />
				</WrapperMainContent>
			</MaxWidthWrapper>
			<Division height="normal" line={false} />
			<Footer />
		</div>
	)
}

export default Projects
