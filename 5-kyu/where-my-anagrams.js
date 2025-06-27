"use strict";

// /**
//  * solution 1 -- iterative (imperative style)
//  * m = target word
//  * n = words arr
//  * time: O(m + n)
//  * space: O(m + n)
//  *
//  * @param {string} word
//  * @param {string[]} words
//  * @returns {array}
//  */
// function anagrams(word, words) {
//     let resArr = [];
//     // Map cache for target word
//     let targetWordMap = new Map();

//     for (let letter of word) {
//         const prevVal = targetWordMap.get(letter) || 0;
//         targetWordMap.set(letter, prevVal + 1);
//     }

//     // iterate words arr and create a map cache for each word's letters and counts
//     wordsLoop:
//     for (let word of words) {
//         let currWordMap = new Map();

//         // Map cache for current word in word arr
//         for (let letter of word) {
//             const prevVal = currWordMap.get(letter) || 0;
//             currWordMap.set(letter, prevVal + 1);
//         }

//         // check if anagram
//         if (currWordMap.size !== targetWordMap.size) {
//             continue wordsLoop;
//         }
//         // check if anagram
//         for (let [letter, count] of targetWordMap) {
//             if (currWordMap.get(letter) !== count) {
//                 continue wordsLoop;
//             }
//         }

//         resArr.push(word);
//     }

//     return resArr;
// }

/**
 * solution 2 -- (functional style)
 * m = target word
 * n = words arr
 * time: O(n^2 * log n)
 * space: O(n)
 *
 * @param {string} targetWord
 * @param {string[]} words
 * @returns {array}
 */
function anagrams(targetWord, words) {
    return words.filter(
        (currWord) => reorderWord(currWord) === reorderWord(targetWord),
    );
}

/**
 *
 * @param {string} word
 * @returns {string}
 */
function reorderWord(word) {
    return word.split("").sort().join("");
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])); // ['aabb', 'bbaa']
console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"])); // ['carer', 'racer']
console.log(anagrams("laser", ["lazing", "lazy", "lacer"])); // []
