"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {string} dna 
//  * @returns {string}
//  */
// function reverseComplement(dna) {
//     const reverseSequence = dna.split("").reverse();
//     let results = "";

//     for (let char of reverseSequence) {
//         if (char === "C") {
//             results += "G";
//         } else if (char === "G") {
//             results += "C";
//         } else if (char === "A") {
//             results += "T";
//         } else if (char === "T") {
//             results += "A";
//         } else {
//             return "Invalid sequence";
//         }
//     }

//     return results;
// }

/**
 * solution 2 -- optimized
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} dna 
 * @returns {string}
 */
function reverseComplement(dna) {
    let results = "";

    for (let i = dna.length - 1; i >= 0; i--) {
        const char = dna[i];

        if (char === "C") {
            results += "G";
        } else if (char === "G") {
            results += "C";
        } else if (char === "A") {
            results += "T";
        } else if (char === "T") {
            results += "A";
        } else {
            return "Invalid sequence";
        }
    }

    return results;
}

console.log(reverseComplement("TTCCGGAA")); // "TTCCGGAA"
console.log(reverseComplement("GACTGACTGTA")); // "TACAGTCAGTC"
console.log(reverseComplement("")); // ""
console.log(reverseComplement("XYZ")); // "Invalid sequence"

