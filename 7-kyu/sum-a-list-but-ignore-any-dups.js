"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} numList
 * @returns {number}
 */
function sumNoDuplicates(numList) {
    const uniqueValues = new Map();

    for (let value of numList) {
        const previousValueCount = uniqueValues.get(value) || 0;
        uniqueValues.set(value, previousValueCount + 1);
    }

    let sum = 0;

    for (let [value, count] of uniqueValues) {
        if (count > 1) continue;

        sum += value;
    }

    return sum;
}

console.log(sumNoDuplicates([1, 1, 2, 3])); // 5
console.log(sumNoDuplicates([3, 4, 3, 6])); // 10
