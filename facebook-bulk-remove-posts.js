/*
 * Removes all your posts from Facebook activity log.
 * Go to your activity log, setup a filter and then paste this script into developers console of your browser.
 * 
 * Based on script for removing likes from: https://blog.xeovo.com/how-to-bulk-delete-all-your-likes-and-comments-on-facebook/
 */
setInterval(() => {
	document.querySelectorAll('div[aria-label="Action options"]')[0].click();
		setTimeout(() => {
			document.querySelectorAll('div[role="menuitem"]')[2].click();
			setTimeout(() => {
				document.querySelectorAll('div[aria-label="Move to Trash"]')[0].click();
			}, 1000);
		}, 1000);
	}, 3000);
