import {Buffer} from 'node:buffer';
import {JSDOM} from 'jsdom';
import {expectType} from 'tsd';
import isBlob from './index.js';

const {window} = new JSDOM();

expectType<boolean>(isBlob(new window.Blob()));
expectType<boolean>(isBlob(Buffer.alloc(1)));
