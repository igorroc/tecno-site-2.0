import { ButtonBorder } from "../Buttons/ButtonBorder"
import Logo from "../../assets/icons/logo_nome_horizontal_white.svg?component"
import { MaxWidthWrapper } from "../Global/MaxWidthWrapper"
import useWindowDimensions from "../../hooks/useWindowDimentions"
import { Icon } from "../Icon"
import { useEffect, useState } from "react"
import { HeaderDiv, SideNav } from "./styles"
import { Link, useLocation } from "react-router-dom"

import { motion } from "framer-motion"

const LinkList = [
	{ url: "/", text: "Início" },
	{ url: "/about", text: "Sobre" },
	{ url: "/contact", text: "Contato" },
	{ url: "/projects", text: "Projetos" },
	{ url: "/press-kit", text: "Press Kit" },
	{ url: "/prosel", text: "Processo Seletivo" },
]

type HeaderProps = {
	active?: string
}

export function Header(props: HeaderProps) {
	const { height, width } = useWindowDimensions()
	const [toggle, setToggle] = useState(false)
	const [doShow, setDoShow] = useState(true)
	const breakpointMobile = 1140
	const location = useLocation()

	const handleMenuClick = () => {
		setToggle((prevToggle) => !prevToggle)
	}

	const handleMobileClick = () => {
		setToggle(false)
	}

	useEffect(() => {
		if (
			location.pathname == "/wp-admin" ||
			location.pathname == "/links" ||
			location.pathname == "/login"
		) {
			setDoShow(false)
		}
	}, [location])

	if (doShow)
		return (
			<div id="pageTop">
				<HeaderDiv id="header">
					{width > breakpointMobile ? (
						<MaxWidthWrapper>
							<Link id="headerLogo" to="/">
								<Logo />
							</Link>
							<ul>
								{LinkList.map((link, index) => {
									return (
										<Link
											to={link.url}
											key={index}
											className={
												link.url == location.pathname
													? "headerActiveItem"
													: ""
											}
										>
											{link.text}
											{link.url == location.pathname && (
												<motion.div
													className="activeTab"
													layoutId="underline"
												></motion.div>
											)}
										</Link>
									)
								})}
							</ul>
							<ButtonBorder text="Faça Login!" url="/login" />
						</MaxWidthWrapper>
					) : (
						<MaxWidthWrapper>
							<Link id="headerLogo" to="/">
								<Logo />
							</Link>
							<SideNav
								id="sideNav"
								className={toggle ? "active" : ""}
							>
								<ul>
									{LinkList.map((link, index) => {
										return (
											<Link
												to={link.url}
												key={index}
												className={
													link.url ==
													location.pathname
														? "headerActiveItem"
														: ""
												}
												onClick={handleMobileClick}
											>
												{link.text}
											</Link>
										)
									})}
									<ButtonBorder
										text="Faça Login!"
										url="/login"
										small
									/>
								</ul>
								<button
									id="menuButton"
									onClick={handleMenuClick}
								>
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
	else return null
}
