"use strict";

// /**
//  * solution 1 -- regex
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {string} string 
//  * @returns {number}
//  */
// function product(string) {
//     const questionMarks = string.match(/\?/g);
//     const exclamationMarks = string.match(/!/g);

//     if (!questionMarks || !exclamationMarks) return 0;
    
//     return questionMarks.length * exclamationMarks.length;
// }

/**
 * solution 2 -- optimized
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} string 
 * @returns {number}
 */
function product(string) {
    let exclamationMarksCount = 0;
    let questionMarksCount = 0;

    for (let char of string) {
        if (char === "!") {
            exclamationMarksCount++;
        } else if (char === "?") {
            questionMarksCount++;
        }
    }

    return exclamationMarksCount * questionMarksCount;
}

console.log(product("")); // 0
console.log(product("!ab? ?")); // 2
