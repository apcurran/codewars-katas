"use strict";

/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} s 
 * @returns {number} score sum
 */
function lettersToNumbers(s) {
    const isCharLower = /[a-z]/;
    const isCharUpper = /[A-Z]/;
    const isDigit = /\d/;
    let scoreSum = 0;

    for (let char of s) {
        if (isCharLower.test(char)) {
            scoreSum += char.charCodeAt(0) - 96;
        } else if (isCharUpper.test(char)) {
            scoreSum += (char.charCodeAt(0) - 64) * 2;
        } else if (isDigit.test(char)) {
            scoreSum += Number(char);
        }
    }

    return scoreSum;
}

console.log(lettersToNumbers("I Love You")); // 170
console.log(lettersToNumbers("ILoveYou")); // 170
console.log(lettersToNumbers("ARE YOU HUNGRY?")); // 356
