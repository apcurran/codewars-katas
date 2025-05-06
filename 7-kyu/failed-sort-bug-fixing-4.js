"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {string} value 
 * @returns {string}
 */
function sortArray(value) {
    return value
        .split("")
        .sort((digitA, digitB) => digitA - digitB)
        .join("");
}
