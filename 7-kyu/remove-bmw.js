"use strict";

/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {Error|string}
 */
function removeBMW(str) {
    if (typeof str !== "string") {
        throw new Error("This program only works for text.");
    }

    return str.replace(/b|m|w/gi, "");
}

console.log(removeBMW("bmwvolvoBMW")); // "volvo"

