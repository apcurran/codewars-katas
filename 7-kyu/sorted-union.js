"use strict";

/**
 * solution 1
 * n = arrays length
 * m = array length
 * x = length of all nums
 * time: O(n * max(m))
 * space: O(x)
 * 
 * @param  {...number[]} arrays 
 * @returns {number[]}
 */
function uniteUnique(...arrays) {
    const allValues = arrays.flat(Infinity);
    const noDuplicatesSet = new Set(allValues);

    return [...noDuplicatesSet];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [1, 3, 2, 5, 4]
