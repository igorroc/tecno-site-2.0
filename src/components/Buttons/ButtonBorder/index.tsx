import { Button } from "./styles"

type ButtonProps = {
	text: string
	url?: string
	small?: boolean
}

export function ButtonBorder(props: ButtonProps) {
	return (
		<Button href={props.url} className={props.small ? "mobile" : ""}>
			{props.text}
		</Button>
	)
}
