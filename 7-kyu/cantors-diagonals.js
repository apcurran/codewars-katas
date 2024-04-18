"use strict";

/**
 * solution 1
 * n = nestedList rows
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[][]} nestedList 
 * @returns {number[]}
 */
function cantor(nestedList) {
    let results = [];

    for (let i = 0; i < nestedList.length; i++) {
        // get ith elem of current list
        const value = nestedList[i][i];
        // add opposite of ith list elem to results
        const oppositeValue = value === 1 ? 0 : 1;
        results.push(oppositeValue);
    }

    return results;
}

console.log(cantor([
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0]
])); // [1, 0, 1]
