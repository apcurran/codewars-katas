"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1) -- not including results array
 *
 * @param {number} n
 * @returns {number[]}
 */
function seqToOne(n) {
    let results = [];

    if (n <= 1) {
        while (n <= 1) {
            results.push(n);
            n++;
        }
    } else {
        while (n >= 1) {
            results.push(n);
            n--;
        }
    }

    return results;
}

console.log(seqToOne(5)); // [5, 4, 3, 2, 1]
console.log(seqToOne(-1)); // [-1, 0, 1]
