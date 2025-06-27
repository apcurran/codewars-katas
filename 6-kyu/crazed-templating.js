"use strict";

/**
 * solution 1 -- iterative
 * n = words length
 * m = word length
 * time: O(n * m)
 * space: O(m)
 *
 * @param {string[]} words
 * @returns {string}
 */
function letterPattern(words) {
    let pattern = words[0].split("");

    // iterate each word in words list (start at the second word in list)
    for (let i = 1; i < words.length; i++) {
        // iterate each char in current word
        for (let j = 0; j < words[i].length; j++) {
            // if this current word's letter is not the same
            // as the pattern template set by the first word,
            // change current char to "*"
            if (words[i][j] !== pattern[j]) {
                pattern[j] = "*";
            }
        }
    }

    return pattern.join("");
}

console.log(letterPattern(["war", "rad", "dad"])); // "*a*"
console.log(letterPattern(["general", "admiral", "piglets", "secrets"])); // "*******"
console.log(letterPattern(["family"])); // "family"
