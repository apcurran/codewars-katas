"use strict";

/**
 * Solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} str 
 * @returns {boolean}
 */
function tripleX(str){
    let firstX = false;

    for (let i = 0; i < str.length; i++) {
        const currLetter = str[i];

        if (firstX) break;

        if (currLetter === "x") {
            firstX = true;
            // check for next two chars as x chars
            const secondLetter = str[i + 1];
            const thirdLetter = str[i + 2];

            if (secondLetter === "x" && thirdLetter === "x") {
                return true;
            }
        }
    }

    return false;
}

console.log( tripleX("abraxxxas") ); // true
