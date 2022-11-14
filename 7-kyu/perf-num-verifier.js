"use strict";

// /**
//  * solution 1 -- correct, but TLE
//  * time: O(n)
//  * space: O(1)
//  * 
//  * @param {number} n 
//  * @returns {boolean}
//  */
// function isPerfect(n) {
//     let divisorsSum = 0;

//     for (let i = 1; i < n; i++) {
//         const isDivisible = n % i === 0;

//         if (isDivisible) {
//             divisorsSum += i;
//         }
//     }

//     return divisorsSum === n;
// }

/**
 * solution 2
 * time: O(sqrt(n))
 * space: O(1)
 * 
 * @param {number} n 
 * @returns {boolean}
 */
function isPerfect(n) {
    let divisorsSum = 1;

    for (let i = 2; i * i <= n; i++) {
        const isDivisible = n % i === 0;
        
        if (isDivisible) {
            divisorsSum += (i + n / i);
        }
    }

    return divisorsSum === n && n > 1;
}
console.log( isPerfect(28) ); // true
console.log( isPerfect(6) ); // true
console.log( isPerfect(10) ); // false
