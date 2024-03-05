"use strict";

/**
 * n = words length
 * m = word length
 * time: O(n * (m * log m))
 * space: O(n + m)
 * 
 * @param {string[]} words 
 * @returns {string[][]}
 */
function groupAnagrams(words) {
    let anagrams = new Map();

    for (let word of words) {
        const sortedWord = word.split("").sort().join("");

        if (anagrams.has(sortedWord)) {
            // add current word to list
            const wordAnagrams = anagrams.get(sortedWord);
            wordAnagrams.push(word);
        } else {
            // add new list
            anagrams.set(sortedWord, [word]);
        }
    }

    return [...anagrams.values()];
}

console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]));
// [
//     ["tsar", "star", "tars"],
//     ["rat", "tar"],
//     ["cheese"]
// ]
