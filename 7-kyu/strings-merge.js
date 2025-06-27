"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} string1
 * @param {string} string2
 * @param {string} letter
 * @returns {string}
 */
function stringMerge(string1, string2, letter) {
    const firstWordBeginning = string1.split(letter, 1);
    const secondWordEnding = string2.slice(string2.indexOf(letter));

    return firstWordBeginning + secondWordEnding;
}

// console.log( stringMerge("hello", "world", "l") ); // "held"
// console.log( stringMerge("coding", "anywhere", "n") ); // "codinywhere"
console.log(stringMerge("jason", "samson", "s")); // "jasamson"
