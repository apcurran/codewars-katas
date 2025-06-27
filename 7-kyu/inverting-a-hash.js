"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {Object} hash
 * @returns {Object}
 */
function invertHash(hash) {
    let result = {};

    for (let key in hash) {
        const value = hash[key];
        result[value] = key;
    }

    return result;
}

console.log(invertHash({ a: "1", b: "2", c: "3" })); // { 1: 'a', 2: 'b', 3: 'c' }
