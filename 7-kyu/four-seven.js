"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} n 
 * @returns {number}
 */
function fourSeven(n) {
    while (n === 4) {
        return 7;
    }

    while (n === 7) {
        return 4;
    }

    return 0;
}

console.log(fourSeven(4)); // 7
console.log(fourSeven(7)); // 4
