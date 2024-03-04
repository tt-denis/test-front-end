import { arrowChrome, arrowFireFox } from '../elements/arrows.js';

export function getArrow() {
	const userAgent = navigator.userAgent;
	let browser = 'unknown';
	browser = /edg/i.test(userAgent) ? 'Edge' : browser;
	browser =
		/chrome|crios/i.test(userAgent) &&
		!/opr|opera|chromium|edg|ucbrowser|googlebot/i.test(userAgent)
			? 'Chrome'
			: browser;
	browser =
		/firefox|fxios/i.test(userAgent) && !/seamonkey/i.test(userAgent)
			? 'Firefox'
			: browser;

	const isFireFox = browser === 'Edge' || browser === 'Firefox';

	return isFireFox ? arrowFireFox() : arrowChrome();
}
