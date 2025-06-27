"use strict";

/**
 * solution 1
 * n = str length
 * m = str chunk length
 * time: O(n * m)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {number}
 */
function solve(str) {
    // break up string into pieces split on vowels (aeiou)
    // remove empty strings from splitStrArr
    const strChunks = str
        .split(/[aeiou]/g)
        .filter((chunk) => chunk !== "");
    let maxConsonantChunkValue = -Infinity;
    // for each chunk in splitStrArr
    for (let chunk of strChunks) {
        let chunkValuesSum = 0;

        // iterate each letter in chunk
        for (let letter of chunk) {
            // convert letter to charcode - 96
            const letterValue = letter.charCodeAt(0) - 96;
            // add to running sum total of chunk values
            chunkValuesSum += letterValue;
        }

        // after summing chunk values, check against global max value
        maxConsonantChunkValue = Math.max(maxConsonantChunkValue, chunkValuesSum);
    }
        
    // return global max value
    return maxConsonantChunkValue;
}

console.log( solve("zodiacs") ); // 26
console.log( solve("strength") ); // 57
