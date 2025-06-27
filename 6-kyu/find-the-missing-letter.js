"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string[]} arr
 * @returns {string}
 */
function findMissingLetter(arr) {
    for (let i = 0; i < arr.length; i++) {
        const currChar = arr[i];
        const currCharCode = currChar.charCodeAt(0);
        const nextCharCode = arr[i + 1].charCodeAt(0);
        // skip end of arr
        if (i === arr.length - 1) return;
        // check if next char code is one more than curr code
        if (nextCharCode !== currCharCode + 1) {
            // if next char code is not one more than curr code
            // get PROPER next char
            return String.fromCharCode(currCharCode + 1);
        }
    }
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"])); // "e"
console.log(findMissingLetter(["O", "Q", "R", "S"])); // "P"
