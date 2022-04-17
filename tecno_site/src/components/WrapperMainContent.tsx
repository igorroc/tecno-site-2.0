import { styled } from "@stitches/react"

const WrapperContent = styled("div", {
	position: "relative",
	height: "90vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	gap: "45px",

	// padding: "6em 0",

	"& > h1": {
		whiteSpace: "nowrap",
		fontSize: "3em",
		width: "max-content",
	},

	"& > p": {
		fontSize: "1.2em",
		maxWidth: "500px",
	},
})

type Props = {
	children?: React.ReactNode
}

export function WrapperMainContent(props: Props) {
	return <WrapperContent>{props.children}</WrapperContent>
}
