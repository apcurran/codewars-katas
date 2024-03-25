"use strict";

// /**
//  * solution 1 -- charCodeAt method
//  * time: O(1)
//  * space: O(1)
//  * 
//  * @param {string} character 
//  * @returns {boolean}
//  */
// function isItLetter(character) {
//     const charCode = character.charCodeAt(0);
//     const isUppercaseLetter = charCode >= 65 && charCode <= 90;
//     const isLowercaseLetter = charCode >= 97 && charCode <= 122;

//     return isUppercaseLetter || isLowercaseLetter;
// }

/**
 * solution 2 -- regex
 * time: O(1)
 * space: O(1)
 * 
 * @param {string} character 
 * @returns {boolean}
 */
function isItLetter(character) {
    const isLetter = /[a-zA-Z]/i;

    return isLetter.test(character);
}

console.log(isItLetter("a")); // true
console.log(isItLetter("1")); // false
