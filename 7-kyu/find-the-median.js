"use strict";

/**
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function median(arr) {
    const sortedArr = [...arr].sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedArr.length / 2);

    if (sortedArr.length % 2 === 0) {
        // Even length arr, avg of two middle vals
        const upperVal = sortedArr[middleIndex];
        const lowerVal = sortedArr[middleIndex - 1];

        return (upperVal + lowerVal) / 2;
    }

    // Odd length arr, take middle val
    return sortedArr[middleIndex];
}

console.log(median([33, 99, 100, 30, 29, 50])); // 41.5
console.log(median([3, 2, 1])); // 2
console.log(median([3, 2, 1, 4, 6])); // 3