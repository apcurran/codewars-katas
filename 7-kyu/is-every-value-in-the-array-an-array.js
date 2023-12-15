"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {any[]} arr 
 * @returns {boolean}
 */
function arrCheck(arr) {
    return arr.every(function isArray(value) {
        return Array.isArray(value);
    });
}

console.log(arrCheck([[1], [2]])); // true
console.log(arrCheck([{1:1}, {2:2}])); // false
