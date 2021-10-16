# is-blob

> Check if a value is a [`Blob`](https://developer.mozilla.org/en/docs/Web/API/Blob) - File-like object of immutable, raw data

## Install

```sh
npm install is-blob
```

## Usage

```js
import isBlob from 'is-blob';

isBlob(new Blob(['<h1>Unicorns</h1>'], {type: 'text/html'}));
//=> true
```

## Related

- [is](https://github.com/sindresorhus/is) - Type check values
