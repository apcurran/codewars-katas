"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {string} s 
 * @returns {string} "{char}{charCount}"
 */
function distSameLetter(s) {
    let largestChar = "";
    let largestCharDifference = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const lastCharPosition = s.lastIndexOf(char);
        const charPositionsDifference = lastCharPosition - i + 1; // add 1 since 0-based
        
        if (charPositionsDifference > largestCharDifference) {
            largestChar = char;
            largestCharDifference = charPositionsDifference;
        }
    }

    return `${largestChar}${largestCharDifference}`;
}

console.log(distSameLetter("fffffahhhhhhaaahhhhbhhahhhhabxx")); // "a23"
