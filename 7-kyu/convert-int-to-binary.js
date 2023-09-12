"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} n 
 * @returns {string}
 */
function toBinary(n) {
    if (n < 0) {
        n += (2 ** 32);
    }

    return n.toString(2);
}

console.log(toBinary(3)); // "11"
console.log(toBinary(-3)); // "11111111111111111111111111111101"
