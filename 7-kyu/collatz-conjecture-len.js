"use strict";

// /**
//  * solution 1 -- recursion
//  * time: O(log n)
//  * space: O(log n)
//  *
//  * @param {number} n
//  * @returns {number} len of collatz arr
//  */
// function collatz(n, lenCounter = 1) {
//     // base case
//     if (n === 1) return lenCounter;

//     // recursive case
//     // n is even
//     if (n % 2 === 0) {
//         return collatz(n / 2, lenCounter + 1);
//     }
//     // recursive case
//     // n is odd
//     return collatz(n * 3 + 1, lenCounter + 1);
// }

/**
 * solution 2 -- iterative
 * time: O(log n)
 * space: O(1)
 *
 * @param {number} n
 * @returns {number} len of collatz arr
 */
function collatz(n) {
    let counter = 1;

    while (n > 1) {
        counter++;

        if (n % 2 === 0) {
            // even
            const newVal = n / 2;
            n = newVal;
        } else {
            // odd
            const newVal = n * 3 + 1;
            n = newVal;
        }
    }

    return counter;
}

console.log(collatz(20)); // 8
