"use strict";

// /**
//  * solution 1 -- correct, but TLE
//  * time: O(n)
//  * space: O(1)
//  *
//  * @param {number} n
//  * @returns {number}
//  */
// function sxore(n) {
//     let xor = 0;

//     for (let i = 1; i <= n; i++) {
//         xor ^= i;
//     }

//     return xor;
// }

/**
 * solution 2
 * time: O(1)
 * space: O(1)
 *
 * @param {number} n
 * @returns {number}
 */
function sxore(n) {
    const nth = n % 4;

    if (nth === 0) {
        return n;
    } else if (nth === 1) {
        return 1;
    } else if (nth === 2) {
        return n + 1;
    } else if (nth === 3) {
        return 0;
    }
}

console.log(sxore(50)); // 51
console.log(sxore(1000000)); // 1_000_000
