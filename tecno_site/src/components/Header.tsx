import { styled } from "@stitches/react"
import { ButtonBorder } from "./ButtonBorder"
import Logo from "../assets/icons/logo_nome_horizontal_white.svg?component"

const HeaderDiv = styled("header", {
	backgroundColor: "#ffffff05",
	width: "90%",
	display: "flex",
	height: "80px",
	padding: "0 5%",
	alignItems: "center",
	justifyContent: "center",
	backdropFilter: "blur(10px)",

	"& #headerLogo svg": {
		height: "30px",
		width: "auto",
	},

	"& ul": {
		listStyle: "none",
		display: "flex",
		gap: "2em",

		"& a": {
			color: "white",
			textDecoration: "none",
			position: "relative",
			lineHeight: "80px",
			height: "80px",

			transition: "all 100ms ease-in-out",
			"&:hover": {
				fontWeight: "bold",
				letterSpacing: "1px",
			},

			"&.headerActiveItem": {
				fontWeight: "bold",
				letterSpacing: "1px",
			},

			"&.headerActiveItem::after": {
				content: "",
				position: "absolute",
				width: "100%",
				height: "5px",
				backgroundColor: "white",
				transform: "translate(-100%, 0)",
				bottom: "0",
			},
		},
	},
})

const ContentWrapper = styled("div", {
	display: "flex",
	width: "100%",
    maxWidth: "1400px",
	alignItems: "center",
	justifyContent: "space-between",
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

export function Header(props: HeaderProps) {
	return (
		<HeaderDiv>
			<ContentWrapper>
				<a id="headerLogo" href="/">
					<Logo />
				</a>
				<ul>
					{LinkList.map((link, index) => {
						return (
							<a
								href={link.url}
								key={index}
								className={
									link.text == props.active
										? "headerActiveItem"
										: ""
								}
							>
								{link.text}
							</a>
						)
					})}
				</ul>
				<ButtonBorder text="Faça Login!" />
			</ContentWrapper>
		</HeaderDiv>
	)
}
