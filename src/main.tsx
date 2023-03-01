import { ThemeProvider } from "@mui/material"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { theme } from "./common/theme"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
)
