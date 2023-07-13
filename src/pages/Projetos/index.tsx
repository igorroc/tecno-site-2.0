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
import { externalProjects, internalProjects } from "../../common/projectsInfo"

const animations = {
	initial: { opacity: 0, y: -50 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -50 },
}

export default function Projetos() {
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
							A TecnoJr investe fundo em <b>capacitações</b> de
							nossos desenvolvedores para oferecer aos nossos
							clientes a <b>qualidade</b> e <b>confiança</b> que
							eles precisam. Confira quem já confiou em nossas
							soluções:
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
										"/assets/img/projects/" +
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
										"/assets/img/projects/" +
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
