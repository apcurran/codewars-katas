"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} str
 * @returns {number|NaN}
 */
function myParseInt(str) {
    const onlyUnsignedInt = /^\s*\d+\s*$/.test(str);

    if (onlyUnsignedInt) {
        return Number(str);
    } else {
        return NaN;
    }
}

console.log(myParseInt("08")); // 8
console.log(myParseInt("5 friends")); // NaN
console.log(myParseInt("16.5")); // NaN
