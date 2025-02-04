"use strict";

/**
 * solution 1 -- recursion
 * l = nested level
 * n = arr length
 * time: O(n * max(l))
 * space: O(max(l)) -- callstack size for max level
 * 
 * @param {Array} arr 
 * @returns {number} sum
 */
function sumNestedNumbers(arr) {
    /**
     * @param {Array} arr 
     * @param {number} level 
     * @returns {void}
     */
    function getNestedLevel(arr, level) {
        for (let item of arr) {
            if (Array.isArray(item)) {
                getNestedLevel(item, level + 1);
            } else {
                const currentValue = item ** level;
                total += currentValue;
            }
        }
    }

    let total = 0;

    getNestedLevel(arr, 1);

    return total;
}


console.log(sumNestedNumbers([1, [2], 3, [4, [5]]])); // 149
