"use strict";

/**
 * solution 1
 * time: O(n^2 * log n)
 * space: O(n^2)
 *
 * @param {string} anagram
 * @param {string[]} arr
 * @returns {string[]}
 */
function grabscrab(anagram, arr) {
    const sortedAnagram = anagram
        .split("")
        .sort((a, b) => {
            if (a < b) return -1;

            if (a > b) return 1;

            return 0;
        })
        .join("");
    // iterate arr
    return arr.filter((word) => {
        // check that all letters are in the arr val
        // if yes, add to return resArr
        // if no, skip
        const sortedWord = word
            .split("")
            .sort((a, b) => {
                if (a < b) return -1;

                if (a > b) return 1;

                return 0;
            })
            .join("");

        if (sortedWord === sortedAnagram) return word;
    });
}

console.log(grabscrab("ortsp", ["sport", "parrot", "ports", "matey"])); // ["sport", "ports"]
