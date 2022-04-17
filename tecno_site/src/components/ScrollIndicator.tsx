import { styled } from "@stitches/react"

const size = "1.6em"
const shadow = "0px 0px 5px #000"

const Div = styled("div", {
	position: "absolute",
	top: "50%",
	right: "0",
	transform: "rotateZ(-90deg)",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	gap: "0.5em",
	color: "white",
	textShadow: shadow,
	fontSize: size,
})

const Line = styled("div", {
	width: "100px",
	height: "4px",
	borderRadius: "10em",
	backgroundColor: "white",
})

const Arrow = styled("div", {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	filter: `drop-shadow(${shadow})`,

	"& i": {
		transform: "translateX(.4em)",
		fontSize: size,
	},
})

export function ScrollIndicator() {
	return (
		<Div>
			<Arrow>
				<i className="fa-solid fa-angle-left"></i>
				<Line />
			</Arrow>
			Scroll
		</Div>
	)
}
