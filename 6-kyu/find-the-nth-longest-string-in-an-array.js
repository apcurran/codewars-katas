"use strict";

/**
 * solution 1 -- custom sort comparator func
 * time: O(n * log n)
 * space: O(n)
 *
 * @param {string[]} arr
 * @param {number} n 1-based indexing
 * @returns {string}
 */
function longest(arr, n) {
    const sortedArr = arr
        .map(function storeStrAndIndex(str, index) {
            return {
                str,
                index,
            };
        })
        .sort(function sortLengthThenOriginalOrder(objA, objB) {
            // same length? sort by original order
            if (objA.str.length === objB.str.length) {
                return objA.index - objB.index;
            } else {
                // otherwise, sort by length
                return objB.str.length - objA.str.length;
            }
        });

    return sortedArr[n - 1].str;
}

console.log(longest(["Hello", "World", "Codewars", "Katas"], 3)); // "World"
