"use strict";

/**
 * Solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} str
 * @returns {string}
 */
function printerError(str) {
    let errCounter = 0;

    for (let i = 0; i < str.length; i++) {
        const currCharCode = str.charCodeAt(i);

        if (currCharCode > 109) {
            errCounter++;
        }
    }

    return `${errCounter}/${str.length}`;
}

console.log(printerError("aaabbbbhaijjjm")); // "0/14"
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm")); // "8/22"
