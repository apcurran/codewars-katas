"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function orderWord(str) {
    if (!str) return "Invalid String!";

    return str
        .split("")
        .sort()
        .join("");
}

console.log(orderWord("")); // "Invalid String!"
console.log(orderWord("hello world")); // " dehllloorw"
console.log(orderWord("!Hi You!")); // " !!HYiou"
