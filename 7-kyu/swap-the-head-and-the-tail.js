"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function swapHeadAndTail(arr) {
    if (arr.length % 2 !== 0) {
        // odd length, get middle value and swap order of two halves
        const middleIndex = Math.floor(arr.length / 2);
        const middleValue = arr[middleIndex];
        const startingHalf = arr.slice(0, middleIndex);
        const endingHalf = arr.slice(middleIndex + 1);

        return [...endingHalf, middleValue, ...startingHalf];
    } else {
        // swap order of two halves
        const startingHalf = arr.slice(0, arr.length / 2);
        const endingHalf = arr.slice(arr.length / 2);

        return [...endingHalf, ...startingHalf];
    }
}

console.log(swapHeadAndTail([1, 2, 3, 4, 5])); // [ 4, 5, 3, 1, 2 ]
console.log(swapHeadAndTail([1, 2, -3, 4, 5, 6, -7, 8])); // [ 5, 6, -7, 8, 1, 2, -3, 4 ]
