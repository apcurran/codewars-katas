"use strict";

/**
 * solution 1
 * n = s1 length
 * m = s2 length
 * time: O((n * log n) + (m * log m))
 * space: O(n + m)
 *
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
function sameEncryption(s1, s2) {
    const s1FirstLetter = s1[0];
    const s1LastLetter = s1.at(-1);
    const s1MiddleLettersCount = s1.length - 2;
    const s1DigitsSum = getDigitsSumUntilSingleDigit(
        String(s1MiddleLettersCount),
    );
    const s1Revised = `${s1FirstLetter}${s1DigitsSum}${s1LastLetter}`;

    const s2FirstLetter = s2[0];
    const s2LastLetter = s2.at(-1);
    const s2MiddleLettersCount = s2.length - 2;
    const s2DigitsSum = getDigitsSumUntilSingleDigit(
        String(s2MiddleLettersCount),
    );
    const s2Revised = `${s2FirstLetter}${s2DigitsSum}${s2LastLetter}`;

    return s1Revised === s2Revised;
}

console.log(sameEncryption("EbnhGfjklmjhgz", "Eabcz")); // true ("E3z" === "E3z")

/**
 * @param {string} strNum
 * @returns {string}
 */
function getDigitsSumUntilSingleDigit(strNum) {
    while (strNum.length > 1) {
        let digitsSum = 0;

        for (let digit of strNum) {
            digitsSum += Number(digit);
        }

        strNum = String(digitsSum);
    }

    return strNum;
}
