import { styled } from "@stitches/react"
import React from "react"
import { roles } from "../common/membersInfo"

const Div = styled("form", {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: "1em",
	flexWrap: "wrap",
	margin: "20px auto",
})

const Pill = styled("label", {
	padding: "10px 20px",
	borderRadius: "20px",
	border: "2px solid #fff5",
	backgroundColor: "#23203355",
	color: "#fff",
	fontSize: "1em",
	cursor: "pointer",
	transition: "all 300ms ease-out ",

	"&:hover": {
		border: "2px solid #fffa",
		backgroundColor: "#232033",
	},

	"&:has(input:checked)": {
		backgroundColor: "#fff",
		color: "#232033",
		fontWeight: "bold",

		"&:hover": {
			backgroundColor: "#fffe",
		},
	},

	input: {
		display: "none",
	},
})

type FilterProps = {
	functionChange: (ev: any) => void
}

export default function MemberFilter(props: FilterProps) {
	return (
		<Div>
			<Pill>
				Coordenadores – {roles.coordenadores}
				<input
					type="checkbox"
					value="coordenação"
					onChange={props.functionChange}
				/>
			</Pill>
			<Pill>
				Conselheiros – {roles.conselheiros}
				<input
					type="checkbox"
					value="conselho"
					onChange={props.functionChange}
				/>
			</Pill>
			<Pill>
				Diretores – {roles.diretores}
				<input
					type="checkbox"
					value="diretoria"
					onChange={props.functionChange}
				/>
			</Pill>
			<Pill>
				Gerentes – {roles.gerentes}
				<input
					type="checkbox"
					value="gerência"
					onChange={props.functionChange}
				/>
			</Pill>
			<Pill>
				Desenvolvedores – {roles.membros}
				<input
					type="checkbox"
					value="membro"
					onChange={props.functionChange}
				/>
			</Pill>
		</Div>
	)
}
