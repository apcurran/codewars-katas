"use strict";

/**
 * solution 1
 * m = arr length
 * n = group arr length
 * time: O(m * n)
 * time: O(m + n)
 *
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
 */
function minValue(arr, n) {
    let results = [];

    for (let i = 0; i < arr.length - n + 1; i++) {
        const group = arr.slice(i, i + n);
        const minValue = Math.min(...group);
        results.push(minValue);
    }

    return results;
}

console.log(minValue([1, -2, 3, -4, 5, -6, 7, 8], 1)); // [1,-2,3,-4,5,-6,7,8]
console.log(minValue([1, -2, 3, -4, 5, -6, 7, 8], 2)); // [-2,-2,-4,-4,-6,-6,7]
console.log(minValue([1, -2, 3, -4, 5, -6, 7, 8], 3)); // [-2,-4,-4,-6,-6,-6]
console.log(minValue([1, -2, 3, -4, 5, -6, 7, 8], 4)); // [-4,-4,-6,-6,-6]
