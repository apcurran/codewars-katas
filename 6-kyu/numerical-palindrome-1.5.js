"use strict";

/**
 * solution 1 -- two pointers
 * s = palindromesLength
 * m = currentNum digits length
 * time: O(s * m)
 * space: O(s + m)
 * 
 * @param {number} num 
 * @param {number} palindromesLength 
 * @returns {number[]|"Not valid"}
 */
function palindrome(num, palindromesLength) {
    // check for valid args
    if (typeof num !== "number" || num < 0 || typeof palindromesLength !== "number" || palindromesLength < 0) {
        return "Not valid";
    }

    let currentNum = num;
    let results = [];

    while (results.length !== palindromesLength) {
        const isValidPalindrome = isPalindrome(currentNum);

        if (isValidPalindrome) {
            results.push(currentNum);
        }

        currentNum++;
    }

    return results;
}

console.log(palindrome(6, 4)); // [11,22,33,44]

/**
 * @param {number} num 
 * @returns {boolean|void}
 */
function isPalindrome(num) {
    // single digit nums not considered valid palindromes
    if (num <= 9) {
        return;
    }

    const numStr = String(num);
    let left = 0;
    let right = numStr.length - 1;

    while (left < right) {
        if (numStr[left] === numStr[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }

    return true;
}
