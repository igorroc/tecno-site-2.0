import { styled } from "@stitches/react"

export const Wrapper = styled("div", {
	position: "absolute",
	width: "100%",
	height: "100%",
	overflow: "hidden",
})

export const WrapperContent = styled("div", {
	width: "90%",
	height: "100vh",
	maxWidth: "510px",

	position: "absolute",
	left: "50%",
	transform: "translateX(-50%)",

	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center",
	gap: "50px",
})

export const Paragraph = styled("p", {
	lineHeight: "2em",
	fontSize: "1.2em",
	textShadow: "0px 1px 5px black",
})
