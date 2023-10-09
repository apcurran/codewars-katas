"use strict";

/**
 * solution 1
 * time: O(n + m)
 * space: O(n + m)
 * 
 * @param {string} s1 
 * @param {string} s2 
 * @returns {boolean}
 */
function compare(s1, s2) {
    const s1Sum = s1 === null ? 0 : sumCharCodes(s1);
    const s2Sum = s2 === null ? 0 : sumCharCodes(s2);

    return s1Sum === s2Sum;
}

/**
 * @param {string} str 
 * @returns {number}
 */
function sumCharCodes(str) {
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let charCodesSum = 0;

    for (let char of str) {
        const upperChar = char.toUpperCase();

        // not a letter
        if (!alpha.includes(upperChar)) {
            charCodesSum = 0;

            break;
        }

        const upperCharCode = upperChar.charCodeAt(0);
        charCodesSum += upperCharCode;
    }

    return charCodesSum;
}

console.log(compare("AD", "BC")); // true
console.log(compare("AD", "DD")); // false
console.log(compare("gf", "FG")); // true
console.log(compare("!!", "7476")); // true
