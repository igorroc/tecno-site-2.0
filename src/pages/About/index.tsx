import { useState } from "react"
import mainBg from "../../assets/img/backgroundAbout.png"

import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core"

import { Header } from "../../components/Header"
import { MainText } from "../../components/MainText"
import { Button } from "../../components/Buttons/Button"
import { MaxWidthWrapper } from "../../components/Global/MaxWidthWrapper"
import { BackgroundImage } from "../../components/BackgroundImage"
import { ScrollIndicator } from "../../components/ScrollIndicator"
import { SectionTitle } from "../../components/SectionTitle"
import { WrapperMainContent } from "../../components/WrapperMainContent"
import {
	MemberGrid,
	MemberCard,
	MemberName,
	MemberRole,
	MemberLinksRow,
	MemberLink,
	MemberImage,
	MemberBox,
} from "../../components/MemberGrid"
import { Footer } from "../../components/Footer"
import GlobalDiv from "../../components/Global/GlobalDiv"
import HexIdeais from "../../components/HexIdeais"
import { WrapperHex } from "../../components/HexIdeais/styles"
import FilterPill from "../../components/FilterPill"

import { memberList, roles } from "../../common/membersInfo"

export default function About() {
	const [filter, setFilter] = useState<Array<string>>([])

	function filterChange(ev: any) {
		if (filter.includes(ev.target.value)) {
			setFilter(filter.filter((item) => item !== ev.target.value))
		} else {
			setFilter([...filter, ev.target.value])
		}
		return null
	}

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
						Fundada em 2002, a Empresa TecnoJr foi criada como um
						projeto de extensão do curso de Ciência da Computação da
						Universidade Estadual de Santa Cruz (UESC). Desde então,
						vem atuando na área de desenvolvimento de sistemas e
						aproximando o mundo acadêmico do empresarial,
						desenvolvendo o espírito empreendedor de seus
						colaboradores. Atualmente é constituída por{" "}
						{roles.total} membros.
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
				<WrapperHex>
					<HexIdeais
						title="Missão"
						description="Formar jovens empreendedores capazes de entregar projetos de qualidade, unindo o mercado de trabalho ao ambiente acadêmico, e impactando a sociedade."
						icon="graduation-cap"
					/>
					<HexIdeais
						title="Visão"
						description="Figurar entre as melhores empresas juniores da Bahia, sendo referência em inovação tecnológica e excelência em prestação de serviços."
						icon="eye"
					/>
					<HexIdeais
						title="Valores"
						description="Empreendedorismo, Inovação, Sinergia, Transparência, Pertencimento, Resiliência."
						icon="scale-balanced"
					/>
				</WrapperHex>

				<SectionTitle title="Membros" color="purple" id="membros">
					Conheça os devs da <strong>Tecno</strong>!
				</SectionTitle>
				<p>
					Atualmente a TecnoJr é composta por{" "}
					<strong>{roles.total} membros</strong>, sendo:
				</p>
				<FilterPill functionChange={filterChange} />
				<MemberGrid>
					{memberList.map((usr, index) => {
						let role = usr.role.toLowerCase().split(" ")[0]
						let show = true
						if (filter.length > 0 && !filter.includes(role)) {
							show = false
						}
						return (
							<MemberCard key={index} show={show}>
								<MemberImage
									img={
										"/img/members/" +
										(usr.img || "photo.png")
									}
								/>
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
												prefix={
													link.prefix as IconPrefix
												}
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
