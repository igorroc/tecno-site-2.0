import { Icon } from "../Icon"
import { ListaWrapper, Item } from "./styles"

type ListaProps = {
	children: React.ReactNode
}

type ItemProps = {
	children: React.ReactNode
	title: string
}

export function ItemLista(props: ItemProps) {
	return (
		<Item>
			<div className="itemHead">
				<h3>{props.title}</h3>
				<div className="iconArrow">
					<Icon iconName="angle-right" prefix="fas"></Icon>
				</div>
			</div>
			<p className="itemDescription">{props.children}</p>
		</Item>
	)
}

function Lista(props: ListaProps) {
	return <ListaWrapper>{props.children}</ListaWrapper>
}

export default Lista
