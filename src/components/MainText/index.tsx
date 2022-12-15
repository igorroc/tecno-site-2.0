import { Text } from "./styles"

type TextProps = {
	size?: "giant" | "large" | "medium" | "normal" | undefined
	className?: string
	children?: React.ReactNode
}

export function MainText(props: TextProps) {
	return (
		<Text className={props.className} size={props.size}>
			{props.children}
		</Text>
	)
}
