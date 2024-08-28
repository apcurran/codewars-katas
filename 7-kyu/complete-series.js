"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 */
function completeSeries(arr) {
    // if a number repeats, return [0]
    const uniqueNums = new Set(arr);

    if (uniqueNums.size !== arr.length) {
        return [0];
    }

    const maxValue = Math.max(...arr);
    let results = [];

    for (let i = 0; i <= maxValue; i++) {
        results.push(i);
    }

    return results;
}

console.log(completeSeries([2,1])); // [0, 1, 2]
console.log(completeSeries([1, 4, 4, 6])); // [0, 1, 2, 3, 4, 5, 6]
console.log(completeSeries([1, 4, 6])); // [0]
