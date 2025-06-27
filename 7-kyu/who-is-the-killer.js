"use strict";

/**
 * solution 1
 * x = killer string len
 * n = object entries len
 * m = dead people arr len
 * r = seen people arr len
 * time: O(n * m * r)
 * space: O(x)
 *
 * @param {object} suspectInfo
 * @param {string[]} dead
 * @returns {string} killer
 */
function killer(suspectInfo, dead) {
    let knownKiller = "";

    outerLoop: for (let [suspect, seenPeople] of Object.entries(suspectInfo)) {
        // iterate dead people
        for (let deadPerson of dead) {
            // don't go further
            if (!seenPeople.includes(deadPerson)) continue outerLoop;
        }

        // if all dead people are in the seenPeople arr
        // return suspect's name as the killer
        knownKiller = suspect;

        break;
    }

    return knownKiller;
}

console.log(
    killer(
        {
            James: ["Jacob", "Bill", "Lucas"],
            Johnny: ["David", "Kyle", "Lucas"],
            Peter: ["Lucy", "Kyle"],
        },
        ["Lucas", "Bill"],
    ),
); // "James"

console.log(
    killer(
        {
            Brad: [],
            Megan: ["Ben", "Kevin"],
            Finn: [],
        },
        ["Ben"],
    ),
); // "Megan"
