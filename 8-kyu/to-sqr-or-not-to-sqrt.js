"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function squareOrSquareRoot(arr) {
    return arr.map((num) => {
        const sqrt = Math.sqrt(num);
        const hasSqrt = Number.isInteger(sqrt);

        if (hasSqrt) return sqrt;

        return num * num;
    });
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1])); // [2,9,3,49,4,1]
