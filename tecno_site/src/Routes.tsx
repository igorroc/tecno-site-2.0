import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import PageNotFound from "./pages/404"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

export function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/404" element={<PageNotFound />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</Router>
	)
}
