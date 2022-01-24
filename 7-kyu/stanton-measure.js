"use strict";

/**
 * The Stanton measure of an array is computed as follows:
 * Count the number of 1s in the array.
 * Let this count be n.
 * The Stanton measure is the number of times that n appears in the array.
 * 
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {number[]} arr
 * @returns {number} - stanton measure of arr
 */
function stantonMeasure(arr) {
    let numCache = new Map();

    for (let num of arr) {
        if (numCache.has(num)) {
            const newCount = numCache.get(num) + 1;
            numCache.set(num, newCount);
        } else {
            numCache.set(num, 1);
        }
    }

    const n = numCache.get(1);

    for (let [key, val] of numCache) {
        if (key === n) return val;
    }

    // default
    return 0;
}

console.log( stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]) ); // 3
console.log( stantonMeasure([-13, 1]) ); // 1
