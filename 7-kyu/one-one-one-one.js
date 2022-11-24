"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums 
 * @returns {number}
 */
function consecutiveOnes(nums) {
    let maxOnes = [];
    let currOnesCount = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (num === 1) {
            currOnesCount++;
        } else {
            maxOnes.push(currOnesCount);
            currOnesCount = 0;
        }
    }

    // push leftovers to arr
    maxOnes.push(currOnesCount);

    return Math.max(...maxOnes);
}

console.log( consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]) ); // 3
console.log( consecutiveOnes([0, 0, 0, 0, 0]) ); // 0
console.log( consecutiveOnes([1, 1, 1, 1, 1]) ); // 5
