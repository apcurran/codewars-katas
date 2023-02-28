"use strict";

/**
 * solution 1 -- sort arr
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function findDup(arr) {
    const sortedNums = arr.sort((a, b) => a - b);

    for (let i = 0; i < sortedNums.length - 1; i++) {
        const currentNum = sortedNums[i];
        const nextNum = sortedNums[i + 1];

        if (currentNum === nextNum) return currentNum;
    }

    return -1;
}

console.log( findDup([1,3,2,5,4,5,7,6]) ); // 5
