"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function alternateSqSum(arr) {
    if (arr.length === 0) return 0;

    let sumOfEvenPositionsSquared = 0;
    let sumOfOddPositions = 0;

    for (let i = 0; i < arr.length; i++) {
        const currentValue = arr[i];

        if (i % 2 !== 0) {
            // even POSITION
            const squaredValue = currentValue ** 2;
            sumOfEvenPositionsSquared += squaredValue;
        } else {
            sumOfOddPositions += currentValue;
        }
    }

    return sumOfEvenPositionsSquared + sumOfOddPositions;
}

console.log( alternateSqSum([11, 12, 13, 14, 15]) ); // 379
