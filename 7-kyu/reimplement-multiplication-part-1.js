"use strict";

/**
 * solution 1 -- math
 * time: O(b)
 * space: O(1)
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function mul(a, b) {
    // multiplication is repeated addition
    let total = 0;

    for (let i = 1; i <= b; i++) {
        total += a;
    }

    return total;
}

console.log(mul(5, 5)); // 25
