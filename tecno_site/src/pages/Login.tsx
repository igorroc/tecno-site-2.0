import { keyframes, styled } from "@stitches/react"
import { Icon } from "../components/Icon"

const fade = keyframes({
	to: { backgroundPosition: "-200% center" },
})

const Div = styled("div", {
    position: "relative",
	width: "100vw",
	height: "100vh",
	display: "flex",
    flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",

	main: {
		position: "relative",
		display: "flex",
		flexDirection: "column",
		alignItems: "start",
		justifyContent: "center",

		h1: {
			flex: "1",
			flexGrow: "1",
			width: "max-content",
			fontWeight: "300",
			fontSize: "5em",
			textTransform: "uppercase",
			overflow: "hidden",
			whiteSpace: "nowrap",
			color: "#fff3",

			"&:nth-child(2)": {
				zIndex: "1",
				position: "absolute",
				// color: "#000",
				textAlign: "center",
				background:
					"linear-gradient(90deg, #fff0, #fff0 50%, #2feaff 50%, #2feaff)",
				backgroundSize: "200% auto",
				backgroundClip: "text",
				textFillColor: "transparent",
				"--webkit-background-clip": "text",
				"--webkit-text-fill-color": "transparent",
				animation: `${fade} 5s ease-in-out infinite`,
			},
		},
	},

    ".button":{
        position: "absolute",
        bottom: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "max-content",
        height: "max-content",
        padding: "1em 2em",
        borderRadius: "0.5em",
        background: "#fff3",
        transition: "all 0.2s ease-in-out",

        svg: {
            color: "#fff",
        },

        "&:hover": {
            background: "#fff4",
        }
    }
})

export default function Login() {
	return (
		<Div>
			<main>
				<h1>Em breve</h1>
				<h1>Em breve</h1>
			</main>
            <a href="/" className="button">
                <Icon iconName="home" prefix="fas" />
            </a>
		</Div>
	)
}
