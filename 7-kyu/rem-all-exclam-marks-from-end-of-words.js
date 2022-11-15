"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function remove(str) {
    return str
            .split(" ")
            .map((word) => word.replace(/!+$/g, ""))
            .join(" ");
}

console.log( remove("Hi!") ); // "Hi"
console.log( remove("Hi!!!") ); // "Hi"
console.log( remove("!Hi!") ); // "!Hi"
console.log( remove("Hi! Hi!") ); // "Hi Hi"
