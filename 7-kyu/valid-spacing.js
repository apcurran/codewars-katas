"use strict";

/**
 *
 * @param {string} str - Given string to test for word followed by a space, then another word (no leading or trailing spaces).
 * @returns {boolean}
 */
function validSpacing(str) {
    const regex = /^([a-zA-z]+) ([a-zA-z]+)$/gi;

    return regex.test(str);
}

console.log(validSpacing("Hello World"));
console.log(validSpacing("Hello World "));
console.log(validSpacing("Hello Mr Bob"));
