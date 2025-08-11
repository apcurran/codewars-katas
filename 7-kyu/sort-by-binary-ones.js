"use strict";

/**
 * solution 1 -- Array.prototype.sort() comparator fn
 * time: O(n * log n)
 * space: (n)
 *
 * @param {number[]} list
 * @returns {number[]}
 */
function sortByBinaryOnes(list) {
    return list.sort(function sortBinaryDesc(a, b) {
        const aBinary = a.toString(2);
        const aBinaryOnesCount = getBinaryOnesCount(aBinary);
        const bBinary = b.toString(2);
        const bBinaryOnesCount = getBinaryOnesCount(bBinary);

        if (aBinaryOnesCount > bBinaryOnesCount) {
            return -1;
        } else if (aBinaryOnesCount < bBinaryOnesCount) {
            return 1;
        }

        if (aBinaryOnesCount === bBinaryOnesCount) {
            // if strings have the same length, lower decimal num goes first
            if (aBinary.length === bBinary.length) {
                return a - b;
            } else {
                // shorter string goes first
                return aBinary.length - bBinary.length;
            }
        }
    });
}

/**
 * @param {string} binStr
 * @returns {number} 1s count
 */
function getBinaryOnesCount(binStr) {
    let onesCounter = 0;

    for (let i = 0; i < binStr.length; i++) {
        if (binStr[i] === "1") onesCounter++;
    }

    return onesCounter;
}

console.log(sortByBinaryOnes([1, 3])); // [3, 1]
console.log(sortByBinaryOnes([1, 2, 3, 4])); // [3, 1, 2, 4]
console.log(sortByBinaryOnes([1, 15, 7, 3, 5])); // [15, 7, 3, 5, 1]
