import { roles } from "../../common/membersInfo"

import { Div, Pill } from "./styles"

type FilterProps = {
	functionChange: (ev: any) => void
}

export default function FilterPill(props: FilterProps) {
	return (
		<Div>
			{roles.coordenadores > 0 && (
				<Pill>
					{roles.coordenadores} -{" "}
					{roles.coordenadores > 1 ? "Coordenadores" : "Coordenador"}
					<input
						type="checkbox"
						value={4}
						onChange={props.functionChange}
					/>
				</Pill>
			)}
			{roles.conselheiros > 0 && (
				<Pill>
					{roles.conselheiros} -{" "}
					{roles.conselheiros > 1 ? "Conselheiros" : "Conselheiro"}
					<input
						type="checkbox"
						value={3}
						onChange={props.functionChange}
					/>
				</Pill>
			)}
			{roles.diretores > 0 && (
				<Pill>
					{roles.diretores} -{" "}
					{roles.diretores > 1 ? "Diretores" : "Diretor"}
					<input
						type="checkbox"
						value={2}
						onChange={props.functionChange}
					/>
				</Pill>
			)}
			{roles.assessores > 0 && (
				<Pill>
					{roles.assessores} -{" "}
					{roles.assessores > 1 ? "Assessores" : "Assessor"}
					<input
						type="checkbox"
						value={1}
						onChange={props.functionChange}
					/>
				</Pill>
			)}
			{roles.trainees > 0 && (
				<Pill>
					{roles.trainees} -{" "}
					{roles.trainees > 1 ? "Trainees" : "Trainee"}
					<input
						type="checkbox"
						value={0}
						onChange={props.functionChange}
					/>
				</Pill>
			)}
		</Div>
	)
}
