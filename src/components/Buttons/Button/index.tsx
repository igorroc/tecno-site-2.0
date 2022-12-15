import { CustomButton } from "./styles"

type ButtonProps = {
	url?: string
	children?: React.ReactNode
	newTab?: boolean
}

export function Button(props: ButtonProps) {
	function linkToPage() {
		if (props.url) {
			if (props.newTab) {
				window.open(props.url, "_blank")?.focus()
			} else {
				window.location.replace(props.url)
			}
		}
	}
	return <CustomButton onClick={linkToPage}>{props.children}</CustomButton>
}
