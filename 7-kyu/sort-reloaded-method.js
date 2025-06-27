"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {"asc"|"desc"} dir 
 * @returns {number[]|false}
 */
Array.prototype.sortReloaded = function(dir) {
    const currentArr = this;

    if (dir && dir !== "asc" && dir !== "desc") {
        return false;
    }

    return currentArr.slice().sort((a, b) => {
        if (dir === "asc" || !dir) {
            return a - b;
        } else {
            return b - a;
        }
    });
};

console.log([3, 1, 5, 3, 6, 1, 2].sortReloaded("asc")); // [1,1,2,3,3,5,6]
