import { styled } from "@stitches/react"

const Div = styled("div", {
	color: "white",
	margin: "3em 0",

	variants: {
		color: {
			purple: {
				$$color: "#FF71E0",
			},
			blue: {
				$$color: "#2E9BFF",
			},
		},
	},

	"& span": {
		fontSize: "1em",
		fontWeight: "normal",
		color: "$$color",
		position: "relative",
		marginBottom: "1em",

		"&::after": {
			content: "",
			position: "absolute",
			bottom: "0",
			transform: "translateX(1em)",
			width: "100px",
			height: "1px",
			backgroundColor: "$$color",
		},
	},

	"& p": {
		fontSize: "2em",
		fontWeight: "bold",
		maxWidth: "310px",

		"& strong": {
			fontSize: "1em",
			color: "$$color",
		},
	},
})

type TitleProps = {
	color: "blue" | "purple"
	title?: string
	children?: React.ReactNode
}
export function SectionTitle(props: TitleProps) {
	return (
		<Div color={props.color}>
			<span id={props.title?.toLowerCase()}>{props.title}</span>
			<p>{props.children}</p>
		</Div>
	)
}
