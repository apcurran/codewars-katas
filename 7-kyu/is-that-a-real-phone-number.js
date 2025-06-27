"use strict";

/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(n) -- string.replaceAll() creates a new string
 *
 * @param {string} str
 * @returns {"In with a chance"|"Plenty more fish in the sea"}
 */
function validateNumber(str) {
    const noDashes = str.replaceAll("-", "");
    // (?:) non-capturing group (does not need to store the reference for a .match() call later)
    // this improves performance by not memorizing a capture group ref that I do not need for regex.test() to work
    const validPhoneNumberRegex = /^(?:07\d{9}|\+447\d{9})$/;

    return validPhoneNumberRegex.test(noDashes)
        ? "In with a chance"
        : "Plenty more fish in the sea";
}

console.log(validateNumber("07454876120")); // 'In with a chance'
console.log(validateNumber("0754876120")); // 'Plenty more fish in the sea'
console.log(validateNumber("0745-487-61-20")); // 'In with a chance'
console.log(validateNumber("+447535514555")); // 'In with a chance'
