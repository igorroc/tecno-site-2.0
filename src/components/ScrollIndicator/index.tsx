import { Icon } from "../Icon"
import { Div } from "./styles"


export function ScrollIndicator() {
	// Create a react function that when the user click on div with id="scroll", scroll the page 100px down
	const scrollDown = () => {
		window.scrollTo({
			top: window.innerHeight - 50,
			behavior: "smooth",
		})
	}

	return (
		<Div onClick={scrollDown}>
			<Icon prefix="fas" iconName="angle-left" />
			<span className="largeScreen">Scroll</span>
			<span className="smallScreen">Swipe</span>
		</Div>
	)
}
