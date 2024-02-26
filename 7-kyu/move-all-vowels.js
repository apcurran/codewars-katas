"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} input 
 * @returns {string}
 */
function moveVowel(input) {
    const vowels = "aeiou";
    let seenVowels = "";
    let result = "";

    for (let char of input) {
        if (vowels.includes(char)) {
            // add vowel to list
            seenVowels += (char);
        } else {
            // add to result
            result += char;
        }
    }

    return result + seenVowels;
}

console.log(moveVowel("day")); // "dya"
console.log(moveVowel("apple")); // "pplae"
