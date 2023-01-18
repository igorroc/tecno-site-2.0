import Logo from "../../assets/icons/logo_nome_horizontal_white.svg?component"
import { MaxWidthWrapper } from "../Global/MaxWidthWrapper"
import { Division } from "../Global/Division"
import { Button } from "../Buttons/Button"
import { Icon } from "../Icon"
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core"

import {
	FooterDiv,
	ContactDiv,
	SocialList,
	SocialListIcon,
	FlexDiv,
	InfoItem,
} from "./styles"

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
	{
		url: "https://github.com/tecnojr-uesc",
		iconName: "github",
		prefix: "fab",
	},
	{
		url: "https://linkedin.com/company/tecnojr",
		iconName: "linkedin",
		prefix: "fab",
	},
	{
		url: "https://wa.me/557399301800?text=Olá! Estou entrando em contato pelo site da *Tecno*, gostaria de pedir um orçamento para ",
		iconName: "whatsapp",
		prefix: "fab",
	},
]

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
					<InfoItem
						href="https://goo.gl/maps/ivriShW6tUBzJNVa6"
						target="_blank"
					>
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
					Desenvolvido com muito ❤ ️e ☕ por{" "}
					<a href="https://ilrocha.com" target="_blank">
						Igor Rocha
					</a>
				</p>
			</MaxWidthWrapper>
		</FooterDiv>
	)
}
