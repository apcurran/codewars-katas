"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number[]} numbers 
 * @param {number} threshold 
 * @returns {number}
 */
function minimumSteps(numbers, threshold) {
    const sortedAsc = [...numbers].sort(function ascendingOrder(a, b) {
        return a - b;
    });

    let smallestNumsSum = 0;

    for (let i = 0; i < sortedAsc.length; i++) {
        const num = sortedAsc[i];
        smallestNumsSum += num;

        if (smallestNumsSum >= threshold) {
            return i;
        }
    }

    return -1;
}

console.log(minimumSteps([4,6,3], 7)); // 1
console.log(minimumSteps([10,9,9,8], 17)); // 1
console.log(minimumSteps([8,9,10,4,2], 23)); // 3
console.log(minimumSteps([19,98,69,28,75,45,17,98,67], 464)); // 8
console.log(minimumSteps([4,6,3], 2)); // 0
