import { roles } from "../../common/membersInfo"

import { Div, Pill } from "./styles"

type FilterProps = {
	functionChange: (ev: any) => void
}

export default function FilterPill(props: FilterProps) {
	return (
		<Div>
			<Pill>
				{roles.coordenadores} - Coordenadores
				<input
					type="checkbox"
					value="coordenação"
					onChange={props.functionChange}
				/>
			</Pill>
			<Pill>
				{roles.conselheiros} - Conselheiros
				<input
					type="checkbox"
					value="conselho"
					onChange={props.functionChange}
				/>
			</Pill>
			<Pill>
				{roles.diretores} - Diretores
				<input
					type="checkbox"
					value="diretoria"
					onChange={props.functionChange}
				/>
			</Pill>
			<Pill>
				{roles.gerentes} - Gerentes
				<input
					type="checkbox"
					value="gerência"
					onChange={props.functionChange}
				/>
			</Pill>
			<Pill>
				{roles.membros} - Desenvolvedores
				<input
					type="checkbox"
					value="membro"
					onChange={props.functionChange}
				/>
			</Pill>
		</Div>
	)
}
