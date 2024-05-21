"use strict";

/**
 * solution 1
 * time: O(n^2) -- splice is O(n) within an outer loop (changes)
 * space: O(n)
 * 
 * @param {string[]} leaderboard 
 * @param {string[]} changes 
 * @returns {string[]}
 */
function leaderboardSort(leaderboard, changes) {
    let results = [...leaderboard];

    for (let change of changes) {
        const [name, positionChangeStr] = change.split(" ");
        const positionChangeNum = Number(positionChangeStr);
        const currentNamePosition = results.indexOf(name);
        const updatedNamePosition = currentNamePosition - positionChangeNum;
        // splice person out
        const splicedPerson = results.splice(currentNamePosition, 1)[0];
        // splice person in at new position
        results.splice(updatedNamePosition, 0, splicedPerson);
    }

    return results;
}

const people = ["John",
    "Brian",
    "Jim",
    "Dave",
    "Fred"];
const newPositions = ["Dave +1", "Fred +4", "Brian -1"];
console.log(leaderboardSort(people, newPositions));
