"use strict";

// /**
//  * solution 1
//  * time: O(n^2)
//  * space: O(n)
//  *
//  * @param {number[]} arr
//  * @returns {number[]}
//  */
// function solve(arr) {
//     let largerSet = new Set();

//     for (let i = 0; i < arr.length; i++) {
//         const currNum = arr[i];
//         let isLarger = true;

//         for (let j = i + 1; j < arr.length; j++) {
//             const rightNum = arr[j];

//             if (rightNum > currNum) isLarger = false;
//         }

//         if (isLarger) {
//             largerSet.add(currNum);
//         }
//     }

//     return [...largerSet];
// }

/**
 * solution 2
 * time: O(n^2)
 * space: O(n + m)
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function solve(arr) {
    return arr.filter((elem, i) => {
        return arr.slice(i + 1).every((val) => val < elem);
    });
}

console.log(solve([1, 21, 4, 7, 5])); // [21,7,5]
