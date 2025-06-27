"use strict";

/**
 * solution 1
 * n = length of wordsList
 * m = length of characters in currentWord
 * time: O(n * m)
 *
 * @param {string} str
 * @returns {string}
 */
function stringTransformer(str) {
    const wordsList = str.split(" ");
    let result = [];

    for (let i = wordsList.length - 1; i >= 0; i--) {
        const currentWord = wordsList[i];
        let adjustedWordCasing = "";

        for (let char of currentWord) {
            if (char === char.toUpperCase()) {
                adjustedWordCasing += char.toLowerCase();
            } else {
                adjustedWordCasing += char.toUpperCase();
            }
        }

        result.push(adjustedWordCasing);
    }

    return result.join(" ");
}

console.log(stringTransformer("Example Input")); // "iNPUT eXAMPLE"
