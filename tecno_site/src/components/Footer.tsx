import { ButtonBorder } from "./Buttons/ButtonBorder"
import Logo from "../assets/icons/logo_nome_horizontal_white.svg?component"
import { MaxWidthWrapper } from "./Global/MaxWidthWrapper"
import { Division } from "./Global/Division"
import { Button } from "./Buttons/Button"
import { Icon } from "./Icon"
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core"
import { styled } from "../stitches.config"

const LinkList = [
	{
		url: "https://instagram.com/tecnojr",
		iconName: "instagram",
		prefix: "fab",
	},
	{
		url: "https://facebook.com/tecnojr",
		iconName: "facebook",
		prefix: "fab",
	},
	{ url: "https://github.com/tecnojr", iconName: "github", prefix: "fab" },
	{
		url: "https://linkedin.com/company/tecnojr",
		iconName: "linkedin",
		prefix: "fab",
	},
	{ url: "https://wa.me/557336805389", iconName: "whatsapp", prefix: "fab" },
]

const FooterDiv = styled("footer", {
	backgroundColor: "#1a1823",
	width: "100%",
	display: "flex",
	marginTop: "150px",
	alignItems: "center",
	justifyContent: "center",

	"& #logoFooter": {
		height: "4em",
		width: "auto",
	},

	"& #goBack": {
		display: "flex",
		gap: "10px",
		color: "white",

		transition: "letter-spacing 400ms ease-in-out",

		"&:hover": {
			letterSpacing: "1px",
		},
	},
	"& #copy": {
		textAlign: "center",
		marginBottom: "50px",
	},

	"@small": {
		"& #logoFooter": {
			height: "2.5em",
		},
	},
})

const ContactDiv = styled("div", {
	position: "relative",
	width: "80%",
	display: "flex",
	padding: "2em 3em",
	borderRadius: "5px 50px 50px 5px",
	transform: "translateY(-50%)",

	backgroundColor: "#202131",
	filter: `drop-shadow(0 1px 1px rgba(0,0,0,0.20))
			drop-shadow(0 2px 2px rgba(0,0,0,0.15))
			drop-shadow(0 4px 4px rgba(0,0,0,0.1))
			drop-shadow(0 6px 6px rgba(0,0,0,0.05))`,

	"& > div > p": {
		fontSize: "2em",
		fontWeight: "bold",
	},

	"& > button": {
		position: "absolute",
		top: "50%",
		right: "-100px",
		transform: "translateY(-50%)",
		letterSpacing: "1px",
		fontWeight: "bolder",
		fontSize: "2em",
		padding: "0.5em 1.6em",

		"&:hover": {
			transform: "translateY(-50%) scale(1.068)",
		},
	},

	"@large": {
		width: "max-content",
		flexDirection: "column",
		textAlign: "center",
		borderRadius: "20px",
		justifyContent: "center",
		alignItems: "center",
		paddingBottom: "4em",
		margin: "0 auto",

		"& > button": {
			transform: "translateY(50%)",
			top: "unset",
			right: "unset",
			bottom: "0",
		},
	},

	"@small": {
		fontSize: "12px",

		"& > div > p": {
			fontSize: "1.5em",
		},
	},
})

const SocialList = styled("ul", {
	display: "flex",
	gap: "5px",

	"@medium": {
		gap: "2em",
	},
})

const SocialListIcon = styled("a", {
	width: "1.5em",
	height: "1.5em",
	padding: "5px",

	display: "flex",
	justifyContent: "center",
	alignItems: "center",

	backgroundColor: "#1e1e1e",
	borderRadius: "100px",
	transition: "background 200ms ease-in-out, color 200ms ease-in-out",
	cursor: "pointer",
	color: "white",
	fontSize: "1em",

	"&:hover": {
		backgroundColor: "#292929",
		color: "#f25eff",
	},

	"@medium": {
		width: "2em",
		height: "2em",
	},
})

const InfoItem = styled("a", {
	height: "max-content",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	gap: "1em",
	color: "white",
	maxWidth: "280px",
	textAlign: "center",
	transition: "color 200ms ease-in-out",

	"& .infoIcon > *": {
		fontSize: "3em",
	},

	"& span": {
		fontSize: "1.2em",
		fontWeight: "bold",
	},

	"& p": {
		fontSize: "1em",
	},

	"&:hover": {
		color: "#8ba2ff",
	},
})

const FlexDiv = styled("div", {
	display: "flex",
	gap: "50px",
	variants: {
		column: {
			true: {
				flexDirection: "column",
			},
		},
		horizontalAlign: {
			center: {
				justifyContent: "center",
			},
			spaceAround: {
				justifyContent: "space-around",
			},
			spaceBetween: {
				justifyContent: "space-between",
			},
		},
		verticalAlign: {
			center: {
				alignItems: "center",
			},
			down: {
				alignItems: "end",
			},
		},
	},

	"@medium": {
		flexDirection: "column",
	},
})

type FooterProps = {
	contactButton?: boolean
	transition?: boolean
}

export function Footer(props: FooterProps) {
	return (
		<FooterDiv id="footer">
			<MaxWidthWrapper>
				<ContactDiv>
					<div>
						<span>Aproveite nosso serviço</span>
						<p>Seja Nosso Cliente!</p>
					</div>
					<Button url="/contact">Vamos nessa!</Button>
				</ContactDiv>
				<FlexDiv verticalAlign="center" horizontalAlign="spaceBetween">
					<SocialList>
						{LinkList.map((link, index) => {
							return (
								<SocialListIcon
									key={index}
									href={link.url}
									target="_blank"
								>
									<Icon
										prefix={link.prefix as IconPrefix}
										iconName={link.iconName as IconName}
									/>
								</SocialListIcon>
							)
						})}
					</SocialList>
					<a href="/">
						<Logo id="logoFooter" />
					</a>
					<a href="#pageTop" id="goBack">
						Voltar ao início
						<Icon prefix="fas" iconName="arrow-up" />
					</a>
				</FlexDiv>
				<Division height="normal" line />
				<FlexDiv verticalAlign="center" horizontalAlign="center">
					<InfoItem href="mailto:tecnojr@uesc.br">
						<div className="infoIcon">
							<Icon prefix="fas" iconName="envelope" />
						</div>
						<span>EMAIL</span>
						<p>tecnojr@uesc.br</p>
					</InfoItem>
					<InfoItem href="https://goo.gl/maps/ivriShW6tUBzJNVa6">
						<div className="infoIcon">
							<Icon prefix="fas" iconName="location-dot" />
						</div>
						<span>LOCAL</span>
						<p>
							Campus Soane Nazaré de Andrade Rodovia Jorge Amado,
							km 16 S/N Bairro Salobrinho, Ilhéus
						</p>
					</InfoItem>
					<InfoItem href="tel:557336805389">
						<div className="infoIcon">
							<Icon prefix="fas" iconName="phone" />
						</div>
						<span>TELEFONE</span>
						<p>+55 (73) 3680-5389</p>
					</InfoItem>
				</FlexDiv>
				<Division height="normal" line />
				<p id="copy">
					©2022 All rights reserved.
					<br />
					Desenvolvido com muito ❤ ️e ☕ pela TecnoJr.
				</p>
			</MaxWidthWrapper>
		</FooterDiv>
	)
}
