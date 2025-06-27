"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {string} str
//  * @returns {string}
//  */
// function remove(str) {
//     return str
//             .split(" ")
//             .map((word) => word.replace(/!+$/g, ""))
//             .join(" ");
// }

/**
 * solution 2 -- slight optimizations, same time/space complexities
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {string}
 */
function remove(str) {
    return str.replace(/\b!+/g, "");
}

console.log(remove("Hi!")); // "Hi"
console.log(remove("Hi!!!")); // "Hi"
console.log(remove("!Hi!")); // "!Hi"
console.log(remove("Hi! Hi!")); // "Hi Hi"
