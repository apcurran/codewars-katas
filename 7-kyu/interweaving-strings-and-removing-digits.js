"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} s1
 * @param {string} s2
 * @returns {string}
 */
function interweave(s1, s2) {
    const digits = "0123456789";
    let result = "";

    for (let i = 0; i < s1.length; i++) {
        let s1Char = "";
        let s2Char = "";

        // remove digits and undefined
        if (s1[i] && !digits.includes(s1[i])) {
            s1Char = s1[i];
        }

        if (s2[i] && !digits.includes(s2[i])) {
            s2Char = s2[i];
        }

        result += s1Char + s2Char;
    }

    return result;
}

console.log(interweave("hlo", "el")); // "hello"
console.log(interweave("h3lo", "el4")); // "hello"
