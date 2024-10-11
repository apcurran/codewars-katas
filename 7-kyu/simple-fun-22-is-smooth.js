"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {number[]} arr 
 * @returns {boolean}
 */
function isSmooth(arr) {
    if (arr.length % 2 === 1) {
        // odd length
        const leftValue = arr[0];
        const middleIndex = Math.floor(arr.length / 2);
        const middleValue = arr[middleIndex];
        const rightValue = arr.at(-1);

        if (leftValue === rightValue &&
            leftValue === middleValue) {
            return true;
        }
    } else {
        // even length
        const leftValue = arr[0];
        const middle1Index = Math.floor(arr.length / 2) - 1;
        const middle1Value = arr[middle1Index];
        const middle2Index = Math.floor(arr.length / 2);
        const middle2Value = arr[middle2Index];
        const middleValuesSum = middle1Value + middle2Value;
        const rightValue = arr.at(-1);

        if (leftValue === rightValue &&
            leftValue === middleValuesSum
        ) {
            return true;
        }
    }

    return false;
}

console.log(isSmooth([7, 2, 2, 5, 10, 7])); // true
console.log(isSmooth([-12, 34, 40, -5, -12, 4, 0, 0, -12])); // true
