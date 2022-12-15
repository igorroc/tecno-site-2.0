import { styled } from "@stitches/react"

export const GlobalDiv = styled("div", {
	position: "relative",
	width: "100vw",
	overflowX: "hidden",
	minHeight: "100vh",
	display: "flex",
	background: "#f0f0f1",
	color: "#3c434a",
	alignItems: "center",
	justifyContent: "center",

	".video": {
		position: "absolute",
		top: "0",
		left: "0",
		height: "100%",
		width: "100%",
		objectFit: "cover",
		zIndex: "0",
		opacity: "0.5",
	},

	".main": {
		position: "relative",
		zIndex: 1,
		display: "flex",
		gap: "20px",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",

		".form": {
			marginLeft: "0",
			padding: "26px 24px 34px",
			fontWeight: "400",
			overflow: "hidden",
			background: "#fff",
			border: "1px solid #c3c4c7",
			boxShadow: "0 1px 3px rgba(0,0,0,.04)",

			label: {
				display: "flex",
				flexDirection: "column",
				fontSize: "14px",
				lineHeight: "1.5",
				marginBottom: "3px",

				input: {
					fontSize: "24px",
					lineHeight: "1.33333333",
					borderWidth: "0.0625rem",
					borderRadius: "4px",
					padding: "3px 5px",
					minHeight: "40px",
					maxHeight: "none",
				},
			},

			".buttons": {
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",

				label: {
					display: "flex",
					flexDirection: "row",
					gap: "10px",
					alignItems: "center",
				},

				button: {
					minHeight: "32px",
					lineHeight: "2.30769231",
					padding: "0 12px",
					background: "#2271b1",
					border: "none",
					borderRadius: "3px",
					color: "#fff",
					textDecoration: "none",
					textShadow: "none",
				},
			},
		},

		".lower": {
			position: "relative",
			width: "100%",
			display: "flex",
			flexDirection: "column",
			gap: "10px",
			padding: "10px",

			".lowerBG": {
				position: "absolute",
				zIndex: "-1",
				top: "0",
				left: "0",
				width: "100%",
				height: "100%",
				background: "#fff",
				border: "1px solid #c3c4c7",
				boxShadow: "0 1px 3px rgba(0,0,0,.04)",
				opacity: "0",
			},

			a: {
				color: "#3c434a",
				width: "max-content",
			},

			".idioma": {
				display: "flex",
				flexDirection: "row",
				gap: "10px",
				alignItems: "center",
				justifyContent: "center",

				select: {
					background: "#fff",
					fontSize: "14px",
					lineHeight: "2",
					color: "#2c3338",
					borderColor: "#8c8f94",
					boxShadow: "none",
					borderRadius: "3px",
					padding: "0 24px 0 8px",
					minHeight: "30px",
					maxWidth: "25rem",
					width: "100%",
					backgroundSize: "16px 16px",
					cursor: "pointer",
					verticalAlign: "middle",
				},

				".alt": {
					color: "#2271b1",
					borderColor: "#2271b1",
					background: "#f6f7f7",
					verticalAlign: "top",
					display: "inline-block",
					textDecoration: "none",
					fontSize: "13px",
					lineHeight: "2.15384615",
					minHeight: "30px",
					margin: "0",
					padding: "0 10px",
					cursor: "pointer",
					borderWidth: "1px",
					borderStyle: "solid",
					borderRadius: "3px",
					whiteSpace: "nowrap",
					boxSizing: "border-box",
				},
			},
		},
	},
})
