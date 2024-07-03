"use strict";

// /**
//  * solution 1
//  * time: O(n^2)
//  * space: O(n)
//  * 
//  * @param {string} str 
//  * @returns {string}
//  */
// function onlyDuplicates(str) {
//     let results = "";

//     for (let i = 0; i < str.length; i++) {
//         const targetChar = str[i];
//         const isTargetDuplicate = isCharDuplicate(targetChar, i, str);

//         if (isTargetDuplicate) {
//             results += targetChar;
//         }
//     }

//     return results;
// }

// /**
//  * @param {string} targetChar 
//  * @param {number} targetCharIndex 
//  * @param {string} str 
//  * @returns {boolean}
//  */
// function isCharDuplicate(targetChar, targetCharIndex, str) {
//     for (let i = 0; i < str.length; i++) {
//         const currentChar = str[i];

//         if (currentChar === targetChar && i !== targetCharIndex) {
//             return true;
//         }
//     }

//     return false;
// }

/**
 * solution 2
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function onlyDuplicates(str) {
    let results = "";

    for (let i = 0; i < str.length; i++) {
        const targetChar = str[i];
        
        if (str.indexOf(targetChar) !== str.lastIndexOf(targetChar)) {
            results += targetChar;
        }
    }

    return results;
}

console.log(onlyDuplicates("abccdefee")); // "cceee"
