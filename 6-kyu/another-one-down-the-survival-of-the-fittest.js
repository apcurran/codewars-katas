"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number} n 
 * @param {number[]} arr 
 * @returns {number[]}
 */
function removeSmallest(n, arr) {
    if (n <= 0) return arr;

    let smallestItemsCount = n;
    let results = [...arr];

    while (smallestItemsCount > 0) {
        const minNum = getMin(results);
        const minNumIndex = results.indexOf(minNum);
        // remove min num
        results.splice(minNumIndex, 1);
        // decrement counter
        smallestItemsCount--;
    }

    return results;
}

console.log(removeSmallest(0, [1, 2, 3, 4, 5])); // [1,2,3,4,5]
console.log(removeSmallest(2, [5, 3, 2, 1, 4])); // [5,3,4]
console.log(removeSmallest(2, [1, 2, 1, 2, 1])); // [2,2,1]

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function getMin(nums) {
    let min = nums[0];

    for (let i = 1; i < nums.length; i++) {
        min = Math.min(min, nums[i]);
    }

    return min;
}
