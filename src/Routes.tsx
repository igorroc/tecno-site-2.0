import { BrowserRouter } from "react-router-dom"
import { Header } from "./components/Header"
import { AnimatedRoutes } from "./components/AnimatedRoutes"

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Header />
			<AnimatedRoutes />
		</BrowserRouter>
	)
}
