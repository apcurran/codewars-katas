"use strict";

// /**
//  * solution 1 -- hashmap (correct, but TLE)
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {number[]} nums
//  * @returns {number}
//  */
// function findUnique(nums) {
//     let numsFrequencies = new Map();

//     for (let num of nums) {
//         const previousNumCount = numsFrequencies.get(num) || 0;
//         numsFrequencies.set(num, previousNumCount + 1);
//     }

//     for (let [num, numCount] of numsFrequencies) {
//         if (numCount === 1) {
//             return num;
//         }
//     }
// }

/**
 * solution 2 -- Bitwise XOR
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @returns {number}
 */
function findUnique(nums) {
    let unique = 0;

    for (let num of nums) {
        unique ^= num;
    }

    return unique;
}

console.log(findUnique([1, 8, 4, 4, 6, 1, 8])); // 6
