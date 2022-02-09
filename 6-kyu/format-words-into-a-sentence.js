"use strict";

/**
 * Solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string[]} words 
 * @returns {string}
 */
function formatWords(words) {
    // Edge cases
    if (!words) return "";

    if (words.length === 0) return "";

    if (words.length === 1 && words[0] === "") return "";

    const wordsEmptyStrsRemoved = words.filter((word) => word.length > 0);

    if (wordsEmptyStrsRemoved.length === 1) {
        return wordsEmptyStrsRemoved[0];
    }

    return wordsEmptyStrsRemoved
            .slice(0, -1)
            .join(", ")
            .concat(" and ", wordsEmptyStrsRemoved[wordsEmptyStrsRemoved.length - 1]);
}

console.log( formatWords(["one", "two", "three", "four"]) ); // 'one, two, three and four'
console.log( formatWords(["one", "two", ""]) ); // 'one and two'
console.log( formatWords(["one"]) ); // 'one'
console.log( formatWords(null) ); // ''
console.log( formatWords([""]) ); // ''
