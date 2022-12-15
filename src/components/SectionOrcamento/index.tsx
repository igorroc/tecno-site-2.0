import { Button } from "../Buttons/Button"
import { Icon } from "../Icon"
import Lista, { ItemLista } from "../Lista"
import { Group, GroupMail, Wrapper } from "./styles"

function SectionOrcamento() {
	return (
		<Wrapper>
			<Group>
				<h2>
					Faça já o seu <strong>orçamento</strong>!
				</h2>
				<Lista>
					<ItemLista title="Orçamento 100% Gratuito">
						Quer tirar sua ideia do papel? Não se preocupe, a Tecno
						Jr não cobra pela avaliação da proposta.
					</ItemLista>
					<ItemLista title="Resposta em até 24h">
						Obtenha resposta do que precisa em um prazo máximo de
						24hr.
					</ItemLista>
					<ItemLista title="Fale Conosco">
						Tem alguma sugestão? Precisa saber de algo? Entre em
						contato com nossa equipe. Teremos o imenso prazer em
						ouvi-lo(a).
					</ItemLista>
				</Lista>
			</Group>
			<GroupMail>
				<h2>Entre em contato!</h2>
				<div className="bottomWrapper">
					<p>
						Precisa de uma solução para o seu negócio? Entre em
						contato para receber um orçamento em até 72h.
					</p>
					<Button
						newTab
						url="https://wa.me/557336805389?text=Olá! Estou entrando em contato pelo site, gostaria de pedir um orçamento para "
					>
						<Icon prefix="fab" iconName="whatsapp"></Icon>
						Whatsapp
					</Button>
				</div>
			</GroupMail>
		</Wrapper>
	)
}

export default SectionOrcamento
