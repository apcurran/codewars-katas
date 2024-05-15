"use strict";

/**
 * solution 1
 * time: O(n) -- lowerAlpha iteration is fixed at 26 characters
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function encode(str) {
    const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    for (let char of str) {
        const lowerChar = char.toLowerCase();

        if (lowerAlpha.includes(lowerChar)) {
            // 1-indexed position
            result += lowerAlpha.indexOf(lowerChar) + 1;
        } else {
            result += char;
        }
    }

    return result;
}

console.log(encode("abc")); // "123"
console.log(encode("ABCD")); // "1234"
console.log(encode("codewars")); // "315452311819"
console.log(encode("abc-#@5")); // "123-#@5"
