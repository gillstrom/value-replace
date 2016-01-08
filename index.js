'use strict';
module.exports = function (obj, search, replace) {
	var ret = {};

	if (typeof obj !== 'object') {
		throw new TypeError('Expected an object');
	}

	Object.keys(obj).forEach(function (el) {
		if (typeof obj[el] !== 'string') {
			ret[el] = obj[el];
			return;
		}

		ret[el] = obj[el].replace(search, replace);
	});

	return ret;
};
