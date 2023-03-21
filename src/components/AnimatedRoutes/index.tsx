import { Route, Routes, useLocation } from "react-router-dom"
import PageNotFound from "../../pages/404"
import Sobre from "../../pages/Sobre"
import Contato from "../../pages/Contato"
import Home from "../../pages/Home"
import Links from "../../pages/Links"
import Login from "../../pages/Login"
import PressKit from "../../pages/PressKit"
import Projetos from "../../pages/Projetos"
import WpAdmin from "../../pages/WpAdmin"
import Prosel from "../../pages/Prosel"

import { AnimatePresence } from "framer-motion"
import { useEffect } from "react"

export function AnimatedRoutes() {
	const location = useLocation()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location])
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/sobre" element={<Sobre />} />
				<Route path="/contato" element={<Contato />} />
				<Route path="/sonhos" element={<Projetos />} />
				<Route path="/press-kit" element={<PressKit />} />
				<Route path="/prosel" element={<Prosel />} />
				<Route path="/links" element={<Links />} />
				<Route path="/404" element={<PageNotFound />} />
				<Route path="/wp-admin" element={<WpAdmin />} />
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</AnimatePresence>
	)
}
