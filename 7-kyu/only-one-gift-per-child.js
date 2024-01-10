"use strict";

let seenChildren = new Set();

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {string} name 
 * @returns {void|Error}
 */
function handOutGift(name) {
    if (seenChildren.has(name)) {
        throw new Error("Only one gift per child.");
    }

    seenChildren.add(name);
}

console.log(handOutGift("Peter"));
console.log(handOutGift("Alison"));
console.log(handOutGift("John"));
console.log(handOutGift("Maria"));
console.log(handOutGift("Peter")); // Error thrown
