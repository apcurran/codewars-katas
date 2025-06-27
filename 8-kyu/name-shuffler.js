"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1) -- technically will always be a split arr of len 2 for name
 *
 * @param {string} str
 * @returns {string}
 */
function nameShuffler(str) {
    const [firstName, lastName] = str.split(" ");

    return `${lastName} ${firstName}`;
}

console.log(nameShuffler("john McClane")); // "McClane john"
