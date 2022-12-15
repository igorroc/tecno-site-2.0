import { WrapperContent } from "./styles"

type Props = {
	children?: React.ReactNode
}

export function WrapperMainContent(props: Props) {
	return <WrapperContent>{props.children}</WrapperContent>
}
