"use strict";

// /**
//  * solution 1 -- brute force
//  * time: O(n^2)
//  * space: O(1)
//  * 
//  * @param {number[]} arr 
//  * @returns {number} min abs diff
//  */
// function getting_mad(arr) {
//     let minAbsDiff = Math.abs(arr[0] - arr[1]);

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             // do not check for outer current value with itself
//             if (j === i) continue;

//             const num1 = arr[i];
//             const num2 = arr[j];
//             const absDiff = Math.abs(num1 - num2);
//             minAbsDiff = Math.min(minAbsDiff, absDiff);
//         }
//     }

//     return minAbsDiff;
// }

/**
 * solution 2 -- sort
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @returns {number} min abs diff
 */
function getting_mad(arr) {
    arr.sort(function sortDesc(a, b) {
        return b - a;
    });
    
    let minAbsDiff = Infinity;

    for (let i = 0; i < arr.length - 1; i++) {
        const currentNum = arr[i];
        const nextNum = arr[i + 1];
        const diff = currentNum - nextNum;
        minAbsDiff = Math.min(minAbsDiff, diff);
    }

    return minAbsDiff;
}

console.log(getting_mad([-10, 0, -3, 1])); // 1
