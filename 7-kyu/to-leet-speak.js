"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function toLeetSpeak(str) {
    const leetLetters = new Map([
        ["A", "@"],
        ["B", "8"],
        ["C", "("],
        ["D", "D"],
        ["E", "3"],
        ["F", "F"],
        ["G", "6"],
        ["H", "#"],
        ["I", "!"],
        ["J", "J"],
        ["K", "K"],
        ["L", "1"],
        ["M", "M"],
        ["N", "N"],
        ["O", "0"],
        ["P", "P"],
        ["Q", "Q"],
        ["R", "R"],
        ["S", "$"],
        ["T", "7"],
        ["U", "U"],
        ["V", "V"],
        ["W", "W"],
        ["X", "X"],
        ["Y", "Y"],
        ["Z", "2"],
    ]);
    let leetedWord = "";

    for (let char of str) {
        if (char === " ") {
            leetedWord += " ";

            continue;
        }

        const leetLetter = leetLetters.get(char);
        leetedWord += leetLetter;
    }

    return leetedWord;
}

console.log( toLeetSpeak("LEET") ); // "1337"
console.log( toLeetSpeak("LOREM IPSUM DOLOR SIT AMET") ); // "10R3M !P$UM D010R $!7 @M37"
