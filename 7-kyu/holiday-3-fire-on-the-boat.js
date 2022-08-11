"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {string} str 
//  * @returns {string}
//  */
// function fireFight(str) {
//     return str
//             .split(" ")
//             .map((word) => word === "Fire" ? "~~" : word)
//             .join(" ");
// }

/**
 * solution 2 -- regex
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function fireFight(str) {
    return str.replace(/Fire/g, "~~");
}

console.log( fireFight("Mast Deck Engine Water Fire") ); // "Mast Deck Engine Water ~~"
