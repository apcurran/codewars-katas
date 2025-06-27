"use strict";

/**
 * solution 1
 * n = arr length
 * time: O(n)
 * space: O(1) -- only "a", "b", and "c" chars
 *
 * @param {string[]} arr
 * @returns {boolean}
 */
function checkThreeAndTwo(arr) {
    let lettersFrequencies = new Map();

    for (let char of arr) {
        const previousCharCount = lettersFrequencies.get(char) || 0;
        lettersFrequencies.set(char, previousCharCount + 1);
    }

    let isThreeOfAKind = false;
    let isTwoOfAKind = false;

    for (let [, charCount] of lettersFrequencies) {
        if (charCount === 3) {
            isThreeOfAKind = true;
        }

        if (charCount === 2) {
            isTwoOfAKind = true;
        }
    }

    return isThreeOfAKind && isTwoOfAKind;
}

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"])); // true
console.log(checkThreeAndTwo(["a", "b", "c", "b", "c"])); // false
