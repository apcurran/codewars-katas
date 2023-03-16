"use strict";

/**
 * solution 1
 * time: O(n^3)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {number}
 */
function longestPalindrome(str) {
    let longestPalindromeLength = 0;

    if (str.length === 0) return longestPalindromeLength;

    if (str.length === 1) return 1;

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            const miniStr = str.slice(i, j);
            
            if (isPalindrome(miniStr) && miniStr.length > longestPalindromeLength) {
                longestPalindromeLength = miniStr.length;
            }
        }
    }

    return longestPalindromeLength;
}

/**
 * @param {string} str 
 * @returns {boolean}
 */
function isPalindrome(str) {
    let reversedStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    return str === reversedStr;
}

console.log( longestPalindrome("a") ); // 1
console.log( longestPalindrome("aab") ); // 2
console.log( longestPalindrome("zzbaabcd") ); // 4
console.log( longestPalindrome("") ); // 0
