import { styled } from "@stitches/react"

const Wrapper = styled("div", {
	position: "absolute",
	top: "0",
	left: "0",
	width: "100%",
	height: "85vh",
	zIndex: "-10",
	filter: `drop-shadow(0 2px 1px rgba(0,0,0,0.09))
			drop-shadow(0 4px 2px rgba(0,0,0,0.09))
			drop-shadow(0 8px 4px rgba(0,0,0,0.09))
			drop-shadow(0 16px 8px rgba(0,0,0,0.09))
			drop-shadow(0 32px 16px rgba(0,0,0,0.09))`,
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
