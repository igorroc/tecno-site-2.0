import { Icon } from "../Icon"

import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core"

import { CarrouselWrapper, Card, NodeIcon } from "./styles"

type NodeProps = {
	children?: React.ReactNode
}

type IconProps = {
	prefix: IconPrefix
	iconName: IconName
}

export function Carrousel(props: NodeProps) {
	return <CarrouselWrapper>{props.children}</CarrouselWrapper>
}

export function CarrouselNode(props: NodeProps) {
	return <Card>{props.children}</Card>
}

export function CarrouselNodeIcon(props: IconProps) {
	return (
		<NodeIcon>
			<Icon iconName={props.iconName} prefix={props.prefix} />
		</NodeIcon>
	)
}

export function CarrouselNodeTitle(props: NodeProps) {
	return <h3>{props.children}</h3>
}

export function CarrouselNodeContent(props: NodeProps) {
	return <p>{props.children}</p>
}
