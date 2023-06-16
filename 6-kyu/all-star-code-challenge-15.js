"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n^2)
 * 
 * @param {string} str 
 * @returns {string[]}
 */
function rotate(str) {
    if (str === "") return [];

    const strLen = str.length;
    let charQueue = [...str];
    let results = [];

    for (let i = 0; i < strLen; i++) {
        // rotate string
        const frontChar = charQueue.shift();
        charQueue.push(frontChar);
        const rotatedStr = charQueue.join("");
        results.push(rotatedStr);
    }

    return results;
}

console.log( rotate("Hello") ); // ["elloH", "lloHe", "loHel", "oHell", "Hello"]
