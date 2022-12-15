import { Text } from "./styles"

type TextProps = {
	text: string
}
export function CodeText(props: TextProps) {
	return <Text>{props.text}</Text>
}
