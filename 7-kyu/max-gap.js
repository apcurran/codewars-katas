"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number[]} numbers 
 * @returns {number}
 */
function maxGap(numbers) {
    const sortedNums = [...numbers].sort((a, b) => a - b);
    let largestDifference = -Infinity;

    for (let i = 0; i < sortedNums.length - 1; i++) {
        const currentNum = sortedNums[i];
        const nextNum = sortedNums[i + 1];
        const numsDifference = Math.abs(currentNum - nextNum);
        largestDifference = Math.max(largestDifference, numsDifference);
    }

    return largestDifference;
}

console.log( maxGap([13,10,2,9,5]) ); // 4
