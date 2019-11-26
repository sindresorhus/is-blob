/**
 * Check if a value is a [Blob](https://developer.mozilla.org/en/docs/Web/API/Blob) - File-like object of immutable, raw data.
 * @param input Value to check.
*/
declare function isBlob(input: any): input is Blob

export = isBlob
