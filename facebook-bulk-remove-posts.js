/*
 * Removes all your posts from Facebook activity log.
 * Go to your activity log, setup a filter and then paste this script into developers console of your browser.
 * 
 * Based on script for removing likes from: https://blog.xeovo.com/how-to-bulk-delete-all-your-likes-and-comments-on-facebook/
 */
setInterval(() => {
	document.querySelectorAll('div[aria-label="Action options"]')[0].click();
		setTimeout(() => {
			let items = document.querySelectorAll('div[role="menuitem"]');
			items[items.length == 3 ? 2 : 0].click();
			setTimeout(() => {
				let divs = document.querySelectorAll('div[aria-label="Delete"]');
				if(divs.length > 0) {
					divs[0].click();
				} else {
					divs = document.querySelectorAll('div[aria-label="Move to Trash"]');
					divs[0].click();
				}
			}, 1000);
		}, 1000);
	}, 3000);
