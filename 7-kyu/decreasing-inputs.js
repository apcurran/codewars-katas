"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param  {...number} nums 
 * @returns {number}
 */
function add(...nums) {
    if (nums.length === 0) return 0;

    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const quotient = num / (i + 1);
        total += quotient;
    }

    return Math.round(total);
}

console.log( add(3, 4, 6) ); // 7
