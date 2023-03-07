"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(m)
 * 
 * @param {array} arr 
 * @returns {boolean}
 */
function isIntArray(arr) {
    if (!Array.isArray(arr)) return false;

    if (arr.length === 0) return true;

    // iterate through list
    return arr.every((elem) => {
        // check type of element for number
        if (typeof elem !== "number" || Number.isNaN(elem)) return false;

        // if a number, then convert to binary string
        const binaryIntStr = (parseInt(String(elem), 10)).toString(2);
        const binaryOriginalNumStr = elem.toString(2);
        // compare the int version binary string to converted binary string
        if (binaryIntStr !== binaryOriginalNumStr) {
            return false;
        }
        // if they are the same, return true for this element
        return true;
    });
}

console.log( isIntArray([]) ); // true
console.log( isIntArray([1, 2, 3, 4]) ); // true
console.log( isIntArray([1, 2, 3, NaN]) ); // false
