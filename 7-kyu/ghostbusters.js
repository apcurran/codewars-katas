"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} building
 * @returns {string}
 */
function ghostBusters(building) {
    if (!building.includes(" ")) return "You just wanted my autograph didn't you?";

    return building.split(" ").join("");
}

console.log(ghostBusters("Sky scra per")); // "Skyscraper"
console.log(ghostBusters("")); // "You just wanted my autograph didn't you?"
console.log(ghostBusters("O  f fi ce")); // "Office"
