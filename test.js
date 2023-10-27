import test from 'ava';
import jsdom from 'jsdom';
import isBlob from './index.js';

const dom = new jsdom.JSDOM();
globalThis.window = dom.window;
globalThis.document = dom.window.document;
globalThis.Blob = window.Blob;
globalThis.File = window.File;

test('main', t => {
	t.true(isBlob(new Blob()));
	t.true(isBlob(new File([], 'foo.txt')));
	t.false(isBlob(new Uint8Array(1)));
});
