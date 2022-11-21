"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number} val 
 * @returns {number}
 */
function nextPal(val) {
    let palNum = val + 1;

    // if num is not a palindrome, add one to num
    while (!isPalindrome(palNum)) {
        palNum++;
    }

    return palNum;
}

/**
 * @param {number} num 
 * @returns {boolean}
 */
function isPalindrome(num) {
    const numStrArr = [...String(num)];
    let resNumStr = "";

    for (let i = numStrArr.length - 1; i >= 0; i--) {
        resNumStr += numStrArr[i];
    }

    return Number(resNumStr) === num;
}

console.log(nextPal(11)); // 22
console.log(nextPal(188)); // 191