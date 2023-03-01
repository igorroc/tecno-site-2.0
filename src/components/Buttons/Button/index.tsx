import { useNavigate } from "react-router-dom"
import { CustomButton, CustomLink } from "./styles"

type ButtonProps = {
	url?: string
	children?: React.ReactNode
	newTab?: boolean
}

export function Button(props: ButtonProps) {
	const navigate = useNavigate()

	function linkToPage() {
		if (props.url) {
			if (props.newTab) {
				window.open(props.url, "_blank")?.focus()
			} else {
				if (props.url.startsWith("#"))
					window.location.replace(props.url)
				else navigate(props.url)
			}
		}
	}

	if (props.url && !props.url.startsWith("/") && !props.url.startsWith("#")) {
		return (
			<CustomLink href={props.url} target={props.newTab ? "_blank" : ""}>
				{props.children}
			</CustomLink>
		)
	} else {
		return (
			<CustomButton onClick={linkToPage}>{props.children}</CustomButton>
		)
	}
}
