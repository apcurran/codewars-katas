"use strict";

/**
 *
 * @param {string} str
 * @returns {string} - string with ? appended if not existing, otherwise return original str
 */
function ensureQuestion(str) {
    const myRegex = /\?$/g;
    const isQEnding = myRegex.test(str);

    if (isQEnding) return str;

    return `${str}?`;
}

console.log(ensureQuestion("No?"));
console.log(ensureQuestion("Yes"));
