"use strict";

/**
 * solution 1 -- brute force
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number} num 
 * @returns {boolean}
 */
function consecutiveDucks(num) {
    const upperLimit = Math.ceil(num / 2);

    for (let i = 1; i <= upperLimit; i++) {
        let sum = i; // already start sum with outerNum (i), then add other values

        for (let j = i + 1; j <= upperLimit; j++) {
            // add other values to sum
            sum += j;

            // check if n reached yet
            if (sum === num) {
                return true;
            }
        }
    }

    return false;
}

console.log(consecutiveDucks(9)); // true
console.log(consecutiveDucks(64)); // false
