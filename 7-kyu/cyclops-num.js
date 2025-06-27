"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @returns {boolean}
 */
function cyclops(n) {
    // convert n to binary number string
    const nBinaryStr = n.toString(2);
    const isNBinaryStrEven = nBinaryStr.length % 2 === 0;

    // the binary digits length must be odd to have an exact middle
    if (isNBinaryStrEven) return false;
    // get bin str length and divide by 2 to get the middle index
    const nBinaryStrMiddleIndex = Math.floor(nBinaryStr.length / 2);
    // iterate all numbers of bin str to make sure all numbers are 1 except for the middle
    for (let i = 0; i < nBinaryStr.length; i++) {
        const currentBinaryDigit = nBinaryStr[i];

        if (i === nBinaryStrMiddleIndex && currentBinaryDigit !== "0") {
            return false;
        } else if (i === nBinaryStrMiddleIndex && currentBinaryDigit === "0") {
            continue;
        }

        if (currentBinaryDigit !== "1") {
            return false;
        }
    }
    // return true if all pass (only middle number is 0)
    // otherwise, return false early
    return true;
}

console.log(cyclops(1)); // false
console.log(cyclops(5)); // true
console.log(cyclops(3)); // false
console.log(cyclops(13)); // false
console.log(cyclops(23)); // false
console.log(cyclops(27)); // true
console.log(cyclops(2015)); // true
console.log(cyclops(666)); // false
console.log(cyclops(42)); // false
