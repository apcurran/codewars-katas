"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} arr
 * @returns {number} needed nums count
 */
function consecutive(arr) {
    const numsSet = new Set(arr);
    const minVal = Math.min(...arr);
    const maxVal = Math.max(...arr);
    let neededNumsCount = 0;

    for (let i = minVal + 1; i < maxVal; i++) {
        if (!numsSet.has(i)) neededNumsCount++;
    }

    return neededNumsCount;
}

console.log(consecutive([4, 8, 6])); // 2
console.log(consecutive([1, 2, 3, 4])); // 0
