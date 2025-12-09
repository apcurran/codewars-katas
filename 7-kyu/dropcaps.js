"use strict";

/**
 * solution 1 -- regex
 * time: O(n * m)
 * space: O(n + m)
 *
 * @param {string} str
 * @returns {string}
 */
function dropCap(str) {
    return str.replace(/\b\w{3,}\b/g, function capitalizeFirstLetterLowerRest(word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
}

console.log(dropCap("apple")); // "Apple"
console.log(dropCap("one   space")); // "One   Space"
