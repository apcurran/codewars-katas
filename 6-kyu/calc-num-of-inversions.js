"use strict";

/**
 * @param {number[]} arr
 * @returns {number}
 */
function countInversions(arr) {
    let numOfInversions = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]; // swap vals
                numOfInversions++;
            }
        }
    }

    return numOfInversions;
}

console.log(countInversions([1, 2, 3, 4])); // 0 inversions
console.log(countInversions([1, 3, 2, 4])); // 1 inversion: 2 and 3
console.log(countInversions([4, 1, 2, 3])); // 3 inversions: 4 and 1, 4 and 2, 4 and 3
