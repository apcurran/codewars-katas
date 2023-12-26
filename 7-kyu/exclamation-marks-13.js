"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} string 
 * @returns {number}
 */
function product(string) {
    const questionMarks = string.match(/\?/g);
    const exclamationMarks = string.match(/!/g);

    if (!questionMarks || !exclamationMarks) return 0;
    
    return questionMarks.length * exclamationMarks.length;
}

console.log(product("")); // 0
console.log(product("!ab? ?")); // 2
