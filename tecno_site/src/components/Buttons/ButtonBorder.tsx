import { keyframes, styled } from "@stitches/react"

const animation = keyframes({
	"0%": {
		backgroundPosition: "0 0",
	},
	"100%": {
		backgroundPosition: "400% 0",
	},
})
const Button = styled("button", {
	position: "relative",
	outline: "none",
	border: "2px solid transparent",
	backgroundColor: "#ffffff10",
	fontSize: "1em",
	height: "fit-content",
	color: "white",
	padding: "0.6em 1em",
	borderRadius: "5em",
	cursor: "pointer",
	fontWeight: "bold",

	transition: "border 200ms ease-in-out",

	"&::before, &::after": {
		content: "",
		position: "absolute",
		left: "-2px",
		top: "-2px",
		width: "calc(100% + 4px)",
		height: "calc(100% + 4px)",
		background: "linear-gradient(to right, #21cfda, #c548ff, #21cfda)",
		backgroundSize: "400%",
		borderRadius: "100px",
		zIndex: "-1",
		animation: `${animation} 10s linear infinite`,
	},

	"&::after": {
		filter: "blur(10px)",
	},

	"&:hover": {
		border: "2px solid #27f2ff",
	},
})

type ButtonProps = {
	text: string
	url?: string
}
export function ButtonBorder(props: ButtonProps) {
	return <Button>{props.text}</Button>
}
