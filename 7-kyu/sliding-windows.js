"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n^2)
 *
 * @param {number} length
 * @param {number} offset
 * @param {number[]} list
 * @returns {number[][]}
 */
function myWindow(length, offset, list) {
    let results = [];

    if (length === 0) {
        results.push([]);
    }

    for (let i = 0; i < list.length; i += offset) {
        const chunk = list.slice(i, i + length);

        if (chunk.length !== length) {
            // exit early if not enough at the end to accomodate the length
            break;
        }

        results.push(chunk);
    }

    return results;
}

console.log(myWindow(2, 1, [0, 1, 2, 3, 4])); // [ [0,1], [1,2], [2,3], [3,4] ]
console.log(myWindow(2, 3, [0, 1, 2, 3, 4])); // [ [0,1], [3,4] ]
console.log(myWindow(0, 1, [0, 1, 2])); // [ [], [], [], [] ]
