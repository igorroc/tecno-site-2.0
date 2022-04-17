import { styled } from "@stitches/react"

const Div = styled("div", {
	width: "100%",
	$$size: "0px",

	variants: {
		height: {
			large: {
				$$size: "500px",
			},
			normal: {
				$$size: "100px",
			},
			small: {
				$$size: "50px",
			},
		},
		line: {
			true: {
				margin: "calc($$size/2) 0",
				backgroundColor: "#fff2",
				height: "2px",
			},
			false: {
				margin: "calc($$size/2) 0",
				height: "$$size",
			},
		},
	},
})

type DivisionProps = {
	height: "large" | "normal" | "small"
	line?: boolean
	children?: React.ReactNode
}

export function Division(props: DivisionProps) {
	return (
		<Div height={props.height} line={props.line}>
			{props.children}
		</Div>
	)
}
