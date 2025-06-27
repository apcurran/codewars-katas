"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} s
 * @returns {string}
 */
function testit(s) {
    let str = "";

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        const nextChar = s[i + 1];
        const lastIndex = s.length - 1;

        if (nextChar === " " || i === lastIndex) {
            str += currentChar.toUpperCase();
        } else {
            str += currentChar;
        }
    }

    return str;
}

console.log(testit("")); // ""
console.log(testit("a")); // "A"
console.log(testit("a a")); // "A A"
console.log(testit("a b c")); // "A B C"
