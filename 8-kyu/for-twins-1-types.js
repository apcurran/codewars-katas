"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {any} variable 
 * @param {string} type 
 * @returns {boolean}
 */
function typeValidation(variable, type) {
    return typeof variable === type;
}

console.log( typeValidation(42, "number") ); // true
console.log( typeValidation("42", "number") ); // false
