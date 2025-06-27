"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @param {number} num
 * @returns {string}
 */
function truncateString(str, num) {
    if (str.length <= num) return str;

    if (num <= 3) return str.slice(0, num) + "...";

    return str.slice(0, num - 3) + "...";
}

console.log(truncateString("codewars", 9)); // 'codewars'
console.log(truncateString("codewars", 7)); // 'code...'
console.log(truncateString("codewars", 2)); // "co..."
