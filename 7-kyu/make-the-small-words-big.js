"use strict";

/**
 * solution 1
 * n = sentence length
 * m = word length
 * time: O(n * m)
 * space: O(n)
 *
 * @param {string} sentence
 * @returns {string}
 */
function smallWordHelper(sentence) {
    return sentence
        .split(" ")
        .map((word) => {
            if (word.length <= 3) {
                // if word 3 chars or fewer -- uppercase word
                return word.toUpperCase();
            } else {
                // else -- remove all vowels from word
                return word.replace(/a|e|i|o|u/gi, "");
            }
        })
        .join(" ");
}

console.log(smallWordHelper("The quick brown fox jumps over the lazy dog"));
// "THE qck brwn FOX jmps vr THE lzy DOG"
