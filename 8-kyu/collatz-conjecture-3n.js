"use strict";

// /**
//  * solution 1 -- iterative
//  * time: O(n)
//  * space: O(1)
//  *
//  * @param {number} n
//  * @returns {number}
//  */
// function hotpo(n) {
//     let counter = 0;

//     while (n !== 1) {
//         if (n % 2 === 0) {
//             // even
//             n = n / 2;
//         } else {
//             // odd
//             n = 3 * n + 1;
//         }

//         counter++;
//     }

//     return counter;
// }

/**
 * solution 2 -- recursive
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @returns {number}
 */
function hotpo(n, counter = 0) {
    if (n <= 1) return counter;

    const updatedN = n % 2 === 0 ? n / 2 : 3 * n + 1;
    const updatedCount = counter + 1;

    return hotpo(updatedN, updatedCount);
}

console.log(hotpo(6)); // 8
