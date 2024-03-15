"use strict";

/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} string 
 * @returns {string}
 */
function remove(string) {
    const [start, end = ""] = string.split(/(!+$)/);
    const startWithoutMarks = start.replace(/!/g, "");

    return `${startWithoutMarks}${end}`;
}

console.log(remove("Hi! Hi!")); // "Hi Hi!"
