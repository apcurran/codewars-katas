"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 *
 * @param {Array} arr
 * @param {number} n
 * @returns {Array}
 */
function rotate(arr, n) {
    let results = arr.slice();
    const nMod = n % results.length;

    for (let i = 0; i < Math.abs(nMod); i++) {
        if (n > 0) {
            const removedElem = results.pop();
            results.unshift(removedElem);
        } else {
            const removedElem = results.shift();
            results.push(removedElem);
        }
    }

    return results;
}

const data = [1, 2, 3, 4, 5];
console.log(rotate(data, 2)); // [4, 5, 1, 2, 3]
console.log(rotate(data, 0)); // [1, 2, 3, 4, 5]
console.log(rotate(data, -3)); // [4, 5, 1, 2, 3]
