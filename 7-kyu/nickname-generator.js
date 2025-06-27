"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {string} name
 * @returns {string}
 */
function nicknameGenerator(name) {
    if (name.length < 4) return "Error: Name too short";

    const thirdLetter = name[2];

    if (
        thirdLetter === "a" ||
        thirdLetter === "e" ||
        thirdLetter === "i" ||
        thirdLetter === "o" ||
        thirdLetter === "u"
    ) {
        return name.slice(0, 4);
    }

    return name.slice(0, 3);
}

console.log(nicknameGenerator("Robert")); // "Rob"
console.log(nicknameGenerator("Jeannie")); // "Jean"
