import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	IconLookup,
	IconDefinition,
	findIconDefinition,
	IconPrefix,
	IconName,
} from "@fortawesome/fontawesome-svg-core"

type Props = {
	prefix: IconPrefix
	iconName: IconName
}

export function Icon(props: Props) {
	const iconLookup: IconLookup = {
		prefix: props.prefix,
		iconName: props.iconName,
	}

	const iconDefinition: IconDefinition = findIconDefinition(iconLookup)

	// console.log(props.prefix, props.iconName, iconLookup, iconDefinition)

	return <FontAwesomeIcon icon={[props.prefix, props.iconName]} />
}
