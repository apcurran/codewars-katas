"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {string} str 
//  * @returns {boolean}
//  */
// function alphabetic(str) {
//     const alphaOrderedStr = str
//                                 .split("")
//                                 .sort()
//                                 .join("");

//     return str === alphaOrderedStr;
// }

/**
 * solution 2
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} str 
 * @returns {boolean}
 */
function alphabetic(str) {
    for (let i = 1; i < str.length; i++) {
        const currentChar = str[i];
        const previousChar = str[i - 1];

        if (currentChar < previousChar) return false;
    }

    return true;
}

console.log( alphabetic("door") ); // true
console.log( alphabetic("codewars") ); // false
