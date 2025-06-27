"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean}
 */
function twoArePositive(a, b, c) {
    let positiveNumsCount = 0;

    for (let num of arguments) {
        if (num > 0) positiveNumsCount++;
    }

    return positiveNumsCount === 2;
}

console.log(twoArePositive(2, 4, -3)); // true
console.log(twoArePositive(-4, 6, 8)); // true
console.log(twoArePositive(4, -6, 9)); // true
console.log(twoArePositive(-4, 6, 0)); // false
console.log(twoArePositive(4, 6, 10)); // false
console.log(twoArePositive(-14, -3, -4)); // false
