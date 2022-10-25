"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function maxSequence(arr) {
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let localSum = 0;

        for (let j = i; j < arr.length; j++) {
            // calc sum
            const currNum = arr[j];
            localSum += currNum;

            maxSum = Math.max(maxSum, localSum);
        }
    }

    return maxSum;
}

console.log( maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) ); // [4, -1, 2, 1] -> 6
console.log( maxSequence([0]) ); // [] -> 0
