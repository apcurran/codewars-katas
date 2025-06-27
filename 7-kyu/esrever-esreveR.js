"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(n)
 *
 * @param {string} str
 * @returns {string}
 */
function esrever(str) {
    if (str === "") return "";

    const punctuationMark = str[str.length - 1];
    const noPunctuationStr = str.slice(0, str.length - 1);
    let reversedWords = noPunctuationStr.split(" ").reverse();
    let reversedWordsAndLetters = [];

    for (let word of reversedWords) {
        let reversedLetters = "";

        for (let i = word.length - 1; i >= 0; i--) {
            reversedLetters += word[i];
        }

        reversedWordsAndLetters.push(reversedLetters);
    }

    const reversedPhrase = reversedWordsAndLetters.join(" ");

    return `${reversedPhrase}${punctuationMark}`;
}

console.log(esrever("hello world.")); // "dlrow olleh."
console.log(esrever("Much l33t?")); // t33l hcuM?"
