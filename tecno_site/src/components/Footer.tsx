import { styled } from "@stitches/react"
import { ButtonBorder } from "./ButtonBorder"
import Logo from "../assets/icons/logo_nome_horizontal_white.svg?component"
import { MaxWidthWrapper } from "./MaxWidthWrapper"

const FooterDiv = styled("header", {
	backgroundColor: "#0047FF20",
	width: "100%",
	display: "flex",
	height: "200px",
	alignItems: "center",
	justifyContent: "center",
})

const LinkList = [
	{ url: "/about", text: "Sobre" },
	{ url: "/contact", text: "Contato" },
	{ url: "/projects", text: "Projetos" },
	{ url: "/404", text: "404" },
]

type HeaderProps = {
	active?: string
}

export function Footer(props: HeaderProps) {
	return (
		<FooterDiv id="footer">
			<MaxWidthWrapper></MaxWidthWrapper>
		</FooterDiv>
	)
}
