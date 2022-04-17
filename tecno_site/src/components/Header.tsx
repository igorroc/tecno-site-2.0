import { styled } from "@stitches/react"
import { ButtonBorder } from "./ButtonBorder"
import Logo from "../assets/icons/logo_nome_horizontal_white.svg?component"
import { MaxWidthWrapper } from "./MaxWidthWrapper"

const HeaderDiv = styled("header", {
	position: "fixed",
	top: "0",
	backgroundColor: "#00000005",
	width: "100%",
	display: "flex",
	height: "80px",
	alignItems: "center",
	justifyContent: "center",
	backdropFilter: "blur(10px)",
	zIndex: "10",

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

	"& > div": {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},

	"&::before": {
		content: "",
		width: "100%",
		height: "1px",
		position: "absolute",
		bottom: "0",
		zIndex: "-1",

		backgroundColor: "#fff5",
		filter: `drop-shadow(0 1px 1px rgba(0,0,0,1))
				drop-shadow(0 2px 2px rgba(0,0,0,0.8))
				drop-shadow(0 4px 4px rgba(0,0,0,0.6))
				drop-shadow(0 6px 6px rgba(0,0,0,0.4))
				drop-shadow(0 8px 8px rgba(0,0,0,0.2))`,
	},
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
		<div id="pageTop">
			<HeaderDiv id="header">
				<MaxWidthWrapper>
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
				</MaxWidthWrapper>
			</HeaderDiv>
		</div>
	)
}
