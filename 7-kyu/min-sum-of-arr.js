"use strict";

/**
 * solution 1 -- iterative
 * time: O(n * log n)
 * space: O(n)
 *
 * @param {number[]} arr
 * @returns {number}
 */
function minSum(arr) {
    // sort list small -> large
    const smallToLargeArr = [...arr].sort((a, b) => a - b);
    let minimalSum = 0;

    // iterate through first half of list
    for (let i = 0; i < smallToLargeArr.length / 2; i++) {
        const smallerNum = smallToLargeArr[i];
        const largerNum = smallToLargeArr[smallToLargeArr.length - i - 1];
        // for each smallest num (at beginning) mult. by largest num (at end)
        const minProd = smallerNum * largerNum;
        // add prod to overall sum
        minimalSum += minProd;
    }

    return minimalSum;
}

console.log(minSum([5, 4, 2, 3])); // 22
console.log(minSum([12, 6, 10, 26, 3, 24])); // 342
