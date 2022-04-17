import { styled } from "@stitches/react"

const Div = styled("div", {
	variants: {
		height: {
			large: {
				height: "500px",
			},
			small: {
				height: "200px",
			},
		},
	},
})

type DivisionProps = {
	height: "large" | "small",
	children?: React.ReactNode
}
export function Division(props: DivisionProps) {
	return <Div height={props.height}>{props.children}</Div>
}
