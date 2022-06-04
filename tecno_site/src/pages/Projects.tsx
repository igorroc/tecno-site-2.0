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
import imgPlaceHolder from "../assets/img/projects/placeholder.png"

const projects = [
	{
		title: "Semana de Inovação",
		description: "Website",
		link: "https://semanadeinovacaoilheus.com.br/",
		img: imgSemanaInovacao,
	},
	{
		title: "GuiaServe",
		description: "Aplicativo/WebSite",
		link: "",
		img: imgPlaceHolder,
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
	{
		title: "SIMMBRA",
		description: "WebSite",
		link: "",
		img: imgPlaceHolder,
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
						já feitos!
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

				{/* Projetos */}
				<SectionTitle title="Projetos" color="blue"></SectionTitle>
				<CardsWrapper>
					{projects.map((project, index) => {
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
			</MaxWidthWrapper>
			<Division height="normal" line={false} />
			<Footer />
		</GlobalDiv>
	)
}

export default Projects
