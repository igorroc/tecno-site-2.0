import { styled } from "@stitches/react"

const Wrapper = styled("div", {
	fontSize: "1em",
	width: "90%",
	maxWidth: "1400px",
	margin: "0 auto",
	padding: "0px 5%",
})

type WrapperProps = {
	children?: React.ReactNode
}

export function MaxWidthWrapper(props: WrapperProps) {
	return <Wrapper>{props.children}</Wrapper>
}
