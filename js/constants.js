/**
 * The start time (24hr) for all time windows to be computed from
 * @type {string}
 */
const startTime = '07:00';

/**
 * The key to use for localStorage
 * @type {string}
 */
const keyStart = 'JEF-time-track';

/**
 * Categories that can be chosen in the dropdown
 * @type {string[]}
 */
const types = [
	'not-working',
	'idle',
	'meeting',
	'unplanned-meeting',
	'task-management',
	'coding',
	'fire-fighting'
];