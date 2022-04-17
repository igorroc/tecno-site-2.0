import { styled } from "@stitches/react"

type Props = {
	children?: React.ReactNode
	column?: boolean
	gap?: string
	horizontalAlign?: "center" | "spaceAround" | "spaceBetween"
	verticalAlign?: "center" | "down"
}

function FlexDiv(props: Props) {
	const Div = styled("div", {
		display: "flex",
		gap: `${props.gap}`,
		variants: {
			column: {
				true: {
					flexDirection: "column",
				},
			},
			horizontalAlign: {
				center: {
					justifyContent: "center",
				},
				spaceAround: {
					justifyContent: "space-around",
				},
				spaceBetween: {
					justifyContent: "space-between",
				},
			},
			verticalAlign: {
				center: {
					alignItems: "center",
				},
				down: {
					alignItems: "end",
				},
			},
		},
	})

	console.log(props.gap)

	return (
		<Div
			column={props.column}
			verticalAlign={props.verticalAlign}
			horizontalAlign={props.horizontalAlign}
		>
			{props.children}
		</Div>
	)
}

export default FlexDiv
