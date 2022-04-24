import { styled } from "@stitches/react"
import { Icon } from "./Icon"

import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core"

const CarrouselWrapper = styled("div", {
	position: "relative",
	width: "100%",
	minWidth: "1000px",
	display: "flex",
	gap: "50px",
	alignItems: "center",
	justifyContent: "center",
})

const Card = styled("div", {
	position: "relative",
	height: "max-content",
	padding: "1em",
	maxHeight: "11em",
	fontSize: "1em",
	overflow: "hidden",
	background: "linear-gradient(#3A3A3A, #272727, 20%, #131313)",
	borderRadius: "5px",
	display: "flex",
	flexDirection: "column",
	gap: "2em",
	margin: "0 auto",

	transition: "all 500ms ease-in",

	variants: {
		active: {
			true: {
				
			},
			false: {
				
			},
		},
	},

	"& h3": {
		position: "relative",
		fontSize: "2em",

		"&:after": {
			content: "",
			position: "absolute",
			bottom: "-7px",
			left: "0",
			width: "75px",
			height: "3px",
			backgroundColor: "#fff",
		},
	},
})

const NodeIcon = styled("div", {
	width: "3em",
	height: "3em",
	padding: "1em",
	borderRadius: "50%",
	backgroundColor: "#fff5",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",

	"& svg": {
		fontSize: "3em",
	},
})

type NodeProps = {
	active?: boolean | false
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
	return <Card active={props.active || false}>{props.children}</Card>
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
