import { keyframes, styled } from "@stitches/react"

const breathingAnimation = keyframes({
	"0%": { transform: "scale(1)" },
	"50%": { transform: "scale(1.1)" },
	"100%": { transform: "scale(1)" },
})

const gradientAnimation = keyframes({
	"0%": {
		backgroundPosition: "-100%",
	},
	"100%": {
		backgroundPosition: "100%",
	},
})

const Text = styled("h1", {
	fontSize: "1em",
	fontWeight: "bold",
	color: "transparent",
	width: "max-content",
	background:
		"linear-gradient(110deg, #C548FF, #27F2FF, #C548FF, #27F2FF, #C548FF)",
	backgroundClip: "text",
	backgroundSize: "200%",
	backgroundPosition: "-100%",
	animation: `${gradientAnimation} 8s infinite linear`,

	variants: {
		size: {
			giant: {
				fontSize: "10em",
			},
			large: {
				fontSize: "5em",
			},
			normal: {
				fontSize: "1em",
			},
		},
	},
	"&.softBoxShadow": {
		// textShadow:
		// 	"0 1px 1px rgba(0,0,0,0.15), 0 2px 2px rgba(0,0,0,0.15), 0 4px 4px rgba(0,0,0,0.15), 0 8px 8px rgba(0,0,0,0.15);",
	},
})

type TextProps = {
	size?: "giant" | "large" | "normal" | undefined
	className?: string
	children?: React.ReactNode
}

export function MainText(props: TextProps) {
	return (
		<Text className={props.className} size={props.size}>
			{props.children}
		</Text>
	)
}
