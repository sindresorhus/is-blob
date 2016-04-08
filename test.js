import test from 'ava';
import jsdom from 'jsdom';
import pify from 'pify';
import m from './';

test(async t => {
	const Blob = (await pify(jsdom.env)('')).Blob;
	global.Blob = Blob;
	t.true(m(new Blob()));
	t.false(m(new Buffer(1)));
});
