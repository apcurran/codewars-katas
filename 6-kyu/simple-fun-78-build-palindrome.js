"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function buildPalindrome(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        const currentChunk = str.slice(i);

        if (isPalindrome(currentChunk)) {
            const reversedPriorChunk = str
                .split("")
                .slice(0, i)
                .reverse()
                .join("");

            result = `${str}${reversedPriorChunk}`;

            break;
        }
    }

    return result;
}

/**
 * @param {string} str 
 * @returns {boolean}
 */
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

console.log(buildPalindrome("abcdc")); // "abcdcba"
