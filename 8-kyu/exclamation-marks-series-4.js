"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {string}
 */
function remove(str) {
    const removedMarks = str.replaceAll("!", "");

    return `${removedMarks}!`;
}

console.log(remove("Hi!!!")); // "Hi!"
console.log(remove("Hi! Hi!")); // "Hi Hi!"
