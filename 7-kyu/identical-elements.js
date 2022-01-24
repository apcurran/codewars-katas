"use strict";

/**
 * Solution 1
 * Time: O(n * m)
 * Space: O(1)
 * 
 * @param {number[]} m 
 * @param {number[]} n 
 * @returns {boolean}
 */
function duplicateElements(m, n) {
    let hasDup = false;

    for (let num of n) {
        if (m.includes(num)) {
            hasDup = true;
            break;
        }
    }

    return hasDup;
}

console.log( duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]) ); // true
console.log( duplicateElements([9, 8, 7], [8, 1, 3]) ); // true
console.log( duplicateElements([9, 8, 7], [1, 2, 3]) ); // false
