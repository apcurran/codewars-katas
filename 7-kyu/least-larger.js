"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} arr
 * @param {number} i
 * @returns {number}
 */
function leastLarger(arr, i) {
    const iNum = arr[i];
    const largerNums = arr.filter((num) => num > iNum);
    const smallestLargerNum = Math.min(...largerNums);

    return arr.indexOf(smallestLargerNum);
}

console.log(leastLarger([4, 1, 3, 5, 6], 0)); // 3
console.log(leastLarger([4, 1, 3, 5, 6], 4)); // -1
console.log(leastLarger([1, 3, 5, 2, 4], 0)); // 3
