"use strict";

/**
 * solution 1 -- math
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} n 
 * @returns {number[]}
 */
function powers(n) {
    let results = [];
    let product = 1;

    while (n > 0) {
        if (n % 2 === 1) {
            results.push(product);
        }

        product *= 2;
        n = Math.floor(n / 2);
    }

    return results;
}

console.log(powers(2)); // [2]
console.log(powers(4)); // [4]
console.log(powers(6)); // [2, 4]
