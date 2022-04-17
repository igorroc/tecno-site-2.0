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

import * as fontawesome from "@fortawesome/fontawesome"

/** BRAND ICONS (PREFIX: fab) */
import * as faWindows from "@fortawesome/fontawesome-free-brands/faWindows"
import * as faGithub from "@fortawesome/fontawesome-free-brands/faGithub"
import * as faLinkedin from "@fortawesome/fontawesome-free-brands/faLinkedin"
import * as faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook"

export default {
	init: () =>
		fontawesome.library.add(faWindows, faGithub, faLinkedin, faFacebook),
}

// <FontAwesomeIcon icon={item.icon as any} fixedWidth={true} />
