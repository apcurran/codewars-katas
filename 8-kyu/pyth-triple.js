"use strict";

/**
 * solution 1
 * time: O(n * log n) -> technically inputs don't change so O(1) in a way
 * space: O(1)
 * 
 * @param {number[]} nums 
 * @returns {boolean}
 */
function isPythagoreanTriple(nums) {
    nums.sort((a, b) => a - b);
    const [a, b, c] = nums;
    const squaresSum = (a * a) + (b * b);

    return squaresSum === c * c;
}

console.log( isPythagoreanTriple([3, 4, 5]) ); // true
console.log( isPythagoreanTriple([3, 5, 9]) ); // false
