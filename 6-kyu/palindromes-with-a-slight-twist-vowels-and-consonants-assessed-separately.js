"use strict";

/**
 * solution 1 -- two pointers approach for helper func isPalindromeTest
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {"both"|"vowel"|"consonant"|"neither"}
 */
function palindrome(str) {
    const strConsonants = str.toLowerCase().replace(/[^bcdfghjklmnpqrstvwxyz]/g, "");
    const strVowels = str.toLowerCase().replace(/[^aeiou]/g, "");
    const isConsonantChunkPalindrome = isPalindromeTest(strConsonants);
    const isVowelChunkPalindrome = isPalindromeTest(strVowels);

    if (isConsonantChunkPalindrome && isVowelChunkPalindrome) {
        return "both";
    } else if (isConsonantChunkPalindrome) {
        return "consonant";
    } else if (isVowelChunkPalindrome) {
        return "vowel";
    } else {
        return "neither";
    }
}

/**
 * @param {string} str 
 * @returns {boolean}
 */
function isPalindromeTest(str) {
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        const leftChar = str[left];
        const rightChar = str[right];

        if (leftChar !== rightChar) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

console.log(palindrome("raCe car")); // "both"
console.log(palindrome("_inte 4")); // "neither"
console.log(palindrome("neither")); // "vowel"
