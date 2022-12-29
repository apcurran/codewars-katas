"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function pairs(arr) {
    let consecutivePairsCount = 0;

    for (let i = 0; i < arr.length; i += 2) {
        const currentNumber = arr[i];
        const nextNumber = arr[i + 1];

        if (nextNumber === undefined) break;

        const pairDifference = Math.abs(currentNumber - nextNumber);
        
        if (pairDifference === 1) {
            consecutivePairsCount++;
        }
    }

    return consecutivePairsCount;
}

console.log( pairs([1,2,5,8,-4,-3,7,6,5]) ); // 3
console.log( pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]) ); // 2
