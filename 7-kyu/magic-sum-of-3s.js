"use strict";

/**
 * solution 1
 * n = numbers length
 * m = num length (digits)
 * time: O(n * m)
 * space: O(m)
 * 
 * @param {number[]} numbers 
 * @returns {number} sum
 */
function magicSum(numbers) {
    // iterate nums
    let sum = 0;

    for (let num of numbers) {
        // if num is odd & num has a 3 digit somewhere,
            // add to sum
        if (num % 2 === 1 && String(num).includes("3")) {
            sum += num;
        }
    }

    return sum;
}

console.log(magicSum([3, 12, 5, 8, 30, 13])); // 16 (3 + 13)
