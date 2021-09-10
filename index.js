'use strict';

module.exports = function(value) {
	if (typeof Blob === 'undefined') {
		return false;
	}

	return value instanceof Blob || Object.prototype.toString.call(value) === '[object Blob]';
};
