"use strict";

// /**
//  * Solution 1 -- O(n) -> Too slow
//  * @param {number} n 
//  * @param {number} m 
//  * @returns {number}
//  */
// function f(n, m) {
//     let sum = 0;

//     for (let i = 1; i <= n; i++) {
//         const moddedVal = i % m;
//         sum += moddedVal;
//     }

//     return sum;
// }

/**
 * Solution 2 -- O(1)
 * @param {number} n 
 * @param {number} m 
 * @returns {number}
 */
function f(n, m) {
    const val = (n - 1) % m;
    const sumToTotal = (val * (val + 1)) / 2;

    return sumToTotal * 2;
}

console.log( f(10, 5) ); // 20
console.log( f(20, 20) ); // 190
console.log( f(15, 10) ); // 60
