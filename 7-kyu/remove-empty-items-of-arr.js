"use strict";

/**
 * solution 1
 * time: O(n^2) -- string.startsWith() call inside a filter loop
 * space: O(n)
 * 
 * @param {array} arr 
 * @returns {array}
 */
function clean(arr) {
    return arr.filter((val) => {
        if (val === ",") return false;

        if (typeof val === "string" && val.startsWith("<")) return false;

        return true;
    });
}

console.log( clean([1, 2,,,3, 4]) ); // [1, 2, 3, 4]
console.log( clean([1, 2, "<2 empty items>", 3, 4]) ); // [1, 2, 3, 4]
