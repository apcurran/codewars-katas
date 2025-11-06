/**
 * @param {string} str
 * @returns {boolean}
 */
function isValidHKPhoneNumber(str) {
    // must have only "xxxx xxxx" x being digits
    const onlyDigitsRegex = /^\d{4} \d{4}$/;

    return onlyDigitsRegex.test(str);
}

console.log(isValidHKPhoneNumber("1234 5678")); // true
console.log(isValidHKPhoneNumber("85748475")); // false

/**
 * @param {string} str
 * @returns {boolean}
 */
function hasValidHKPhoneNumber(str) {
    const containsValidPhoneRegex = /\d{4} \d{4}/;

    return containsValidPhoneRegex.test(str);
}

console.log(hasValidHKPhoneNumber("Hello, my phone number is 1234 5678")); // true
console.log(hasValidHKPhoneNumber("85748475 is definitely invalid")); // false
