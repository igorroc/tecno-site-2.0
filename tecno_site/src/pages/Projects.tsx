import { styled } from "@stitches/react"
import { Header } from "../components/Header"

import mainBg from "../assets/img/backgroundProjects.png"
import { MainText } from "../components/MainText"
import { Button } from "../components/Buttons/Button"
import { MaxWidthWrapper } from "../components/Global/MaxWidthWrapper"
import { BackgroundImage } from "../components/BackgroundImage"
import { ScrollIndicator } from "../components/ScrollIndicator"
import { Footer } from "../components/Footer"
import { Division } from "../components/Global/Division"
import { WrapperMainContent } from "../components/WrapperMainContent"
import GlobalDiv from "../components/Global/GlobalDiv"
import { SectionTitle } from "../components/SectionTitle"
import CardsWrapper, { Card } from "../components/Card"

import imgSemanaInovacao from "../assets/img/projects/semana_inovacao.png"
import imgSimmbra from "../assets/img/projects/simmbra.png"
import imgAfusc from "../assets/img/projects/afusc.png"
import imgSpaceTerra from "../assets/img/projects/spaceterra.jpg"
import imgNasaApps from "../assets/img/projects/nasaapps.png"
import imgNasaSalvador from "../assets/img/projects/appssalvador.png"
import imgDatabaseUesc from "../assets/img/projects/databaseuesc.png"
import imgPlaceHolder from "../assets/img/projects/placeholder.png"

const externalProjects = [
	{
		title: "NASA Space Terra",
		description: "Website",
		link: "https://spaceterra.org/",
		img: imgSpaceTerra,
	},
	{
		title: "NASA Space Apps",
		description: "Website",
		link: "https://nasa.spaceterra.org/",
		img: imgNasaApps,
	},
	{
		title: "Semana de Inovação",
		description: "Website",
		link: "https://semanadeinovacaoilheus.com.br/",
		img: imgSemanaInovacao,
	},
	{
		title: "SIMMBRA",
		description: "WebSite",
		link: "https://simmbra.com.br",
		img: imgSimmbra,
	},
	{
		title: "NASA Space Apps Salvador",
		description: "Website",
		link: "https://salvador.spaceterra.org/",
		img: imgNasaSalvador,
	},
	{
		title: "Afusc",
		description: "WebSite",
		link: "https://afuscuesc.com",
		img: imgAfusc,
	},
	{
		title: "UEPG",
		description: "WebSite",
		link: "",
		img: imgPlaceHolder,
	},
	{
		title: "Partiu Dirigir",
		description: "Aplicativo",
		link: "",
		img: imgPlaceHolder,
	},
	{
		title: "Observatório Social",
		description: "WebSite",
		link: "",
		img: imgPlaceHolder,
	},
]

const internalProjects = [
	{
		title: "Database UESC",
		author: "Igor Rocha",
		link: "https://uesc.ilrocha.com",
		img: imgDatabaseUesc,
	},
]

function Projects() {
	return (
		<GlobalDiv>
			<Header active="Projetos"></Header>
			<BackgroundImage image={mainBg}></BackgroundImage>
			<MaxWidthWrapper>
				<WrapperMainContent>
					<h1>
						Conheça alguns dos
						<MainText>sonhos</MainText>
						já desenvolvidos!
					</h1>
					<p>
						A TecnoJr investe fundo em capacitações de nossos
						desenvolvedores para oferecer aos nossos clientes a
						qualidade e confiança que eles precisam. Confira quem já
						confiou em nossas soluções:
					</p>

					<Button url="#projetosExternos">
						Saiba mais
						<i className="fa-solid fa-caret-down"></i>
					</Button>
					<ScrollIndicator />
				</WrapperMainContent>

				{/* Projetos */}
				<SectionTitle
					title="Projetos Externos"
					color="blue"
					id="projetosExternos"
				></SectionTitle>
				<CardsWrapper>
					{externalProjects.map((project, index) => {
						return (
							<Card
								title={project.title}
								description={project.description}
								link={project.link}
								img={project.img}
								key={index}
							/>
						)
					})}
				</CardsWrapper>

				<SectionTitle
					title="Projetos Internos"
					color="purple"
					id="projetosInternos"
				></SectionTitle>
				<CardsWrapper>
					{internalProjects.map((project, index) => {
						return (
							<Card
								title={project.title}
								description={project.author}
								link={project.link}
								img={project.img}
								key={index}
							/>
						)
					})}
				</CardsWrapper>
			</MaxWidthWrapper>
			<Division height="normal" line={false} />
			<Footer />
		</GlobalDiv>
	)
}

export default Projects
