import SetGlobalStyle from "./components/GlobalStyles"
import { AppRoutes } from "./Routes"
import fontAwesomeLib from "./common/iconLibrary"

fontAwesomeLib.init()

function App() {
	SetGlobalStyle()
	return <AppRoutes />
}

export default App
