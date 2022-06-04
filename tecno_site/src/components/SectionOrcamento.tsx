import { styled } from "@stitches/react"
import { Button } from "./Buttons/Button"
import { Icon } from "./Icon"
import Lista, { ItemLista } from "./Lista"

const Wrapper = styled("div", {
	display: "flex",
	gap: "50px",
	flexWrap: "wrap",
})

const Group = styled("div", {
	backgroundColor: "#232323",
	padding: "50px",
	display: "flex",
	flex: "1",
	flexDirection: "column",
	gap: "2em",
	borderRadius: "10px",
	width: "60%",
	minWidth: "300px",

	"& > h2": {
		fontSize: "2em",
		maxWidth: "300px",

		"& strong": {
			fontSize: "1em",
			color: "#FF71E0",
		},
	},
})

const GroupMail = styled("div", {
	background: "linear-gradient(135deg, #B348EE, #71A0FB)",
	display: "flex",
	flex: "1",
	flexDirection: "column",
	justifyContent: "space-between",
	alignItems: "center",
	borderRadius: "10px",

	"& h2": {
		position: "relative",
		fontSize: "2em",
		margin: "auto",
		marginLeft: "1em",
		padding: "30px 0px",

		"&::after": {
			content: "",
			position: "absolute",
			bottom: "10px",
			left: "0",
			width: "130px",
			height: "3px",
			backgroundColor: "white",
		},
	},

	"& .bottomWrapper": {
		display: "flex",
		flexDirection: "column",
		gap: "3em",
		justifyContent: "center",
		padding: "50px 30px",
		backgroundColor: "#232323",
		borderRadius: "0px 100px 10px 10px",

		"& p": {
			maxWidth: "85%",
		},
	},
})

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
					<ItemLista title="Resposta em até 24hr">
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
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Maiores porro quis molestias facere repellat optio
						perferendis velit?
					</p>
					<Button url="/contact">
						<Icon prefix="fas" iconName="envelope"></Icon>
						Enviar Email
					</Button>
				</div>
			</GroupMail>
		</Wrapper>
	)
}

export default SectionOrcamento
