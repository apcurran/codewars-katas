"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function evenator(str) {
    return str
        .replace(/[.,?!_]/g, "") // remove punctuation
        .split(" ") // get words list
        .map(function evenateOddWords(word) {
            if (word.length % 2 === 1) {
                // odd length word
                return word + word[word.length - 1];
            } else {
                return word;
            }
        })
        .join(" ");
}

console.log(evenator("How did we end up here? We go?"));
// "Howw didd we endd up here We go"
