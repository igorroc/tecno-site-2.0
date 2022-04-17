import { styled } from "@stitches/react"

const Wrapper = styled("div", {
	width: "90%",
	maxWidth: "1050px",
	margin: "0 auto",
	padding: "0px 5%",
})

type WrapperProps = {
	children?: React.ReactNode
}

export function MaxWidthWrapper(props: WrapperProps) {
	return <Wrapper>{props.children}</Wrapper>
}
