"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} text 
 * @param {number} n 
 * @param {string} oldValue 
 * @param {string} newValue 
 */
function replaceNth(text, n, oldValue, newValue) {
    let counter = 0;
    let resStr = "";

    for (let letter of text) {
        if (letter !== oldValue || n <= 0) {
            resStr += letter;
            continue;
        }

        // incr counter for target
        counter++;
        // check if counter is divisible by n occurences
        const replacementLetter = counter % n === 0 ? newValue : oldValue;
        resStr += replacementLetter;
    }

    return resStr;
}

console.log( replaceNth("Vader said: No, I am your father!", 2, "a", "o") ); // "Vader soid: No, I am your fother!"
