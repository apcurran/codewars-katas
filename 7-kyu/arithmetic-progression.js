"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} a 
 * @param {number} d 
 * @param {number} n 
 * @returns {string}
 */
function arithmeticSequenceElements(a, d, n) {
    let resStr = [];

    for (let i = 1; i <= n; i++) {
        const num = a + (i - 1) * d;
        resStr.push(num);
    }

    return resStr.join(", ");
}

console.log( arithmeticSequenceElements(1, 2, 5) ); // "1, 3, 5, 7, 9"
