"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string[]} acrostic 
 * @returns {string}
 */
function readOut(acrostic) {
    return acrostic
            .map((word) => word[0])
            .join("");
}

console.log(readOut(["Jolly", "Amazing", "Courteous", "Keen"])); // "JACK"
