"use strict";

// /**
//  * solution 1 -- regex
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {string} txt 
//  * @returns {string}
//  */
// function nerdify(txt) {
//     return txt
//             .replace(/a/gi, "4")
//             .replace(/e/gi, "3")
//             .replace(/l/g, "1");
// }

/**
 * solution 2 -- Map obj
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} text 
 * @returns {string}
 */
function nerdify(text) {
    const letterReplacements = new Map([
        ["a", "4"],
        ["A", "4"],
        ["e", "3"],
        ["E", "3"],
        ["l", "1"],
    ]);
    let updatedText = "";

    for (let letter of text) {
        if (!letterReplacements.has(letter)) {
            updatedText += letter;

            continue;
        }

        const adjustedLetter = letterReplacements.get(letter);
        updatedText += adjustedLetter;
    }

    return updatedText;
}

console.log( nerdify("Fundamentals") ); // "Fund4m3nt41s"
