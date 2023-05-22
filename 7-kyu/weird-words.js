"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function nextLetter(str) {
    let results = [];
    // iterate str
    for (let char of str) {
        // for each character, convert to charCode
        const characterCode = char.charCodeAt(0);
        // check if charcode is a letter
        if (characterCode >= 65 && characterCode <= 90 ||
            characterCode >= 97 && characterCode <= 122) {
            // if yes, increment by one
            const updatedCharacterCode = characterCode + 1;

            // larger than "Z"
            if (updatedCharacterCode === 91) {
                results.push("A");

                continue;
            }

            // larger than "z"
            if (updatedCharacterCode === 123) {
                results.push("a");

                continue;
            }
            // add string to array
            const char = String.fromCharCode(updatedCharacterCode);
            results.push(char);

            continue;
        }

        // not a letter
        results.push(char);
    }

    return results.join("");
}

console.log( nextLetter("Hello") ); // "Ifmmp"
console.log( nextLetter("zzZAaa") ); // "aaABbb"
console.log( nextLetter("My Name Is Zoo") ); // "Nz Obnf Jt App"