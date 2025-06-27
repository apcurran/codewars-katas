"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {string} str
 * @returns {function}
 */
function makeLooper(str) {
    let currentCharIndex = -1;

    return function getNextChar() {
        // we reached the end of the string,
        // start back at the beginning
        if (currentCharIndex === str.length - 1) {
            currentCharIndex = -1;
        }

        currentCharIndex++;

        return str[currentCharIndex];
    };
}

const abc = makeLooper("abc");
console.log(abc()); // "a"
console.log(abc()); // "b"
console.log(abc()); // "c"
console.log(abc()); // "a"
