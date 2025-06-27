"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function peakAndValley(arr) {
    let results = [];

    for (let i = 3; i < arr.length - 3; i++) {
        const currentValue = arr[i];

        // if num is smaller than 3 to the left and right add to results (valley)
        if (
            currentValue < arr[i - 3] &&
            currentValue < arr[i - 2] &&
            currentValue < arr[i - 1] &&
            currentValue < arr[i + 1] &&
            currentValue < arr[i + 2] &&
            currentValue < arr[i + 3]
        ) {
            results.push(currentValue);
        }

        // if num is larger than 3 to the left and right add to results (peak)
        if (
            currentValue > arr[i - 3] &&
            currentValue > arr[i - 2] &&
            currentValue > arr[i - 1] &&
            currentValue > arr[i + 1] &&
            currentValue > arr[i + 2] &&
            currentValue > arr[i + 3]
        ) {
            results.push(currentValue);
        }
    }

    return results;
}

console.log(
    peakAndValley([
        10, 20, 30, 40, 30, 20, 10, 11, 12, 13, 14, 15, 16, 15, 14, 13,
    ]),
);
// [40,10,16]
console.log(peakAndValley([50, 84, 49, 47, 80, 87, 87, 53, 76, 30, 10]));
// [47]
