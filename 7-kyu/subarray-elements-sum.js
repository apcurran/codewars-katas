"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[][]} arrs 
 * @param {number=} defaultValue
 * @returns {number} sum
 */
function elementsSum(arrs, defaultValue = 0) {
    let sum = 0;

    for (let i = 0; i < arrs.length; i++) {
        const currentArr = arrs[i];
        const currentArrValue = currentArr[arrs.length - i - 1]; // 1-indexed
        
        if (currentArrValue !== undefined) {
            sum += currentArrValue;
        } else {
            sum += defaultValue;
        }
    }

    return sum;
}

console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], [9, 8, 7, 4]])); // 16
