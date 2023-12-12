"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n^2)
 * 
 * @param {string} str 
 * @returns {string[]}
 */
function reverseSlice(str) {
    let results = [];

    for (let i = str.length - 1; i >= 0; i--) {
        let chunk = "";

        for (let j = i; j >= 0; j--) {
            chunk += str[j];
        }

        results.push(chunk);   
    }

    return results;
}

console.log(reverseSlice("123")); // ["321", "21", "1"]
