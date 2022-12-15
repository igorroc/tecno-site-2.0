import { Div } from "./styles"

type TitleProps = {
	color: "blue" | "purple"
	title?: string
	children?: React.ReactNode
	id?: string
}
export function SectionTitle(props: TitleProps) {
	return (
		<Div color={props.color} id={props.id}>
			<span id={props.title?.toLowerCase()}>{props.title}</span>
			<p>{props.children}</p>
		</Div>
	)
}
