"use strict";

/**
 * solution 1 -- hashset and hashmap
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @param {string} ordering
 * @returns {string}
 */
function sortString(str, ordering) {
    const uniqueCharsOrder = new Set(ordering);
    let frequencies = new Map();

    for (let char of str) {
        if (uniqueCharsOrder.has(char)) {
            const previousCount = frequencies.get(char) || 0;
            frequencies.set(char, previousCount + 1);
        }
    }

    let result = "";

    // add chars in order to result str
    for (let char of uniqueCharsOrder) {
        if (frequencies.has(char)) {
            result += char.repeat(frequencies.get(char));
            frequencies.delete(char);
        }
    }

    // add leftover chars to result
    for (let char of str) {
        if (!uniqueCharsOrder.has(char)) {
            result += char;
        }
    }

    return result;
}

console.log(sortString("foos", "of")); // "oofs"
console.log(sortString("string", "gnirts")); // "gnirts"
console.log(sortString("banana", "abn")); // "aaabnn"
