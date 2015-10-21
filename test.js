import test from 'ava';
import jsdom from 'jsdom';
import pify from 'pify';
import fn from './';

test(async t => {
	const Blob = (await pify(jsdom.env)('')).Blob;
	global.Blob = Blob;
	t.true(fn(new Blob()));
	t.false(fn(new Buffer(1)));
});
