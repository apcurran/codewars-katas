"use strict";

/**
 *
 * @param {string} letters - String to modify
 * @param {number[]} coords - Coordinates of letter positions in string to remove (in order)
 * @returns {string}
 */
function lastSurvivor(letters, coords) {
    const lettersCopy = letters.split("");
    const coordsCopy = [...coords];

    for (let coord of coordsCopy) {
        lettersCopy.splice(coord, 1);
    }

    return lettersCopy.join("");
}

console.log(lastSurvivor("abc", [1, 1])); // "a"
console.log(lastSurvivor("kbc", [0, 1])); // "b"
