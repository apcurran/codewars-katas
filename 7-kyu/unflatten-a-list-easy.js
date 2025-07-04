"use strict";

/**
 * solution 1
 * n = flatArray length
 * time: O(n) -- at most all elems will be collected once into results
 * space: O(n)
 *
 * @param {number[]} flatArray
 * @returns {(number | number[])[]}
 */
function unflatten(flatArray) {
    let results = [];

    for (let i = 0; i < flatArray.length; i++) {
        const value = flatArray[i];

        if (value <= 2) {
            results.push(value);
        } else {
            const xLengthChunk = flatArray.slice(i, i + value);
            results.push(xLengthChunk);
            i += value - 1;
        }
    }

    return results;
}

console.log(unflatten([1, 4, 5, 2, 1, 2, 4, 5, 2, 6, 2, 3, 3]));
// [1, [4,5,2,1], 2, [4,5,2,6], 2, [3, 3] ]
