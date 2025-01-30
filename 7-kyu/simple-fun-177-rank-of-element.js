"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} arr 
 * @param {number} targetIndex 
 * @returns {number}
 */
function rankOfElement(arr, targetIndex) {
    const targetValue = arr[targetIndex];
    let rank = 0;

    for (let i = 0; i < arr.length; i++) {
        const currentElemValue = arr[i];

        // before elements
        if (i < targetIndex && currentElemValue <= targetValue) {
            rank++;
        }

        // after elements
        if (i > targetIndex && currentElemValue < targetValue) {
            rank++; 
        }
    }

    return rank;
}

console.log(rankOfElement([2, 1, 2, 1, 2],2)); // 3
console.log(rankOfElement([2, 1, 2, 2, 2],2)); // 2
