"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {number} nbPetals
 * @returns {string}
 */
function howMuchILoveYou(nbPetals) {
    const phraseNum = nbPetals % 6;

    switch (phraseNum) {
        case 0:
            return "not at all";
        case 1:
            return "I love you";
        case 2:
            return "a little";
        case 3:
            return "a lot";
        case 4:
            return "passionately";
        case 5:
            return "madly";
    }
}

console.log(howMuchILoveYou(7)); // "I love you"
