"use strict";

/**
 * solution 1 -- basic, iterative
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str
 * @returns {string}
 */
function reverseCase(str) {
    let results = [];
    let consectiveChar = null;
    let consectiveCharsCount = 0;

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        const nextChar = str[i + 1];

        if (currentChar === nextChar) {
            consectiveCharsCount++;

            if (currentChar === currentChar.toLowerCase()) {
                consectiveChar = currentChar.toUpperCase();
            } else {
                consectiveChar = currentChar.toLowerCase();
            }
        } else if (consectiveCharsCount > 0) {
            results.push(consectiveChar.repeat(consectiveCharsCount + 1));

            // reset
            consectiveChar = null;
            consectiveCharsCount = 0;
        } else {
            results.push(currentChar);
        }
    }

    if (consectiveChar) {
        results.push(consectiveChar.repeat(consectiveCharsCount + 1));
    }

    return results.join("");
}

console.log(reverseCase("puzzles")); // "puZZles"
console.log(reverseCase("shhh")); // "sHHH"
