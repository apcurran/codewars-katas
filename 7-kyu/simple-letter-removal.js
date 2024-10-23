"use strict";

// /**
//  * solution 1
//  * time: O(k * n)
//  * space: O(n)
//  * 
//  * @param {string} str 
//  * @param {number} lettersToRemoveCount 
//  * @returns {string}
//  */
// function solve(str, lettersToRemoveCount) {
//     const alphaLetters = "abcdefghijklmnopqrstuvwxyz";
//     let alphaLettersPointer = 0;

//     while (lettersToRemoveCount > 0) {
//         if (str === "") return str;

//         // remove letter
//         // if there is an indexed alpha char, remove it
//         // otherwise, increment index until found char
//         while (!str.includes(alphaLetters[alphaLettersPointer])) {
//             alphaLettersPointer++;
//         }

//         const char = alphaLetters[alphaLettersPointer];
//         const charIndex = str.indexOf(char);
//         // get beginning
//         const beginningChunk = str.slice(0, charIndex);
//         // get ending
//         const endingChunk = str.slice(charIndex + 1);
//         // combine new str
//         const revisedStr = beginningChunk + endingChunk;
//         str = revisedStr;
//         // decrement letters counter
//         lettersToRemoveCount--;
//     }

//     return str;
// }

/**
 * solution 2 -- slight optimization
 * time: O(k * n)
 * space: O(n)
 * 
 * @param {string} str 
 * @param {number} lettersToRemoveCount 
 * @returns {string}
 */
function solve(str, lettersToRemoveCount) {
    const strLetters = str.split("");
    const alphaLetters = "abcdefghijklmnopqrstuvwxyz";
    let alphaLettersPointer = 0;

    while (lettersToRemoveCount > 0) {
        // exit early if all letters are removed
        if (strLetters.length === 0) return "";

        // if there is an indexed alpha char, remove it
        // otherwise, increment index until an alpha char is found
        while (!strLetters.includes(alphaLetters[alphaLettersPointer])) {
            alphaLettersPointer++;
        }

        const char = alphaLetters[alphaLettersPointer];
        const charIndex = strLetters.indexOf(char);
        // remove letter
        strLetters.splice(charIndex, 1);
        // decrement letters counter
        lettersToRemoveCount--;
    }

    return strLetters.join("");
}

console.log(solve("abracadabra", 2)); // 'brcadabra'
console.log(solve("abracadabra", 6)); // 'rcdbr'
console.log(solve("abracadabra", 50)); // ''
