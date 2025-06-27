"use strict";

/**
 * no join or repeat methods
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @param {string} chirps
 * @returns {string}
 */
function chirp(n, chirps = "") {
    if (n === 1) {
        // stop recursion
        return "chirp";
    }

    const chirpsSoFar = chirp(n - 1);

    return chirpsSoFar + "-chirp";
}

console.log(chirp(4)); // "chirp-chirp-chirp-chirp"
console.log(chirp(2)); // "chirp-chirp"
