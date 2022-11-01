import { IconName } from "@fortawesome/fontawesome-svg-core"
import { styled } from "@stitches/react"
import { Icon } from "./Icon"

const Hex = styled("div", {
	width: "250px",
	height: "250px",
	minWidth: "250px",
	minHeight: "250px",
	// overflow: "hidden",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	transition: "background 600ms ease-out",
	clipPath: "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",

	"& .wrapperTitle": {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		gap: "2em",
		alignItems: "center",
		width: "100%",
		height: "100%",
		transition: "margin 600ms ease-out",

		"& .wrapperIcon": {
			width: "100px",
			height: "100px",
			borderRadius: "100%",
			border: "1px solid #fff3",

			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",

			"& svg": {
				fontSize: "3em",
			},
		},

		"& h3": {
			fontSize: "2em",
		},
	},

	"& p": {
		width: "80%",
		height: "100%",
		fontSize: "1em",
		fontWeight: "400",
		textAlign: "center",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		margin: "0 auto",
	},

	"&:hover": {
		background: "#7D3FD9",
		"& .wrapperTitle": {
			marginTop: "-100%",
		},
	},
})

export const WrapperHex = styled("div", {
	display: "flex",
	gap: "2em",
	justifyContent: "center",
	alignItems: "center",
	flexWrap: "wrap",
})

type HexProps = {
	title: string
	description: string
	icon: IconName
}

function HexIdeais(props: HexProps) {
	return (
		<Hex>
			<div className="wrapperTitle">
				<div className="wrapperIcon">
					<Icon prefix="fas" iconName={props.icon}></Icon>
				</div>
				<h3>{props.title}</h3>
			</div>

			<p>{props.description}</p>
		</Hex>
	)
}

export default HexIdeais
