"use strict";

/**
 * 
 * @param {string} sentence 
 * @param {number} n
 * @returns {string[]}  
 */
function filterLongWords(sentence, n) {
    return sentence
        .split(" ")
        .filter((word) => word.length > n);
}

console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 4)); // ['quick', 'brown', 'jumps'] 
