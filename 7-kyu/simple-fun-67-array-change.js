"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(1)
 *
 * @param {number[]} arr
 * @returns {number}
 */
function arrayChange(arr) {
    let movesCounter = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        while (arr[i + 1] <= arr[i]) {
            // increment next elem
            arr[i + 1]++;
            movesCounter++;
        }
    }

    return movesCounter;
}

console.log(arrayChange([-1000, 0, -2, 0])); // 5
