"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string[]} initialArray 
 * @param {number[]} sortingArray 
 * @returns {string[]}
 */
function sort(initialArray, sortingArray) {
    let results = [];

    for (let i = 0; i < initialArray.length; i++) {
        const currentValue = initialArray[i];
        const sortIndex = sortingArray[i];
        results[sortIndex] = currentValue;
    }

    return results;
}

console.log( sort(["x", "y", "z"], [1, 2, 0]) ); //  ['z', 'x', 'y']
