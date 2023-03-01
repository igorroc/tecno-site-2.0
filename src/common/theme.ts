import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
	palette: {
		primary: {
			main: "hsl(228, 56%, 47%)",
		},
		secondary: {
			main: "hsl(264, 79%, 63%)",
		},
		// Used by `getContrastText()` to maximize the contrast between
		// the background and the text.
		contrastThreshold: 3,
		// Used by the functions below to shift a color's luminance by approximately
		// two indexes within its tonal palette.
		// E.g., shift from Red 500 to Red 300 or Red 700.
		tonalOffset: 0.2,
	},
	typography: {
		fontFamily: [
			"Montserrat",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
})
