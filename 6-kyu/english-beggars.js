"use strict";

/**
 * solution 1 -- pointer
 * v = values length
 * n = n beggars
 * time: O(n + v)
 * space: O(n)
 * 
 * @param {number[]} values 
 * @param {number} n 
 * @returns {number[]}
 */
function beggars(values, n) {
    // account for 0 beggars
    if (n <= 0) return []; 

    let beggarsTotals = new Array(n).fill(0);
    let beggarsIndex = 0;

    for (let value of values) {
        // beggars index out of bounds, return to index 0
        if (beggarsIndex > beggarsTotals.length - 1) {
            beggarsIndex = 0;
        }

        // add value to beggarTotal
        beggarsTotals[beggarsIndex] += value;
        // increment beggar index
        beggarsIndex++;
    }

    return beggarsTotals;
}

console.log(beggars([1, 2, 3, 4, 5], 2)); // [9, 6]
console.log(beggars([1, 2, 3, 4, 5], 3)); // [5, 7, 3]
console.log(beggars([1, 2, 3, 4, 5], 0)); // []
