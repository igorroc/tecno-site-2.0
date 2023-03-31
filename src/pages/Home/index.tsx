import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import mainBg from "../../assets/img/backgroundHome.png"

import { Header } from "../../components/Header"
import { MainText } from "../../components/MainText"
import { Button } from "../../components/Buttons/Button"
import { MaxWidthWrapper } from "../../components/Global/MaxWidthWrapper"
import { BackgroundImage } from "../../components/BackgroundImage"
import { ScrollIndicator } from "../../components/ScrollIndicator"
import { WrapperMainContent } from "../../components/WrapperMainContent"
import {
	CarrouselNode,
	CarrouselNodeIcon,
	CarrouselNodeTitle,
	CarrouselNodeContent,
} from "../../components/Carrousel"
import { SectionTitle } from "../../components/SectionTitle"
import { Footer } from "../../components/Footer"
import GlobalDiv from "../../components/Global/GlobalDiv"
import SectionOrcamento from "../../components/SectionOrcamento"
import Orbit from "../../components/Orbit"

import { motion } from "framer-motion"

const animations = {
	initial: { opacity: 0, y: -50 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -50 },
}

export default function Home() {
	const settings = {
		className: "centerCarrousel",
		centerMode: true,
		infinite: true,
		centerPadding: "0px",
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 1,
		speed: 300,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 680,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}

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
					blurHash="oNB2jb0]-at6NXssRWX3V_WVafj]X2xIotjJocaxRlWnRlbaWDj[t3n,t6aeofaxRkbHRkkCWBj]"
				></BackgroundImage>

				<MaxWidthWrapper>
					{/* Main Section */}
					<WrapperMainContent>
						<h1>
							Implementando
							<MainText>Sonhos e Soluções</MainText>
						</h1>
						<p>
							A nossa cultura é transformar qualquer <b>ideia</b>{" "}
							em um <b>projeto de qualidade</b>. Aqui, fazemos de
							tudo para garantir que as nossas soluções ofereçam{" "}
							<b>segurança e praticidade</b> para a vida de nossos
							clientes.
						</p>
						<Button url="/contato">
							Contate-nos
							<i className="fa-solid fa-arrow-right"></i>
						</Button>
						<ScrollIndicator />
					</WrapperMainContent>
					{/* Sections */}
					<SectionTitle title="Serviços" color="blue">
						Conheça os nossos <strong>serviços</strong>!
					</SectionTitle>
					<Slider {...settings}>
						<CarrouselNode>
							<CarrouselNodeIcon iconName="server" prefix="fas" />
							<CarrouselNodeTitle>
								Sistemas Web
							</CarrouselNodeTitle>
							<CarrouselNodeContent>
								Usamos das melhores tecnologias do mercado para
								desenvolver sua aplicação. Garantindo, que
								aquele sistema que gerencia sua barbearia ou que
								seu e-commerce, saia com a qualidade esperada.
							</CarrouselNodeContent>
						</CarrouselNode>

						<CarrouselNode>
							<CarrouselNodeIcon iconName="globe" prefix="fas" />
							<CarrouselNodeTitle>Websites</CarrouselNodeTitle>
							<CarrouselNodeContent>
								Desenvolvemos desde uma página simples de
								portfólio, até um site institucional com várias
								páginas.
							</CarrouselNodeContent>
						</CarrouselNode>

						<CarrouselNode>
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
					</Slider>

					{/* Orçamento */}
					<SectionTitle
						title="Orçamento"
						color="purple"
					></SectionTitle>
					<SectionOrcamento />

					{/* Parceiros */}
					<SectionTitle title="Parceiros" color="blue">
						Conheça quem confia na TecnoJr!
					</SectionTitle>
					<p>
						Ou acompanhe como estamos nos saindo pela{" "}
						<a
							href="https://portal.brasiljunior.org.br/ejs/tecnojr/perfil"
							target="_blank"
						>
							BrasilJr
						</a>
					</p>
					<Orbit />
				</MaxWidthWrapper>

				<Footer />
			</GlobalDiv>
		</motion.div>
	)
}
