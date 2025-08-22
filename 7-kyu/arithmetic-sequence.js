"use strict";

// /**
//  * solution 1 -- iterative
//  * time: O(n)
//  * space: O(1)
//  *
//  * @param {number} first
//  * @param {number} n
//  * @param {number} c
//  * @returns {number}
//  */
// function nthterm(first, n, c) {
//     let result = first;

//     for (let i = 0; i < n; i++) {
//         result += c;
//     }

//     return result;
// }

/**
 * solution 2 -- recursion
 * time: O(n)
 * space: O(n)
 *
 * @param {number} first
 * @param {number} n
 * @param {number} c
 * @returns {number}
 */
function nthterm(first, n, c) {
    if (n === 0) return first;

    const sum = first + c;

    return nthterm(sum, n - 1, c);
}

console.log(nthterm(1, 2, 3)); // 7
