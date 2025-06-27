"use strict";

/**
 * 
 * @param {string} a - First string 
 * @param {string} b - Second string
 * @returns {string} - Final result string of concatenated a and b
 */
function shorter_reverse_longer(a, b) {
    let longestStr = a.length > b.length ? a : b;
    let shortestStr = a.length < b.length ? a : b;
    
    if (a.length === b.length) {
        longestStr = a;
        shortestStr = b;
    }

    const reversedLongStr = longestStr
        .split("")
        .reverse()
        .join("");

    return `${shortestStr}${reversedLongStr}${shortestStr}`;
}

console.log(shorter_reverse_longer("hello", "bau")); // "bauollehbau"
