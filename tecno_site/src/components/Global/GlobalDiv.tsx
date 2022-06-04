import { styled } from "@stitches/react"

const Div = styled("div", {
	position: "relative",
	width: "100vw",
	overflowX: "hidden",
	minHeight: "100vh",
})

type Props = {
	children?: React.ReactNode
}

function GlobalDiv(props: Props) {
	return <Div>{props.children}</Div>
}

export default GlobalDiv
