import { keyframes, styled } from "@stitches/react"

const size = "1.6em"
const shadow = "0px 0px 5px #000"
const rotation = "rotateZ(-90deg)"

const slidingAnimation = keyframes({
	"0%": { transform: `${rotation} translateX(10%)` },
	"50%": { transform: `${rotation} translateX(-10%)` },
	"100%": { transform: `${rotation} translateX(10%)` },
})

const Div = styled("div", {
	position: "absolute",
	top: "50%",
	right: "0",
	transform: rotation,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	gap: "2em",
	color: "white",
	textShadow: shadow,
	fontSize: size,
	animation: `${slidingAnimation} 2s infinite ease-in-out`,
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
			</Arrow>
			Scroll
		</Div>
	)
}
