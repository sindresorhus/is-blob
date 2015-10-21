/* globals Blob */
'use strict';
var toString = Object.prototype.toString;

module.exports = function (x) {
	return x instanceof Blob || toString.call(x) === '[object Blob]';
};
