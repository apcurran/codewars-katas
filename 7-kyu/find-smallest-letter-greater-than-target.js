"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string[]} letters
 * @param {string} target
 * @return {string}
 */
function nextGreatestLetter(letters, target) {
    // get charCode of target
    const targetCharCode = target.charCodeAt(0);
    // iterate letters list
    for (let letter of letters) {
        const currentLetterCharCode = letter.charCodeAt(0);
        // if so, return current letter
        if (currentLetterCharCode > targetCharCode) {
            return letter;
        }
    }
    // after checking all letters and none work,
    // return the first letter of list
    return letters[0];
}

console.log( nextGreatestLetter(["c", "f", "j"], "a") ); // "c"
console.log( nextGreatestLetter(["c", "f", "j"], "c") ); // "f"
console.log( nextGreatestLetter(["x", "x", "y", "y"], "z") ); // "x"