import {JSDOM} from 'jsdom';
import {expectType} from 'tsd';
import isBlob from './index.js';

const {window} = new JSDOM();

expectType<boolean>(isBlob(new window.Blob()));
expectType<boolean>(isBlob(new Uint8Array(1)));
