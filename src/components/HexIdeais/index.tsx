import { IconName } from "@fortawesome/fontawesome-svg-core"
import { Icon } from "../Icon"
import { Hex } from "./styles"

type HexProps = {
	title: string
	description: string
	icon: IconName
}

function HexIdeais(props: HexProps) {
	return (
		<Hex>
			<div className="wrapperTitle">
				<div className="wrapperIcon">
					<Icon prefix="fas" iconName={props.icon}></Icon>
				</div>
				<h3>{props.title}</h3>
			</div>

			<p>{props.description}</p>
		</Hex>
	)
}

export default HexIdeais
