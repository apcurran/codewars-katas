"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string[]} queue 
 * @returns {string}
 */
function warnTheSheep(queue) {
    // is the wolf at the front of the queue?
    if (queue[queue.length - 1] === "wolf") {
        return "Pls go away and stop eating my sheep";
    }

    // iterate backwards
    for (let i = queue.length - 1; i >= 0; i--) {
        const currAnimal = queue[i];

        if (currAnimal === "wolf") {
            const sheepN = queue.length - i - 1;

            return `Oi! Sheep number ${sheepN}! You are about to be eaten by a wolf!`;
        }
    }
}

console.log( warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]) ); // "Oi! Sheep number 6! You are about to be eaten by a wolf!"
console.log( warnTheSheep(["sheep", "wolf", "sheep"]) ); // "Oi! Sheep number 1! You are about to be eaten by a wolf!"
console.log( warnTheSheep(["wolf"]) ); // "Pls go away and stop eating my sheep"
