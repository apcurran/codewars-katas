"use strict";

/**
 * solution 1
 * n = keys array length
 * time: O(n)
 * space: O(n)
 *
 * @param {string[]} keys
 * @param {number[]} values
 * @returns {object}
 */
function createDict(keys, values) {
    let result = {};

    for (let i = 0; i < keys.length; i++) {
        // add key/val pair to result object
        // if the key does not have a corresponding value,
        // assign null as the val
        const key = keys[i];
        const val = values[i] === undefined ? null : values[i]; // null fallback if val is undefined
        result[key] = val;
    }

    return result;
}

console.log(createDict(["a", "b", "c", "d"], [1, 2, 3])); // {'a': 1, 'b': 2, 'c': 3, 'd': null}
console.log(createDict(["a", "b", "c"], [1, 2, 3, 4])); // {'a': 1, 'b': 2, 'c': 3}
