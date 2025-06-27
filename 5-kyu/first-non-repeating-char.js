"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str
 * @returns {string}
 */
function firstNonRepeatingLetter(str) {
    const nonRepeatChar = str
        .split("")
        .find((char) => {
            const myRegex = new RegExp(char, "gi");

            return str.match(myRegex).length === 1;
        });
    
    return nonRepeatChar ? nonRepeatChar : "";
}

console.log( firstNonRepeatingLetter("stress") ); // "t"
console.log( firstNonRepeatingLetter("moonmen") ); // "e"
console.log( firstNonRepeatingLetter("sTreSS") ); // "T"
