import { LinksWrapper, Header, Section, SocialWrapper } from "./styles"

import SmallLogo from "../../assets/icons/logo_white.svg?component"

import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core"

import GlobalDiv from "../../components/Global/GlobalDiv"
import { Icon } from "../../components/Icon"
import { MainText } from "../../components/MainText"

const socialList = [
	{
		iconName: "instagram",
		iconPrefix: "fab",
		url: "https://instagram.com/tecnojr",
	},
	{
		iconName: "linkedin",
		iconPrefix: "fab",
		url: "https://www.linkedin.com/company/tecnojr",
	},
	{
		iconName: "facebook",
		iconPrefix: "fab",
		url: "https://www.facebook.com/tecnojr/",
	},
	{
		iconName: "whatsapp",
		iconPrefix: "fab",
		url: "https://wa.me/557336805389",
	},
]

const linkList = [
	{
		category: "Importantes",
		links: [{ title: "Tecno Site", url: "http://tecnojr.com.br/" }],
	},
	{
		category: "Outros",
		links: [
			{ title: "Tecno Board", url: "http://board.tecnojr.com.br/" },
			{
				title: "TecnoWeek 2022.1",
				url: "http://tecnoweek.tecnojr.com.br/",
			},
			{ title: "CPU 2022.1", url: "http://cpu.tecnojr.com.br/" },
		],
	},
]

export default function Links() {
	return (
		<GlobalDiv>
			<LinksWrapper>
				<Header>
					<a href="http://beta.tecnojr.com.br/">
						<SmallLogo className="logo" />
					</a>
					<a href="http://beta.tecnojr.com.br/">
						<h1>TecnoJr</h1>
					</a>
					<h2>Empresa Júnior de Computação</h2>
				</Header>
				<SocialWrapper>
					{socialList.map((social, index) => (
						<a href={social.url} key={index}>
							<Icon
								iconName={social.iconName as IconName}
								prefix={social.iconPrefix as IconPrefix}
							/>
						</a>
					))}
				</SocialWrapper>
				{linkList.map((link, index) => (
					<Section key={index}>
						<MainText size="medium">{link.category}</MainText>
						{link.links.map((l, index) => {
							return (
								<a href={l.url} key={index}>
									{l.title}
								</a>
							)
						})}
					</Section>
				))}
			</LinksWrapper>
			{/* <Background /> */}
		</GlobalDiv>
	)
}
