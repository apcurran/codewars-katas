"use strict";

// /**
//  * solution 1
//  * time: O(n^2) array.includes() call within loop
//  * space: O(1)
//  * 
//  * @param {number[]} nums 
//  * @returns {boolean}
//  */
// function ìsZeroBalanced(nums) {
//     if (nums.length === 0) return false; // no empty array

//     // sum to 0
//     const sum = nums.reduce((sum, current) => sum + current, 0);

//     if (sum !== 0) return false;
//     // each positive num has another neg num
//     for (let num of nums) {
//         if (num > 0) {
//             if (!nums.includes(-num)) {
//                 return false;
//             }
//         }
//     }

//     return true;
// }

/**
 * solution 2 -- cleaner implementation
 * time: O(n^2) array.includes() call within loop
 * space: O(1)
 * 
 * @param {number[]} nums 
 * @returns {boolean}
 */
function ìsZeroBalanced(nums) {
    return nums.length > 0 &&
           nums.reduce((sum, current) => sum + current, 0) === 0 &&
           nums.every((num) => nums.includes(-num));
}

console.log(ìsZeroBalanced([3])); // false
console.log(ìsZeroBalanced([0,0,0,0,0,0])); // true
