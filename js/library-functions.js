const help = {
	/**
	 * Return a YYYY-MM-DD datestamp for today.
	 *
	 * @returns {string} The datestamp
	 */
	getSaneDateStamp(){
		const today = new Date();
		const thisYear = String(today.getFullYear());
		const thisMonth = String(today.getMonth() + 1).padStart(2, '0');
		const thisDay = String(today.getDate()).padStart(2, '0');
		return thisYear + '-' + thisMonth + '-' + thisDay;
	},

	/**
	 * Get a Date instance, but rounded to nearest 15 minutes.
	 *
	 * @returns {Date}
	 */
	getCurrentTimeTodayRoundedTo15Minutes () {
		const currentTimeToday = new Date();
		currentTimeToday.setMinutes(Math.ceil(currentTimeToday.getMinutes() / 15) * 15, 0, 0);
		return currentTimeToday;
	},

	/**
	 * Use the application storage key to store an item
	 *
	 * @param thing The thing to store, pass in `null` to remove the item
	 */
	locallyStore(thing, key) {
		if (!key){
			key = '';
		} else {
			key = '.' + key;
		}
		key = keyStart + key;
		if (thing === null){
			localStorage.removeItem(key);
		}
		localStorage.setItem(key, JSON.stringify(thing));
	},

	/**
	 * Use the application storage key to retrieve an item
	 *
	 * @returns {any} the thing if it exists
	 */
	locallyGet(key) {
		if (!key){
			key = '';
		} else {
			key = '.' + key;
		}
		key = keyStart + key;
		let val = localStorage.getItem(key);
		if (typeof val === 'string'){
			val = JSON.parse(localStorage.getItem(key));
		}
		return val;
	},

	/**
	 * Generate an HTMLElement from the string, not inserted into the DOM.
	 *
	 * @param {String} string A string representation of the html element
	 * @returns {HTMLElement} The newly cretade element
	 */
	getHTMLElementFromString(string) {
		let template = document.createElement('template');
		string = string.trim();
		template.innerHTML = string;
		return template.content.firstChild;
	},
};
