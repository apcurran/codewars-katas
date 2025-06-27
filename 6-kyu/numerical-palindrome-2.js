"use strict";

/**
 * solution 1
 * n = num digits length
 * m = digitsChunk length
 * time: O(n^2 * m)
 * space: O(n + m)
 *
 * @param {number} num
 * @returns {boolean|"Not valid"}
 */
function palindrome(num) {
    if (!Number.isInteger(num) || num < 0) {
        return "Not valid";
    }

    // no single digit nums are valid
    if (num >= 0 && num <= 9) {
        return false;
    }

    const digitsStr = String(num).split("");

    for (let i = 0; i < digitsStr.length; i++) {
        for (let j = i; j < digitsStr.length; j++) {
            const digitsChunk = digitsStr.slice(i, j + 1);

            if (isPalindrome(digitsChunk)) {
                return true;
            }
        }
    }

    return false;
}

console.log(palindrome(5)); // false
console.log(palindrome(1221)); // true
console.log(palindrome(141221001)); // true
console.log(palindrome(1215)); // true
console.log(palindrome(1294)); // false

/**
 * @param {string[]} digits
 * @returns {boolean}
 */
function isPalindrome(digits) {
    if (digits.length === 1) return false;

    let left = 0;
    let right = digits.length - 1;

    while (left < right) {
        if (digits[left] !== digits[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}
