import { styled } from "@stitches/react"
import { Header } from "../components/Header"

import { MainText } from "../components/MainText"
import { Button } from "../components/Buttons/Button"
import { MaxWidthWrapper } from "../components/Global/MaxWidthWrapper"
import { BackgroundImage } from "../components/BackgroundImage"
import { ScrollIndicator } from "../components/ScrollIndicator"
import { SectionTitle } from "../components/SectionTitle"
import { WrapperMainContent } from "../components/WrapperMainContent"
import { Icon } from "../components/Icon"
import {
	MemberGrid,
	MemberCard,
	MemberName,
	MemberRole,
	MemberLinksRow,
	MemberLink,
	MemberImage,
	MemberBox,
} from "../components/MemberGrid"

import mainBg from "../assets/img/backgroundAbout.png"
import membersInfo from "../common/membersInfo"
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core"
import { Footer } from "../components/Footer"
import GlobalDiv from "../components/Global/GlobalDiv"

function About() {
	return (
		<GlobalDiv>
			<Header active="Sobre"></Header>
			<BackgroundImage image={mainBg}></BackgroundImage>
			<MaxWidthWrapper>
				<WrapperMainContent>
					<h1>
						Quem é a<MainText>TecnoJr?</MainText>
					</h1>
					<p>
						Fundada em 2002, a Empresa TecnoJr é voltada para o
						curso de Ciência da Computação da Universidade Estadual
						de Santa Cruz (UESC). Desde então, vem atuando na área
						de desenvolvimento de sistemas e aproximando o mundo
						acadêmico do empresarial, desenvolvendo o espírito
						empreendedor de seus colaboradores. Atualmente é
						constituida por 19 membros.
					</p>
					<Button url="#membros">
						MEMBROS
						<i className="fa-solid fa-user"></i>
					</Button>
					<ScrollIndicator />
				</WrapperMainContent>
				<SectionTitle title="Ideais" color="blue">
					Missão, Visão e Valores!
				</SectionTitle>
				<SectionTitle title="Membros" color="purple">
					Conheça os devs da <strong>Tecno</strong>!
				</SectionTitle>
				<MemberGrid>
					{membersInfo.map((usr, index) => {
						return (
							<MemberCard key={index}>
								<MemberImage img={usr.img} />
								<MemberBox>
									<MemberName>{usr.name}</MemberName>
									<MemberRole>{usr.role}</MemberRole>
								</MemberBox>
								<MemberLinksRow>
									{usr.links.map((link, index) => {
										return (
											<MemberLink
												key={index}
												icon={link.icon as IconName}
												prefix={link.prefix as IconPrefix}
												url={link.url}
											/>
										)
									})}
								</MemberLinksRow>
							</MemberCard>
						)
					})}
				</MemberGrid>
			</MaxWidthWrapper>
			<Footer />
		</GlobalDiv>
	)
}

export default About
