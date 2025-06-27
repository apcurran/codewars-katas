"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 *
 * @param {number[]} arr
 * @returns {number}
 */
function solve(arr) {
    arr.sort(function sortAsc(a, b) {
        return a - b;
    });
    let sum = 1; // default smallest

    for (let i = 0; i < arr.length && arr[i] <= sum; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(solve([1, 2, 8, 7])); // 4
console.log(solve([4, 1, 2, 3, 12])); // 11
console.log(solve([2, 3, 2, 3, 4, 2, 12, 3])); // 1
