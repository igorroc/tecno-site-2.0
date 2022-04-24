/**
 * Library for all icons used in library
 * Only icons explicitly imported will be used in application
 *
 * To import an entire library:
 * import brands from '@fortawesome/fontawesome-free-brands'
 * fontawesome.library.add(brands);
 *
 *
 */

import { library } from "@fortawesome/fontawesome-svg-core"

/** SOLID ICONS (PREFIX: fas) */
import { fas } from "@fortawesome/free-solid-svg-icons"

/** BRAND ICONS (PREFIX: fab) */
import { fab } from "@fortawesome/free-brands-svg-icons"

/** REGULAR ICONS (PREFIX: far) */
import { far } from "@fortawesome/free-regular-svg-icons"

export default {
	init: () => library.add(fas, fab, far),
}

// <FontAwesomeIcon icon={item.icon as any} fixedWidth={true} />
