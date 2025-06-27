"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n) -- array copy with string.split() call
 *
 * @param {string} phrase
 * @returns {string}
 */
function makePassword(phrase) {
    const words = phrase.split(" ");
    let password = "";

    for (let word of words) {
        let firstLetter = word[0];
        const lowerFirstLetter = firstLetter.toLowerCase();
        // if first letter is "i", "o", or "s" (not capitalization sensitive)
        // replace letter with appropriate number
        if (lowerFirstLetter === "i") {
            firstLetter = "1";
        } else if (lowerFirstLetter === "o") {
            firstLetter = "0";
        } else if (lowerFirstLetter === "s") {
            firstLetter = "5";
        }

        password += firstLetter;
    }

    return password;
}

console.log(makePassword("Give me liberty or give me death")); // "Gml0gmd"
