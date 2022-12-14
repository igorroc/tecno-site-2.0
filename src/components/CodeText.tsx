import { styled } from "@stitches/react"

const Text = styled("span", {
	backgroundColor: "#fff2",
	fontSize: "1em",
	fontWeight: "bolder",
	height: "fit-content",
	color: "white",
	borderRadius: "5px",
	padding: "0.4em 0.6em",
	whiteSpace: "nowrap"
})

type TextProps = {
	text: string
}
export function CodeText(props: TextProps) {
	return <Text>{props.text}</Text>
}
