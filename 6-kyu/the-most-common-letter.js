"use strict";

/**
 * solution 1 -- hashmap
 * n = str length
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @param {string} letter 
 * @returns {string}
 */
function replaceCommon(str, letter) {
    let letterFrequencies = new Map();

    for (let char of str) {
        // skip spaces
        if (char === " ") continue;

        const previousLetterFrequency = letterFrequencies.get(char) || 0;
        letterFrequencies.set(char, previousLetterFrequency + 1);
    }

    // get biggest frequency which shows up first (if more than 1 are the same count)
    let mostCommonLetter = "";
    let mostCommonLetterFrequency = 0;

    for (let [letter, frequency] of letterFrequencies) {
        if (frequency > mostCommonLetterFrequency) {
            mostCommonLetter = letter;
            mostCommonLetterFrequency = frequency;
        }
    }

    // update str to replace all most common char with given letter var
    return str.replaceAll(mostCommonLetter, letter);
}

console.log(replaceCommon("my mom loves me as never did", "t")); // 'ty tot loves te as never did'
