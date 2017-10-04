'use strict';
const toString = Object.prototype.toString;

module.exports = input => input instanceof Blob || toString.call(input) === '[object Blob]';
