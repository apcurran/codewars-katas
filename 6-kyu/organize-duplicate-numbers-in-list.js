"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @returns {number[][]}
 */
function group(arr) {
    let results = [];

    for (let num of arr) {
        const existingNumDuplicates = results.find((tuple) => tuple[0] === num);
        
        if (existingNumDuplicates) {
            existingNumDuplicates.push(num);
        } else {
            results.push([num]);
        }
    }

    return results;
}

console.log(group([3, 2, 6, 2, 1, 3])); // [[3, 3], [2, 2], [6], [1]]
