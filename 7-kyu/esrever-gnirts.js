"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @returns {string}
 */
String.prototype.reverse = function () {
    const word = this;
    let reversedWord = "";

    for (let i = word.length - 1; i >= 0; i--) {
        const character = word[i];
        reversedWord += character;
    }

    return reversedWord;
};

var original = "String";
var reversed = original.reverse();

console.log(reversed); // "gnirtS"
