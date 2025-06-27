"use strict";

/**
 * solution 1 -- reverse str iteration
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {boolean}
 */
function palindrome(str) {
    // disregard non-alphanumberic chars
    // case insensitive
    const alphaNumLowerStr = str.replace(/[^\w]/g, "").toLowerCase();
    let revvedAlphaNumStr = "";

    for (let i = alphaNumLowerStr.length - 1; i >= 0; i--) {
        revvedAlphaNumStr += alphaNumLowerStr[i];
    }

    return alphaNumLowerStr === revvedAlphaNumStr;
}

console.log(palindrome("Amore, Roma")); // true
console.log(palindrome("A man, a plan, a canal: Panama")); // true
console.log(palindrome("No 'x' in 'Nixon'")); // true
console.log(palindrome("Abba Zabba, you're my only friend")); // false
