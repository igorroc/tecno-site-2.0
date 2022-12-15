import mainBg from "../../assets/img/backgroundPressKit.png"

import { Header } from "../../components/Header"
import { MainText } from "../../components/MainText"
import { Button } from "../../components/Buttons/Button"
import { MaxWidthWrapper } from "../../components/Global/MaxWidthWrapper"
import { BackgroundImage } from "../../components/BackgroundImage"
import { ScrollIndicator } from "../../components/ScrollIndicator"
import { WrapperMainContent } from "../../components/WrapperMainContent"
import { SectionTitle } from "../../components/SectionTitle"
import { Footer } from "../../components/Footer"
import GlobalDiv from "../../components/Global/GlobalDiv"
import {
	CardColor,
	Description,
	Title,
	WrapperDivs,
	WrapperTransparente,
} from "./styles"

import { motion } from "framer-motion"

const FullLogos = [
	{
		name: "Logo branca",
		path: "/logo/FullLogoWhite",
	},
	{
		name: "Logo preta",
		path: "/logo/FullLogoBlack",
		inverted: true,
	},
	{
		name: "Logo branca e azul",
		path: "/logo/FullLogoWhiteBlue",
	},
	{
		name: "Logo preta e azul",
		path: "/logo/FullLogoBlackBlue",
		inverted: true,
	},
	{
		name: "Logo branca e roxa",
		path: "/logo/FullLogoWhitePurple",
	},
	{
		name: "Logo preta e roxa",
		path: "/logo/FullLogoBlackPurple",
		inverted: true,
	},
]

const Icons = [
	{
		name: "Ícone branco",
		path: "/icon/IconWhite",
	},
	{
		name: "Ícone preto",
		path: "/icon/IconBlack",
		inverted: true,
	},
	{
		name: "Ícone azul",
		path: "/icon/IconBlue",
	},
	{
		name: "Ícone roxo",
		path: "/icon/IconPurple",
	},
]

const Typos = [
	{
		name: "Tipografia branca",
		path: "/typo/TypoWhite",
	},
	{
		name: "Tipografia preta",
		path: "/typo/TypoBlack",
		inverted: true,
	},
	{
		name: "Tipografia azul",
		path: "/typo/TypoBlue",
	},
	{
		name: "Tipografia roxo",
		path: "/typo/TypoPurple",
	},
]

const Colors = [
	{
		name: "Azul",
		hex: "#4275F9",
		rgb: "rgb(66, 117, 249)",
	},
	{
		name: "Roxo",
		hex: "#9155EB",
		rgb: "rgb(145, 85, 235)",
	},
	{
		name: "Branco",
		hex: "#FFFFFF",
		rgb: "rgb(255, 255, 255)",
		textColor: "#232323",
	},
	{
		name: "Preto",
		hex: "#232323",
		rgb: "rgb(35, 35, 35)",
	},
]

const animations = {
	initial: { opacity: 0, y: -50 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -50 },
}
function PressKit() {
	return (
		<motion.div
			variants={animations}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.3 }}
		>
			<GlobalDiv>
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
							empresa e seus produtos. Aqui você encontra o
							logotipo, cores e material de divulgação.
						</p>
						<Button url="#logo">
							Saiba mais
							<i className="fa-solid fa-caret-down"></i>
						</Button>
						<ScrollIndicator />
					</WrapperMainContent>
					{/* Sections */}
					<SectionTitle title="Logo" color="blue">
						Nossa <strong>Logo</strong>!
					</SectionTitle>
					<Description>
						Por favor não edite, mude, distorça, altere as cores ou
						reconfigure a logo da Tecno
					</Description>

					<WrapperDivs>
						{FullLogos.map((logo, index) => (
							<WrapperTransparente
								className={logo.inverted ? "inverted" : ""}
								key={index}
							>
								<img src={logo.path + ".png"} alt={logo.name} />
								<div className="links">
									<a download href={logo.path + ".svg"}>
										.svg
									</a>
									<a download href={logo.path + ".png"}>
										.png
									</a>
								</div>
							</WrapperTransparente>
						))}
					</WrapperDivs>

					<SectionTitle title="Alternativas" color="purple">
						Logos Alternativas
					</SectionTitle>
					<Description>
						Use essas logos alternativas apenas quando a marca da
						Tecno estiver claramente visível ou foi bem encaixada em
						um contexto.
					</Description>

					<Title>Ícones</Title>

					<WrapperDivs>
						{Icons.map((icon, index) => (
							<WrapperTransparente
								className={icon.inverted ? "inverted" : ""}
								key={index}
							>
								<img src={icon.path + ".png"} alt={icon.name} />
								<div className="links">
									<a download href={icon.path + ".svg"}>
										.svg
									</a>
									<a download href={icon.path + ".png"}>
										.png
									</a>
								</div>
							</WrapperTransparente>
						))}
					</WrapperDivs>

					<Title>Tipografia</Title>

					<Description>
						A fonte que escolhemos para a tipografia da Tecno foi a{" "}
						<b>Montserrat</b>, pois ela é uma fonte moderna e
						elegante, que combina com a nossa marca.
					</Description>

					<WrapperDivs>
						{Typos.map((typo, index) => (
							<WrapperTransparente
								className={typo.inverted ? "inverted" : ""}
								key={index}
							>
								<img src={typo.path + ".png"} alt={typo.name} />
								<div className="links">
									<a download href={typo.path + ".svg"}>
										.svg
									</a>
									<a download href={typo.path + ".png"}>
										.png
									</a>
								</div>
							</WrapperTransparente>
						))}
					</WrapperDivs>

					<SectionTitle title="Cores" color="purple">
						Nossas Cores
					</SectionTitle>

					<WrapperDivs>
						{Colors.map((color, index) => (
							<CardColor
								key={index}
								style={{
									backgroundColor: color.hex,
									color: color.textColor || "#fff",
								}}
							>
								<div className="title">{color.name}</div>
								<div className="description">
									<p>{color.hex}</p>
									<p>{color.rgb}</p>
								</div>
							</CardColor>
						))}
					</WrapperDivs>

					<SectionTitle title="Drive" color="blue">
						Procurando por mais?
					</SectionTitle>
					<Description>
						Veja mais materiais de parceiros{" "}
						<i>(como papeis de parede e ícones de perfil)</i> no
						nosso drive.
					</Description>
					<Button
						url="https://drive.google.com/drive/u/0/folders/1kflzXM9GdUJEbBSpNXmpTQn7Yr5pQJ_z"
						newTab
					>
						Acessar o Drive
					</Button>
				</MaxWidthWrapper>

				<Footer />
			</GlobalDiv>
		</motion.div>
	)
}

export default PressKit
