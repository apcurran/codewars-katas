"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */
function hamming(a, b) {
    let differentCharsCount = 0;

    for (let i = 0; i < a.length; i++) {
        const aChar = a[i];
        const bChar = b[i];

        if (aChar !== bChar) {
            differentCharsCount++;
        }
    }

    return differentCharsCount;
}

console.log(hamming("I like turtles", "I like turkeys")); // 3
console.log(hamming("Hello World", "Hello World")); // 0
console.log(hamming("espresso", "Expresso")); // 2
