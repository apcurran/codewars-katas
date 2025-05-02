"use strict";

/**
 * solution 1 -- hashmap (correct, but TLE)
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums 
 * @returns {number}
 */
function findUnique(nums) {
    let numsFrequencies = new Map();

    for (let num of nums) {
        const previousNumCount = numsFrequencies.get(num) || 0;
        numsFrequencies.set(num, previousNumCount + 1);
    }

    for (let [num, numCount] of numsFrequencies) {
        if (numCount === 1) {
            return num;
        }
    }
}

console.log(findUnique([1, 8, 4, 4, 6, 1, 8])); // 6
