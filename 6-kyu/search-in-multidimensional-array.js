"use strict";

// /**
//  * solution 1 -- flatten array proto method
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {array} arr
//  * @param {string} value
//  * @returns {boolean}
//  */
// function locate(arr, value) {
//     const flattenedValues = arr.flat(Infinity);

//     return flattenedValues.includes(value);
// }

/**
 * solution 2 -- recursion
 * time: O(n)
 * space: O(d) -- depth of nesting
 *
 * @param {array} arr
 * @param {string} value
 * @returns {boolean}
 */
function locate(arr, value) {
    for (let elem of arr) {
        if (elem === value) return true;

        if (Array.isArray(elem) && locate(elem, value)) {
            return true;
        }
    }

    return false;
}

console.log(locate(["a", "b", ["c", "d", ["e"]]], "e")); // true
console.log(locate(["a", "b", ["c", "d", ["e"]]], "a")); // true
console.log(locate(["a", "b", ["c", "d", ["e"]]], "f")); // false
