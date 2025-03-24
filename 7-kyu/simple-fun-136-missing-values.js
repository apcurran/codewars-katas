"use strict";

/**
 * solution 1 -- hashmap
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function missingValues(arr) {
    let valuesFrequencies = new Map();

    for (let num of arr) {
        const numPreviousCount = valuesFrequencies.get(num) || 0;
        valuesFrequencies.set(num, numPreviousCount + 1);
    }

    // get x (value freq -- 1)
    let x = null;
    // get y (value freq -- 2)
    let y = null;

    for (let [value, valueCount] of valuesFrequencies) {
        if (valueCount === 1) {
            x = value;
        } else if (valueCount === 2) {
            y = value;
        }
    }
    
    return x * x * y;
}

console.log(missingValues([1, 1, 1, 2, 2, 3])); // 18
console.log(missingValues([6, 5, 4, 100, 6, 5, 4, 100, 6, 5, 4, 200])); // 4000000
