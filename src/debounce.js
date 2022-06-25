export default function debounce(callback, delay = 0) {
	if (typeof callback !== 'function') {
		throw 'callback should be a function';
	}
	if (typeof delay !== 'number') {
		throw 'delay should be a number';
	}

	let timeout = null;

	return function (...args) {
		// if timeout has been set in the previous call, cancel it
		if (timeout) {
			clearTimeout(timeout);
		}

		// set a new timeout
		timeout = setTimeout(() => {
			callback.apply(this, args);
			timeout = null;
		}, delay);
	}
}
