"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function maxProduct(arr) {
    let largestValue = -Infinity;

    for (let value of arr) {
        if (value > largestValue) {
            largestValue = value;
        }
    }

    let secondLargestValue = -Infinity;

    for (let value of arr) {
        if (value > secondLargestValue && value < largestValue) {
            secondLargestValue = value;
        }
    }

    return largestValue * secondLargestValue;
}

console.log( maxProduct([2, 1, 5, 0, 4, 3]) ); // 5 * 4 => 20
console.log( maxProduct([7, 8, 9]) ); // 9 * 8 => 72
