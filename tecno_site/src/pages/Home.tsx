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
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { useState } from "react"

type Provider = { active: boolean }

function Home() {
	const [services, setServices] = useState<Provider[]>([
		{ active: true },
		{ active: false },
		{ active: false },
		{ active: false },
		{ active: false },
		{ active: false },
	])

	const carrouselOnChange = (velho: Number, novo: Number) => {
		let newArray = []
		newArray.push(...services)
		newArray.map((i, index) => {
			if (index === velho) {
				i.active = false
			}
			if (index === novo) {
				i.active = true
			}
		})

		setServices([...newArray])
	}

	const settings = {
		className: "centerCarrousel",
		centerMode: true,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 3,
		speed: 300,
		focusOnSelect: true,
		// beforeChange: carrouselOnChange,
	}

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
				<Slider {...settings}>
					<CarrouselNode active={services[0].active}>
						<CarrouselNodeIcon iconName="globe" prefix="fas" />
						<CarrouselNodeTitle>Websites</CarrouselNodeTitle>
						<CarrouselNodeContent>
							Desenvolvemos desde uma página simples de portfólio,
							até um site institucional com várias páginas.
						</CarrouselNodeContent>
					</CarrouselNode>
					<CarrouselNode active={services[1].active}>
						<CarrouselNodeIcon
							iconName="mobile-button"
							prefix="fas"
						/>
						<CarrouselNodeTitle>Aplicativos</CarrouselNodeTitle>
						<CarrouselNodeContent>
							Nós desenvolvemos aplicativos nativos de alta
							performance para atender sua necessidade, seus
							clientes e seu bolso.
						</CarrouselNodeContent>
					</CarrouselNode>
					<CarrouselNode active={services[2].active}>
						<CarrouselNodeIcon iconName="server" prefix="fas" />
						<CarrouselNodeTitle>Sistemas Web</CarrouselNodeTitle>
						<CarrouselNodeContent>
							Usamos das melhores tecnologias do mercado para
							desenvolver sua aplicação. Garantindo, que aquele
							sistema que gerencia sua barbearia ou que seu
							e-commerce, saia com a qualidade esperada.
						</CarrouselNodeContent>
					</CarrouselNode>
					<CarrouselNode active={services[3].active}>
						<CarrouselNodeIcon
							iconName="mobile-button"
							prefix="fas"
						/>
						<CarrouselNodeTitle>Aplicativos</CarrouselNodeTitle>
						<CarrouselNodeContent>
							Nós desenvolvemos aplicativos nativos de alta
							performance para atender sua necessidade, seus
							clientes e seu bolso.
						</CarrouselNodeContent>
					</CarrouselNode>
					<CarrouselNode active={services[4].active}>
						<CarrouselNodeIcon iconName="server" prefix="fas" />
						<CarrouselNodeTitle>Sistemas Web</CarrouselNodeTitle>
						<CarrouselNodeContent>
							Usamos das melhores tecnologias do mercado para
							desenvolver sua aplicação. Garantindo, que aquele
							sistema que gerencia sua barbearia ou que seu
							e-commerce, saia com a qualidade esperada.
						</CarrouselNodeContent>
					</CarrouselNode>
				</Slider>
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
