import { Header } from "../../components/Header"

import mainBg from "../../assets/img/backgroundHome.png"
import { MainText } from "../../components/MainText"
import { Button } from "../../components/Buttons/Button"
import { MaxWidthWrapper } from "../../components/Global/MaxWidthWrapper"
import { BackgroundImage } from "../../components/BackgroundImage"
import { ScrollIndicator } from "../../components/ScrollIndicator"
import { WrapperMainContent } from "../../components/WrapperMainContent"
import { SectionTitle } from "../../components/SectionTitle"
import { Footer } from "../../components/Footer"
import GlobalDiv from "../../components/Global/GlobalDiv"

function PressKit() {
	return (
		<GlobalDiv>
			<Header active="Press Kit"></Header>

			<BackgroundImage image={mainBg}></BackgroundImage>

			<MaxWidthWrapper>
				{/* Main Section */}
				<WrapperMainContent>
					<h1>
						<MainText>Press</MainText>
						Kit
					</h1>
					<p>
						O kit de imprensa da TecnoJr é um conjunto de
						informações que podem ser utilizadas para divulgar a
						empresa e seus produtos. Aqui você encontra o logotipo,
						cores e material de divulgação.
					</p>
					<Button url="/contact">
						Contate-nos
						<i className="fa-solid fa-arrow-right"></i>
					</Button>
					<ScrollIndicator />
				</WrapperMainContent>
				{/* Sections */}
				<SectionTitle title="Serviços" color="blue">
					Conheça os nossos <strong>serviços</strong>!
				</SectionTitle>

				{/* Orçamento */}
				<SectionTitle title="Orçamento" color="purple"></SectionTitle>

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
			</MaxWidthWrapper>

			<Footer />
		</GlobalDiv>
	)
}

export default PressKit
