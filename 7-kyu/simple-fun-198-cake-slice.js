"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} n 
 * @returns {number} max slices possible
 */
function cakeSlice(n) {
    let maxSlices = 1; // 1 slice is always possible with a whole cake

    for (let i = 1; i <= n; i++) {
        maxSlices += i;
    }

    return maxSlices;
}

console.log(cakeSlice(0)); // 1
console.log(cakeSlice(1)); // 2
console.log(cakeSlice(2)); // 4
console.log(cakeSlice(3)); // 7
