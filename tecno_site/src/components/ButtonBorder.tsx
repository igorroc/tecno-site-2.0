import { styled } from "@stitches/react"

const Button = styled("button", {
	backgroundColor: "#fff2",
	fontSize: "1em",
	height: "fit-content",
	color: "white",
	padding: "0.6em 1em",
	border: "3px solid transparent",
	borderRadius: "5em",
	background: "linear-gradient(to right, #5A7BE7, #9256EB)",
	backgroundClip: "padding-box",
	backgroundOrigin: "padding-box",
	cursor: "pointer",
	"&:hover": {
		backgroundColor: "#fff8",
	},
})

type ButtonProps = {
	text: string
	url?: string
}
export function ButtonBorder(props: ButtonProps) {
	return <Button>{props.text}</Button>
}
