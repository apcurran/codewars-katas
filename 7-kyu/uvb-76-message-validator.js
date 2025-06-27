"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} message
 * @returns {boolean}
 */
function validate(message) {
    return /^MDZHB \d{2} \d{3} [A-Z]+ \d{2} \d{2} \d{2} \d{2}$/.test(message);
}

console.log(validate("Is this a right message?")); // false
console.log(validate("MDZHB 85 596 KLASA 81 00 02 91")); // true
console.log(validate("MDZHB 12 733 EDINENIE 67 79 66 32")); // true
console.log(validate("MDZHV 60 130 VATRUKH 58 89 54 54")); // false
