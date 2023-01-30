"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {any} a 
 * @param {any} b 
 * @returns {number|NaN}
 */
function min(a, b) {
    const convertedA = a === null ? 0 : a;
    const convertedB = b === null ? 0 : b;

    if (typeof convertedA !== "number" ||
        typeof convertedB !== "number" ||
        Number.isNaN(convertedA)       ||
        Number.isNaN(convertedB)) {
        return NaN;
    }

    return (convertedA < convertedB) ? convertedA : convertedB;
}

console.log( min(1, -2.5) ); // -2.5
console.log( min(1.5, NaN) ); // NaN
console.log( min(1.5, undefined) ); // NaN
console.log( min(-Infinity, Infinity) ); // -Infinity
console.log( min(null, 2.5) ); // 0
console.log( min(NaN, 1.5) ); // NaN
