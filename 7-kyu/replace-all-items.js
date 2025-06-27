"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {array|string} seq
 * @param {number} find
 * @param {number} replace
 * @returns {array|string}
 */
function replaceAll(seq, find, replace) {
    let results = [];

    for (let i = 0; i < seq.length; i++) {
        const current = seq[i];

        if (current === find) {
            results.push(replace);
        } else {
            results.push(current);
        }
    }

    if (typeof seq === "string") {
        return results.join("");
    } else {
        return results;
    }
}

console.log(replaceAll([], 1, 2)); // []
console.log(replaceAll([1, 2, 2], 1, 2)); // [2, 2, 2]
