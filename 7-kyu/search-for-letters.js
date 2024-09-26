"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} str 
 * @returns {string}
 */
function change(str) {
    let results = new Array(26).fill(0);

    for (let char of str) {
        const lowerChar = char.toLowerCase();
        const lowerCharCode = lowerChar.charCodeAt(0);

        if (lowerCharCode >= 97 && lowerCharCode <= 122) {
            const charAlphaPosition = lowerCharCode - 97;
            results[charAlphaPosition] = 1;
        }
    }
    
    return results.join("");
}

console.log(change("a   **&  cZ")); // "10100000000000000000000001"
