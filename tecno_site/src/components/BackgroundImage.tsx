import { styled } from "@stitches/react"

const Wrapper = styled("div", {
	position: "absolute",
	top: "0",
	left: "0",
	width: "100%",
	height: "85vh",
	zIndex: "-10",

	"& img": {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	},

	variants: {
		fullHeight: {
			true: {
				height: "100%",
			},
		},
	},
})

type BGProps = {
	image: string
	fullHeight?: boolean
}

export function BackgroundImage(props: BGProps) {
	return (
		<Wrapper fullHeight={props.fullHeight}>
			<img src={props.image} alt="Imagem" />
		</Wrapper>
	)
}
