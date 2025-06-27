"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} x
 * @returns {string}
 */
function catMouse(x) {
    let distance = 0;

    for (let i = 1; i < x.length; i++) {
        const currentCharacter = x[i];

        if (currentCharacter === ".") distance++;
    }

    return distance > 3 ? "Escaped!" : "Caught!";
}

console.log(catMouse("C....m")); // "Escaped!";
console.log(catMouse("C..m")); // "Caught!";
