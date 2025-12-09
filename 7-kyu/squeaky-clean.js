"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {Array} arr
 * @returns {Array} array with "", 0, and null removed
 */
function squeakyClean(arr) {
    return arr.filter(function removeNullLikeValues(value) {
        if (value === "" || value === null || value === 0 || value === undefined) {
            return false;
        } else {
            return true;
        }
    });
}

console.log(squeakyClean(["click1", "click2", null, "", "", "submitForm"]));
// ['click1', 'click2','submitForm']
