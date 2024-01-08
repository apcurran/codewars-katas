"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} str 
 * @returns {"Throw Up"|"No Problem"}
 */
function seaSick(str) {
    if (str.length <= 1) return "No Problem";

    const SICKNESS_AMOUNT = .2 * str.length;
    let changesCount = 0;

    for (let i = 1; i < str.length; i++) {
        const currentChar = str[i];
        const previousChar = str[i - 1];

        if (currentChar !== previousChar) {
            changesCount++;
        }
    }

    return changesCount > SICKNESS_AMOUNT ? "Throw Up" : "No Problem";
}

console.log(seaSick("~")); // "No Problem"
console.log(seaSick("_~~~~~~~_~__~______~~__~~_~~")); // "Throw Up"
console.log(seaSick("______~___~_")); // "Throw Up"