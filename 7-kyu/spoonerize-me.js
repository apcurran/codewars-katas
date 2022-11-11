"use strict";

/**
 * swap first letters of each word
 * 
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} words 
 * @returns {string}
 */
function spoonerize(words) {
    const [word1, word2] = words.split(" ");
    const word1FirstLetter = word1[0];
    const word1Rest = word1.slice(1);
    const word2FirstLetter = word2[0];
    const word2Rest = word2.slice(1);

    return `${word2FirstLetter}${word1Rest} ${word1FirstLetter}${word2Rest}`;    
}

console.log( spoonerize("nit picking") ); // "pit nicking"
