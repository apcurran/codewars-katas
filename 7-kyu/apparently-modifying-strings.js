"use strict";

// /**
//  * solution 1 -- iterative
//  * time: O(n^2)
//  * space: O(n)
//  *
//  * @param {string} str
//  * @returns {string}
//  */
// function apparently(str) {
//     const words = str.split(" ");

//     for (let i = 0; i < words.length; i++) {
//         const currentWord = words[i];

//         if (currentWord === "and" || currentWord === "but") {
//             // check next word for "apparently"
//             const nextWord = words[i + 1];

//             if (nextWord === "apparently") {
//                 // skip
//                 continue;
//             }

//             // otherwise, add "apparently"
//             words.splice(i + 1, 0, "apparently");
//             // reset i position back to beginning of string
//             i = 0;
//         }
//     }

//     return words.join(" ");
// }

/**
 * solution 2 -- regex
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {string}
 */
function apparently(str) {
    return str.replace(/\b(and|but)\b( apparently\b)?/g, "$1 apparently");
}

console.log(
    apparently(
        "It was great and I've never been on live television before but sometimes I don't watch this.",
    ),
);
