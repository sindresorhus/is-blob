import test from 'ava';
import jsdom from 'jsdom';
import isBlob from '.';

const dom = new jsdom.JSDOM();
global.window = dom.window;
global.document = dom.window.document;
global.Blob = window.Blob;

test('main', t => {
	t.true(isBlob(new Blob()));
	t.true(isBlob(new window.File([], 'foo.txt')));
	t.false(isBlob(Buffer.alloc(1)));
});
