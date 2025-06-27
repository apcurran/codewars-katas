"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 */
const nato = (function () {
    const letters = {
        "A": "Alpha", "B": "Bravo", "C": "Charlie",
        "D": "Delta", "E": "Echo", "F": "Foxtrot",
        "G": "Golf", "H": "Hotel", "I": "India",
        "J": "Juliett", "K": "Kilo", "L": "Lima",
        "M": "Mike", "N": "November", "O": "Oscar",
        "P": "Papa", "Q": "Quebec", "R": "Romeo",
        "S": "Sierra", "T": "Tango", "U": "Uniform",
        "V": "Victor", "W": "Whiskey", "X": "X-ray",
        "Y": "Yankee", "Z": "Zulu",
    };

    return function (/** @type {string} */ word) {
        let translation = [];

        for (let char of word) {
            const upperChar = char.toUpperCase();
            const natoWord = letters[upperChar];
            translation.push(natoWord);
        }

        return translation.join(" ");
    };
})();

console.log(nato("abc")); // "Alpha Bravo Charlie"
