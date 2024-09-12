"use strict";

/**
 * solution 1 -- correct, but TLE
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} n 
 * @returns {number}
 */
function sxore(n) {
    let xor = 0;

    for (let i = 1; i <= n; i++) {
        xor ^= i;
    }

    return xor;
}

console.log(sxore(50)); // 51
console.log(sxore(1000000)); // 1_000_000
