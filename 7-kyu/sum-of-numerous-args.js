"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {...number} args
 * @returns {number}
 */
function findSum(...args) {
    // edge case
    let argsSum = 0;

    for (let arg of args) {
        if (arg < 0) return -1;

        argsSum += arg;
    }

    return argsSum;
}

console.log( findSum(1, 2, 3, 4) ); // 10
console.log( findSum(1, -2) ); // -1
console.log( findSum(1, -2, 4) ); // -1
