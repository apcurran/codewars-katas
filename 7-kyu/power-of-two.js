"use strict";

// O(1)
function isPowerOfTwo(n) {
    return Number.isInteger(Math.log2(n));
}

console.log( isPowerOfTwo(1024) ); // true
console.log( isPowerOfTwo(4096) ); // true
console.log( isPowerOfTwo(333) ); // false