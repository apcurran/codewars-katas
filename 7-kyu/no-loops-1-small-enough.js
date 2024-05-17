"use strict";

/**
 * solution 1 -- every method
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums 
 * @param {number} limit 
 * @returns {boolean}
 */
function smallEnough(nums, limit) {
    return nums.every((num) => num <= limit);
}

console.log(smallEnough([66, 101], 200)); // true
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)); // false
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107)); // true
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)); // true
