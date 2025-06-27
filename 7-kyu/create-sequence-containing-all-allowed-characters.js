"use strict";

/**
 * solution 1
 * n = total regex chars identified
 * time: O(n) -- loop is constant time, but regex.test() is dependent upon regex chars identified
 * space: O(1) -- not including result space
 *
 * @param {RegExp} regex
 * @returns {string}
 */
function createSequence(regex) {
    if (!(regex instanceof RegExp)) {
        throw new Error("The given argument is not in a regex form.");
    }

    let result = "";

    for (let i = 0; i < 128; i++) {
        const asciiChar = String.fromCharCode(i);

        if (regex.test(asciiChar)) {
            result += asciiChar;
        }
    }

    return result;
}

console.log(createSequence(/[0-9A-F]/)); // "0123456789ABCDEF"
