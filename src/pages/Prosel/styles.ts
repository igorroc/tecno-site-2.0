import { keyframes, styled } from "@stitches/react"

export const fade = keyframes({
	to: { backgroundPosition: "-200% center" },
})

export const blink = keyframes({
	from: { opacity: 0.8 },
	"50%": { opacity: 1 },
	to: { opacity: 0.8 },
})

export const CustomSection = styled("section", {
	display: "flex",
	flexDirection: "column",
	gap: "3em",

	p: {
		margin: "20px 0",
	},

	a: {
		textDecoration: "underline",
		animation: `${blink} 1s ease-in-out infinite`,
		transition: "all 0.2s ease-in-out",

		"&:hover": {
			animation: "none",
			textDecoration: "none",
			fontWeight: "bold",
		},
	},

	table: {
		width: "100%",
		borderCollapse: "collapse",
		boxShadow: "0 0 10px rgba(0, 0, 0, 0.35)",

		th: {
			padding: "0.5em",
			background: "var(--primary-color)",
			color: "#fff",
		},

		td: {
			padding: "0.5em",
			border: "1px solid #ddd",
			textAlign: "center",
		},

		tr: {
			"&:nth-child(even)": {
				background: "#f2f2f211",
			},
		},
	},

	".twoColumns": {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		height: "max-content",

		"&.reverse": { flexDirection: "row-reverse" },

		".content": {
			width: "50%",
		},

		".imagem": {
			width: "40%",
			height: "100%",
			borderRadius: "3em 0",
			overflow: "hidden",

			img: {
				width: "100%",
				height: "100%",
				objectFit: "cover",
			},
		},

		"@media (max-width: 850px)": {
			flexDirection: "column-reverse",

			"&.reverse": { flexDirection: "column-reverse" },

			".content": {
				width: "100%",
			},

			".imagem": {
				width: "100%",
			},
		},
	},

	".center": {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
})

export const Div = styled("div", {
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

	".button": {
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
		},
	},
})
