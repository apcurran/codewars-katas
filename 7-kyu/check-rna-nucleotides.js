"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} sequence 
 * @returns {string}
 */
function checkNucleotides(sequence) {
    const validLetters = new Set(["A", "G", "C", "U"]);
    // iterate each char in string
    for (let i = 0; i < sequence.length; i++) {
        const char = sequence[i];
        // check if char does not exist in list of acceptable letters
        if (!validLetters.has(char)) {
            return `There is an invalid letter: ${char}. At position: ${i + 1}`;
        }
    }

    // if all pass, return "Valid Sequence: ${SEQUENCE}"
    return `Valid Sequence: ${sequence}`;
}

console.log( checkNucleotides("AUAUA") ); // "Valid Sequence: AUAUA"
console.log( checkNucleotides("GAUAB") ); // "There is an invalid letter: B. At position: 5"
