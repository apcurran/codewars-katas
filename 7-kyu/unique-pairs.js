"use strict";

/**
 * solution 1 -- math
 * time: O(1)
 * space: O(1)
 *
 * @param {number} n
 * @returns {number}
 */
function projectPartners(n) {
    return (n * (n - 1)) / 2;
}

// /**
//  * solution 2 -- iterative
//  * time: O(n)
//  * space: O(1)
//  *
//  * @param {number} n
//  * @returns {number}
//  */
// function projectPartners(n) {
//     let pairsCount = 0;

//     for (let i = 1; i < n; i++) {
//         pairsCount += i;
//     }

//     return pairsCount;
// }

console.log(projectPartners(2)); // 1
console.log(projectPartners(4)); // 6
