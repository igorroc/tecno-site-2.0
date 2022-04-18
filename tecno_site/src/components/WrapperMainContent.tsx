import { styled } from "../stitches.config"

const WrapperContent = styled("div", {
	position: "relative",
	height: "100vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	gap: "45px",

	"& > h1": {
		fontSize: "3em",
		width: "max-content",
		maxWidth: "300px",
		
		"& span": {
			// maxWidth: "300px",
			// display: "inline",
		},
	},

	"& > p": {
		fontSize: "1.2em",
		maxWidth: "500px",
	},

	"@small": {
		fontSize: "12px",
	},
})

type Props = {
	children?: React.ReactNode
}

export function WrapperMainContent(props: Props) {
	return <WrapperContent>{props.children}</WrapperContent>
}
