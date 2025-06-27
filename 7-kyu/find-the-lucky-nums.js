"use strict";

/**
 * solution 1
 * n = nums array length
 * m = num digits array length
 * time: O(n * m)
 * space: O(n)
 * 
 * @param {number[]} nums 
 * @returns {number[]}
 */
function filterLucky(nums) {
    return nums.filter((num) => {
        const strNumDigits = String(num).split("");
        const strNumDigitsHasASeven = strNumDigits.includes("7");

        if (strNumDigitsHasASeven) return true;

        return false;
    });
}

console.log( filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]) ); // [7,70,17]
