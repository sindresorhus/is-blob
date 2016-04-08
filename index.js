'use strict';
/* globals Blob */
var toString = Object.prototype.toString;

module.exports = function (x) {
	return x instanceof Blob || toString.call(x) === '[object Blob]';
};
