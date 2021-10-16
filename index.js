const {toString} = Object.prototype;

export default function isBlob(value) {
	if (typeof Blob === 'undefined') {
		return false;
	}

	return value instanceof Blob || toString.call(value) === '[object Blob]';
}
