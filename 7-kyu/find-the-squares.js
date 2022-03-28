"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} num 
 * @returns {string|null}
 */
function findSquares(num) {
    // start for loop from 1
    for (let i = 1; i < num; i++) {
        // check curr index squared against next index squared
        const currSmallerNumSquared = i ** 2;
        const currLargerNumSquared = (i + 1) ** 2;
        // see if diff is equal to num
        const squaresDiff = currLargerNumSquared - currSmallerNumSquared;

        if (squaresDiff === num) {
            // if yes, return "bignum-smallnum"
            return `${currLargerNumSquared}-${currSmallerNumSquared}`;
        }
        // if no, keep iterating
    }

    return null;
}

console.log( findSquares(9) ); // "25 - 16"
console.log( findSquares(5) ); // "9 - 4"
console.log( findSquares(7) ); // "16-9"
