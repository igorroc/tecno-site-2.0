import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core"

type Props = {
	prefix: IconPrefix
	iconName: IconName
}

export function Icon(props: Props) {
	return <FontAwesomeIcon icon={[props.prefix, props.iconName]} />
}
