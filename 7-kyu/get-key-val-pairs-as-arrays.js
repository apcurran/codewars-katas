"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {object} data
 * @returns {any[][]}
 */
function keysAndValues(data) {
    const keysArr = Object.keys(data);
    const valsArr = Object.values(data);

    return [keysArr, valsArr];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 })); // [['a', 'b', 'c'], [1, 2, 3]]
