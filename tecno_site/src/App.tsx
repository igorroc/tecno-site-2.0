import SetGlobalStyle from "./components/Global/GlobalStyles"
import { AppRoutes } from "./Routes"
import fontAwesomeLib from "./common/iconLibrary"
import "./app.css"

fontAwesomeLib.init()

function App() {
	SetGlobalStyle()
	return <AppRoutes />
}

export default App
