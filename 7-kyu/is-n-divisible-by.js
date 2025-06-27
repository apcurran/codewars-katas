"use strict";

/**
 * Solution 1
 * time: O(n)
 * space: O(n) -- rest param in arr format
 * 
 * @param {number} n 
 * @param  {...number} otherArgs 
 * @returns {boolean}
 */
function isDivisible(n, ...otherArgs) {
    for (let arg of otherArgs) {
        if (n % arg !== 0) return false;
    }

    return true;
}

console.log( isDivisible(100, 5, 4, 10, 25, 20) ); // true
console.log( isDivisible(12, 7) ); // false
console.log( isDivisible(7) ); // true
