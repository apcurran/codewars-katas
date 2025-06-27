"use strict";

/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(1)
 *
 * @param {string} identifier
 * @returns {boolean}
 */
function isValid(identifier) {
    if (identifier.length < 1) return false;

    return /^[a-z_$][a-z_$0-9]*$/i.test(identifier);
}

console.log(isValid("i")); // true
console.log(isValid("wo_rd")); // true
console.log(isValid("b2h")); // true
console.log(isValid("1i")); // false
console.log(isValid("wo rd")); // false
console.log(isValid("!b2h")); // false
