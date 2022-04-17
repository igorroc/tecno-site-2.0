import { styled } from "@stitches/react"

const Card = styled("div", {
	width: "310px",
	height: "384px",
	maxHeight: "1em",
	fontSize: "1em",
	overflow: "hidden",
	background: "linear-gradient(#3A3A3A, #272727, 40%, #131313)",

	variants: {
		active: {
			true: {
				background: "linear-gradient(#5552DE, #2F34A0, 40%, #132A7D)",
				maxHeight: "384px",
			},
		},
	},
})

type NodeProps = {
	active?: boolean
	children?: React.ReactNode
}

export function Carrousel(props: NodeProps) {
	return <div>{props.children}</div>
}

export function CarrouselNode(props: NodeProps) {
	return <Card active={props.active}>{props.children}</Card>
}

export function CarrouselNodeIcon() {
	return <i className="fa-solid fa-arrow-right"></i>
}

export function CarrouselNodeTitle(props: NodeProps) {
	return <div>{props.children}</div>
}

export function CarrouselNodeContent(props: NodeProps) {
	return <p>{props.children}</p>
}
