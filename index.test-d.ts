import { JSDOM } from 'jsdom';
import { expectType } from 'tsd';
import isBlob = require(".");

const { window } = new JSDOM();

expectType<boolean>(isBlob(new window.Blob()));
expectType<boolean>(isBlob(Buffer.alloc(1)));
