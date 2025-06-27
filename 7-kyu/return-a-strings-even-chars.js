"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1) -- not including results
 *
 * @param {string} str
 * @returns {string[]|"invalid string"}
 */
function evenChars(str) {
    if (str.length < 2 || str.length > 100) return "invalid string";

    let evenValues = [];

    for (let i = 1; i < str.length; i += 2) {
        evenValues.push(str[i]);
    }

    return evenValues;
}

console.log(evenChars("abcdefghijklm")); // ["b", "d", "f", "h", "j", "l"]
console.log(evenChars("a")); // "invalid string"
