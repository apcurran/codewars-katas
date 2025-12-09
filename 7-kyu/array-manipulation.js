"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(1) -- without counting return value space
 *
 * @param {number[]} array
 * @returns {number[]}
 */
function arrayManip(array) {
    let results = [];

    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i];
        let nextGreaterValue = Infinity;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] > currentValue) {
                nextGreaterValue = Math.min(nextGreaterValue, array[j]);
            }
        }

        // no greater element to the right,
        // default to -1 value
        if (nextGreaterValue === Infinity) {
            results.push(-1);
        } else {
            results.push(nextGreaterValue);
        }
    }

    return results;
}

console.log(arrayManip([8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28]));
// [18, 63, 80, 25, 32, 43, 80, 93, 80, 25, 93, -1, 28, -1, -1]
