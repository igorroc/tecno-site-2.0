import mainBg from "../../assets/img/backgroundProjects.png"

import { Header } from "../../components/Header"
import { MainText } from "../../components/MainText"
import { Button } from "../../components/Buttons/Button"
import { MaxWidthWrapper } from "../../components/Global/MaxWidthWrapper"
import { BackgroundImage } from "../../components/BackgroundImage"
import { ScrollIndicator } from "../../components/ScrollIndicator"
import { Footer } from "../../components/Footer"
import { Division } from "../../components/Global/Division"
import { WrapperMainContent } from "../../components/WrapperMainContent"
import GlobalDiv from "../../components/Global/GlobalDiv"
import { SectionTitle } from "../../components/SectionTitle"
import CardsWrapper, { Card } from "../../components/Card"

import { motion } from "framer-motion"

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
		title: "Partiu Dirigir",
		description: "Sistema Web",
		link: "https://partiu.tecnojr.com.br",
		img: "partiu.png",
	},
]

const internalProjects = [
	{
		title: "COLCIC UESC",
		author: "Igor Rocha",
		link: "https://colcic.uesc.br",
		img: "colcic.png",
	},
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
	{
		title: "Estarolas",
		author: "Joabe Ferreira",
		link: "https://gannjobs.github.io/ProjetoWebTecno/",
		img: "estarolas.jpg",
	},
	{
		title: "Pokedex",
		author: "Solana Ametista",
		link: "http://solana-ametista.github.io",
		img: "pokedex.jpg",
	},
]

const animations = {
	initial: { opacity: 0, y: -50 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -50 },
}
export default function Projects() {
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
					blurHash="oH9a2u00-@a$V?ohxyRNkCjva_ayISxwWBW9ogaxtARhohWBoeWCRio#WAa$j?a#ahj@j]axazof"
				/>
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
							qualidade e confiança que eles precisam. Confira
							quem já confiou em nossas soluções:
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
						<b>realizados pela Tecno</b> para <b>nossos clientes</b>
						.
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
						Fique por dentro dos projetos pessoais que{" "}
						<b>nossos membros</b> estão desenvolvendo.
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
		</motion.div>
	)
}
