"use strict";

/**
 * solution 1 -- correct, but TLE
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} n 
 * @returns {boolean}
 */
function isPerfect(n) {
    let divisorsSum = 0;

    for (let i = 1; i < n; i++) {
        const isDivisible = n % i === 0;

        if (isDivisible) {
            divisorsSum += i;
        }
    }

    return divisorsSum === n;
}

console.log( isPerfect(28) ); // true
console.log( isPerfect(6) ); // true
console.log( isPerfect(10) ); // false
