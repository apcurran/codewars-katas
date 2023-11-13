"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {Array} array1 
 * @param {Array} array2 
 * @returns {Array}
 */
function arrayMash(array1, array2) {
    let results = [];

    for (let i = 0; i < array1.length; i++) {
        const arr1Elem = array1[i];
        const arr2Elem = array2[i];
        results.push(arr1Elem, arr2Elem);
    }

    return results;
}

console.log(arrayMash( [1,2,3], ["a","b","c"])); // [1, 'a', 2, 'b', 3, 'c']
