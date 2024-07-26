"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 */
function unique(arr) {
    return arr.filter(function getUniqueValues(num, i, currentArray) {
        return currentArray.indexOf(num) === i;
    });
}

console.log(unique([1,1,1,2,2,3])); // [1, 2, 3]
