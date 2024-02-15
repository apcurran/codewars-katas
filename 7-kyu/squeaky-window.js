"use strict";

/**
 * solution 1 -- sliding window
 * time: O(n * k)
 * space: O(1) -- excluding the necessary results array, no extra data structures
 * 
 * @param {number[]} nums 
 * @param {number} k 
 * @returns {number[]}
 */
function sliding(nums, k) {
    let results = [];
    let left = 0;
    let right = k;
    
    while (left < right && right <= nums.length) {
        let currentWindowMax = -Infinity;

        for (let j = left; j < right; j++) {
            currentWindowMax = Math.max(currentWindowMax, nums[j]);
        }

        results.push(currentWindowMax);
        // update pointers
        left++;
        right++;
    }

    return results;
}

console.log(sliding([1,3,-1,-3,5,3,6,7], 3)); // [3, 3, 5, 5, 6, 7]
