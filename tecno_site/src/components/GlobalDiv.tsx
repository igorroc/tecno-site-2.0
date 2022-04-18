import { styled } from "@stitches/react"

const Div = styled("div", {
	width: "100vw",
	overflowX: "hidden",
})

type Props = {
	children?: React.ReactNode
}

function GlobalDiv(props: Props) {
	return <Div>{props.children}</Div>
}

export default GlobalDiv
