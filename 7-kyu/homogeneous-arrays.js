"use strict";

/**
 * solution 1
 * n = outer array
 * m = subarray
 * time: O(n * m)
 * space: O(n * m)
 *
 * @param {array[]} arrays
 * @returns {array[]}
 */
function filterHomogenous(arrays) {
    return arrays.filter((arr) => {
        if (arr.length === 0) return false;

        const firstValueType = typeof arr[0];

        for (let i = 1; i < arr.length; i++) {
            const value = arr[i];

            if (typeof value !== firstValueType) {
                return false;
            }
        }

        return true;
    });
}

console.log(filterHomogenous([[1, 5, 4], ["a", 3, 5], ["b"], [], ["1", 2, 3]])); //  [[1, 5, 4], ['b']]
