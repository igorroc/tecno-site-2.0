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

const externalProjects = [
	{
		title: "NASA Space Terra",
		description: "Website",
		link: "https://spaceterra.org/",
		img: "spaceterra.jpg",
	},
	{
		title: "NASA Space Apps",
		description: "Website",
		link: "https://nasa.spaceterra.org/",
		img: "nasaapps.png",
	},
	{
		title: "Semana de Inovação",
		description: "Website",
		link: "https://semanadeinovacaoilheus.com.br/",
		img: "semana_inovacao.png",
	},
	{
		title: "SIMMBRA",
		description: "WebSite",
		link: "https://simmbra.com.br",
		img: "simmbra.png",
	},
	{
		title: "NASA Space Apps Salvador",
		description: "Website",
		link: "https://salvador.spaceterra.org/",
		img: "appssalvador.png",
	},
	{
		title: "Afusc",
		description: "WebSite",
		link: "https://afuscuesc.com",
		img: "afusc.png",
	},
	{
		title: "UEPG",
		description: "WebSite",
		link: "",
	},
	{
		title: "Partiu Dirigir",
		description: "Aplicativo",
		link: "",
	},
	{
		title: "Observatório Social",
		description: "WebSite",
		link: "",
	},
]

const internalProjects = [
	{
		title: "Database UESC",
		author: "Igor Rocha",
		link: "https://uesc.ilrocha.com/emails",
		img: "databaseuesc.png",
	},
	{
		title: "Calculadora de Notas",
		author: "Igor Rocha",
		link: "https://igorroc.github.io/finalcountdown/",
		img: "calculadoranotas.png",
	},
	{
		title: "Wiki de Suporte (LOL)",
		author: "Murilo Maia",
		link: "https://murilopmaia.github.io/projeto_final/",
		img: "wikilol.jpg",
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
				<p
					style={{
						marginBottom: "2rem",
					}}
				>
					Os <b>sonhos</b> que estão sendo{" "}
					<b>realizados pela Tecno</b> para <b>nossos clientes</b>.
				</p>
				<CardsWrapper>
					{externalProjects.map((project, index) => {
						return (
							<Card
								title={project.title}
								description={project.description}
								link={project.link}
								img={
									"/img/projects/" +
									(project.img || "placeholder.png")
								}
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
				<p
					style={{
						marginBottom: "2rem",
					}}
				>
					Fique por dentro dos projetos que <b>nossos membros</b>{" "}
					estão desenvolvendo.
				</p>
				<CardsWrapper>
					{internalProjects.map((project, index) => {
						return (
							<Card
								title={project.title}
								description={project.author}
								link={project.link}
								img={
									"/img/projects/" +
									(project.img || "placeholder.png")
								}
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
