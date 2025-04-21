"use strict";

// /**
//  * solution 1 -- brute force
//  * time: O(n^2)
//  * space: O(1)
//  * 
//  * @param {number} num 
//  * @returns {boolean}
//  */
// function consecutiveDucks(num) {
//     const upperLimit = Math.ceil(num / 2);

//     for (let i = 1; i <= upperLimit; i++) {
//         let sum = i; // already start sum with outerNum (i), then add other values

//         for (let j = i + 1; j <= upperLimit; j++) {
//             // add other values to sum
//             sum += j;

//             // check if n reached yet
//             if (sum === num) {
//                 return true;
//             }
//         }
//     }

//     return false;
// }

/**
 * solution 2 -- math (check for power of 2)
 * time: O(log n)
 * space: O(1)
 * 
 * @param {number} num 
 * @returns {boolean}
 */
function consecutiveDucks(num) {
    if (num < 2) return false;

    while (num % 2 === 0) {
        // while divisible by 2, divide
        num = num / 2;
    }

    return num !== 1;
}

console.log(consecutiveDucks(9)); // true
console.log(consecutiveDucks(64)); // false
