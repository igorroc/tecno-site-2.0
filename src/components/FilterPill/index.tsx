import { roles } from "../../common/membersInfo"

import { Div, Pill } from "./styles"

type FilterProps = {
	functionChange: (ev: any) => void
}

export default function FilterPill(props: FilterProps) {
	return (
		<Div>
			<Pill>
				{roles.coordenadores} -{" "}
				{roles.coordenadores > 1 ? "Coordenadores" : "Coordenador"}
				<input
					type="checkbox"
					value="coordenação"
					onChange={props.functionChange}
				/>
			</Pill>
			<Pill>
				{roles.conselheiros} -{" "}
				{roles.conselheiros > 1 ? "Conselheiros" : "Conselheiro"}
				<input
					type="checkbox"
					value="conselho"
					onChange={props.functionChange}
				/>
			</Pill>
			<Pill>
				{roles.diretores} -{" "}
				{roles.diretores > 1 ? "Diretores" : "Diretor"}
				<input
					type="checkbox"
					value="diretoria"
					onChange={props.functionChange}
				/>
			</Pill>
			<Pill>
				{roles.gerentes} - {roles.gerentes > 1 ? "Gerentes" : "Gerente"}
				<input
					type="checkbox"
					value="gerência"
					onChange={props.functionChange}
				/>
			</Pill>
			<Pill>
				{roles.membros} -{" "}
				{roles.membros > 1 ? "Desenvolvedores" : "Desenvolvedor"}
				<input
					type="checkbox"
					value="membro"
					onChange={props.functionChange}
				/>
			</Pill>
		</Div>
	)
}
