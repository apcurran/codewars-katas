"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number} a
 * @param {number} r
 * @param {number} n
 * @returns {string}
 */
function geometricSequenceElements(a, r, n) {
    // formula -> val = a * r^(n - 1)
    let resStrArr = [];

    for (let i = 1; i <= n; i++) {
        const val = a * r ** (i - 1);
        resStrArr.push(val);
    }

    return resStrArr.join(", ");
}

console.log(geometricSequenceElements(2, 3, 5)); // '2, 6, 18, 54, 162'
