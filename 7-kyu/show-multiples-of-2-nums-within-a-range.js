"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1) -- not including results
 *
 * @param {number} a
 * @param {number} b
 * @param {number} upperLimit
 * @returns {number[]}
 */
function multiples(a, b, upperLimit) {
    let multiples = [];

    for (let i = 1; i < upperLimit; i++) {
        if (i % a === 0 && i % b === 0) {
            multiples.push(i);
        }
    }

    return multiples;
}

console.log(multiples(2, 4, 40)); // [4, 8, 12, 16, 20, 24, 28, 32, 36]
