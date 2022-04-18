import { styled } from "@stitches/react"
import { Header } from "../components/Header"

import mainBg from "../assets/img/backgroundHome.png"
import { MainText } from "../components/MainText"
import { Button } from "../components/Button"
import { MaxWidthWrapper } from "../components/MaxWidthWrapper"
import { BackgroundImage } from "../components/BackgroundImage"
import { ScrollIndicator } from "../components/ScrollIndicator"
import { WrapperMainContent } from "../components/WrapperMainContent"
import {
	Carrousel,
	CarrouselNode,
	CarrouselNodeIcon,
	CarrouselNodeTitle,
	CarrouselNodeContent,
} from "../components/Carrousel"
import { SectionTitle } from "../components/SectionTitle"
import { Icon } from "../components/Icon"
import { Footer } from "../components/Footer"
import GlobalDiv from "../components/GlobalDiv"

function Home() {
	return (
		<GlobalDiv>
			<Header active="Home"></Header>
			<BackgroundImage image={mainBg}></BackgroundImage>
			<MaxWidthWrapper>
				{/* Main Section */}
				<WrapperMainContent>
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
				</WrapperMainContent>
				{/* Sections */}
				<SectionTitle title="Serviços" color="blue">
					Conheça os nossos <strong>serviços</strong>!
				</SectionTitle>
				<Carrousel>
					<CarrouselNode>
						<CarrouselNodeIcon />
						<CarrouselNodeTitle>Aplicativos</CarrouselNodeTitle>
						<CarrouselNodeContent>
							Nós desenvolvemos aplicativos nativos de alta
							performance para atender sua necessidade, seus
							clientes e seu bolso.
						</CarrouselNodeContent>
					</CarrouselNode>
					<CarrouselNode active>
						<CarrouselNodeIcon />
						<CarrouselNodeTitle>Websites</CarrouselNodeTitle>
						<CarrouselNodeContent>
							Desenvolvemos desde uma página simples de portfólio,
							até um site institucional com várias páginas.
						</CarrouselNodeContent>
					</CarrouselNode>
					<CarrouselNode>
						<Icon prefix="fas" iconName="arrow-right" />
						<CarrouselNodeTitle>Sistemas Web</CarrouselNodeTitle>
						<CarrouselNodeContent>
							Usamos das melhores tecnologias do mercado para
							desenvolver sua aplicação. Garantindo, que aquele
							sistema que gerencia sua barbearia ou que seu
							e-commerce, saia com a qualidade esperada.
						</CarrouselNodeContent>
					</CarrouselNode>
				</Carrousel>
				<SectionTitle title="Orçamento" color="purple"></SectionTitle>
				<SectionTitle title="Parceiros" color="blue">
					Conheça quem confia na TecnoJr!
				</SectionTitle>
			</MaxWidthWrapper>
			<Footer />
		</GlobalDiv>
	)
}

export default Home
