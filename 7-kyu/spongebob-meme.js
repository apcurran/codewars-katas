"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(n)
 *
 * @param {string} sentence
 * @returns {string}
 */
function spongeMeme(sentence) {
    return sentence
        .split("")
        .map((char, index) => {
            // check if index is even -> uppercase
            // check if index is odd -> lowercase
            const isEven = index % 2 === 0;

            return isEven ? char.toUpperCase() : char.toLowerCase();
        })
        .join("");
}

console.log(spongeMeme("stop Making spongebob Memes!")); // "StOp mAkInG SpOnGeBoB MeMeS!"
