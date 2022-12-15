import { ButtonBorder } from "../Buttons/ButtonBorder"
import Logo from "../../assets/icons/logo_nome_horizontal_white.svg?component"
import SmallLogo from "../../assets/icons/logo_white.svg?component"
import { MaxWidthWrapper } from "../Global/MaxWidthWrapper"
import useWindowDimensions from "../../hooks/useWindowDimentions"
import { Icon } from "../Icon"
import { useState } from "react"
import { HeaderDiv, SideNav } from "./styles"

const LinkList = [
	{ url: "/", text: "Início" },
	{ url: "/about", text: "Sobre" },
	{ url: "/contact", text: "Contato" },
	{ url: "/projects", text: "Projetos" },
	{ url: "/press-kit", text: "Press Kit" },
]

type HeaderProps = {
	active?: string
}

export function Header(props: HeaderProps) {
	const { height, width } = useWindowDimensions()
	const [toggle, setToggle] = useState(false)
	const breakpointMobile = 800

	const handleMenuClick = () => {
		setToggle((prevToggle) => !prevToggle)
	}

	return (
		<div id="pageTop">
			<HeaderDiv id="header">
				{width > breakpointMobile ? (
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
						<ButtonBorder text="Faça Login!" url="/login" />
					</MaxWidthWrapper>
				) : (
					<MaxWidthWrapper>
						<a id="headerLogo" href="/">
							<Logo />
						</a>
						<SideNav
							id="sideNav"
							className={toggle ? "active" : ""}
						>
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
								<ButtonBorder
									text="Faça Login!"
									url="/login"
									small
								/>
							</ul>
							<button id="menuButton" onClick={handleMenuClick}>
								<Icon prefix="fas" iconName="x" />
							</button>
						</SideNav>
						<button id="menuButton" onClick={handleMenuClick}>
							<Icon prefix="fas" iconName="bars" />
						</button>
					</MaxWidthWrapper>
				)}
			</HeaderDiv>
		</div>
	)
}
