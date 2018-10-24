'use strict';

module.exports = input => {
	if (!Blob) {
		return false;
	}

	return input instanceof Blob || Object.prototype.toString.call(input) === '[object Blob]';
};
