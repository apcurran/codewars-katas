"use strict";

/**
 * solution 1
 * n = word arr len
 * m = num
 * time: O(n + m)
 * space: O(n + m)
 *
 * @param {string} str
 * @param {number} loc
 * @param {number} num
 * @returns {string}
 */
function modifyMultiply(str, loc, num) {
    const wordArr = str.split(" ");
    const targetWord = wordArr[loc];
    let newWordArr = [];

    for (let i = 0; i < num; i++) {
        newWordArr.push(targetWord);
    }

    return newWordArr.join("-");
}

console.log(modifyMultiply("This is a string", 3, 5)); // "string-string-string-string-string"
