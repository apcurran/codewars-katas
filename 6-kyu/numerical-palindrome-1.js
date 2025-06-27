"use strict";

/**
 * solution 1 -- two pointers
 * time: O(n)
 * space: O(n)
 *
 * @param {number} num
 * @returns {boolean|"Not valid"}
 */
function palindrome(num) {
    if (num < 0 || !Number.isInteger(num)) {
        return "Not valid";
    }

    const strNum = String(num);
    let left = 0;
    let right = strNum.length - 1;

    while (left < right) {
        const leftValue = strNum[left];
        const rightValue = strNum[right];

        if (leftValue !== rightValue) return false;

        left++;
        right--;
    }

    return true;
}

console.log(palindrome(2332)); // true
