import { styled } from "@stitches/react"

const WrapperContent = styled("div", {
	position: "relative",
	// width: "100%",
    height: "calc(85vh-80px)",
	display: "flex",
	flexDirection: "column",
	gap: "45px",

	padding: "6em 0",

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
