export var hasFetch = isFunction(global.fetch) && isFunction(global.ReadableStream)

var _blobConstructor;
export function blobConstructor() {
  if (typeof _blobConstructor !== 'undefined') {
    return _blobConstructor;
  }
  try {
    new global.Blob([new ArrayBuffer(1)])
    _blobConstructor = true
  } catch (e) {
    _blobConstructor = false
  }
  return _blobConstructor
}

// For some strange reason, Safari 7.0 reports typeof global.ArrayBuffer === 'object'.
// Safari 7.1 appears to have fixed this bug.
var haveArrayBuffer = typeof global.ArrayBuffer !== 'undefined'
var haveSlice = haveArrayBuffer && isFunction(global.ArrayBuffer.prototype.slice)

export var arraybuffer = haveArrayBuffer;
  // These next two tests unavoidably show warnings in Chrome. Since fetch will always
  // be used if it's available, just return false for these to avoid the warnings.
export var msstream = !hasFetch && haveSlice;
export var mozchunkedarraybuffer = !hasFetch && haveArrayBuffer;
export var overrideMimeType = true // isFunction(xhr.overrideMimeType);
export var vbArray = isFunction(global.VBArray)

function isFunction(value) {
  return typeof value === 'function'
}

