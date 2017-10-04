import test from 'ava';
import jsdom from 'jsdom';
import m from '.';

const dom = new jsdom.JSDOM();
global.window = dom.window;
global.document = dom.window.document;
global.Blob = window.Blob;

test(t => {
	t.true(m(new Blob()));
	t.false(m(Buffer.alloc(1)));
});
