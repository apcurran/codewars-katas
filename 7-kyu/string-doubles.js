"use strict";

/**
 * solution 1 -- recursion
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function doubles(str) {
    for (let i = 0; i < str.length; i++) {
        const currLetter = str[i];
        const nextLetter = str[i + 1];

        if (currLetter === nextLetter) {
            // remove two adjacent chars
            const beforeLetters = str.slice(0, i);
            const afterLetters = str.slice(i + 2);
            const updatedStr = beforeLetters + afterLetters;

            return doubles(updatedStr);
        }
    }

    return str;
}

console.log(doubles("abbcccdddda")); // "aca"
