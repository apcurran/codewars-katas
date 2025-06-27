"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function pairZeros(arr) {
    let prevZero = true;

    return arr.filter((num) => {
        if (num === 0) {
            prevZero = !prevZero;

            return !prevZero;
        }

        return true;
    });
}

console.log(pairZeros([1, 0, 1, 0, 2, 0, 0, 3, 0])); // [1,0,1,2,0,3,0]
