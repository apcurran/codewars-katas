"use strict";

/**
 * solution 1
 * time: O(n^2 * log n) -- O(n) operation within n * log n sort func
 * space: O(n)
 *
 * @param {string} dancingBrigade
 * @returns {string}
 */
function findChildren(dancingBrigade) {
    const alphaStr = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

    return dancingBrigade
        .split("")
        .sort((a, b) => alphaStr.indexOf(a) - alphaStr.indexOf(b))
        .join("");
}

console.log(findChildren("beeeEBb")); // "BbbEeee"
