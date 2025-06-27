"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string[]} peopleInvited
 * @param {object[]} responses
 * @returns {string[]}
 */
function getAttendees(peopleInvited, responses) {
    // cache people (with names and responses) in map object
    let peopleCache = new Map();

    for (let { name, response } of responses) {
        peopleCache.set(name, response);
    }

    let attendees = [];

    for (let personName of peopleInvited) {
        const response = peopleCache.get(personName);

        if (response === "declined") continue;

        // if this person did not respond to the invite OR
        // if this person accepted, add
        attendees.push(personName);
    }

    return attendees;
}

console.log(
    getAttendees(
        ["Easter Bunny", "Tooth Fairy", "Frosty the Snowman", "Jack Frost"],
        [
            { name: "Easter Bunny", response: "declined" },
            { name: "Jack Frost", response: "declined" },
            { name: "Tooth Fairy", response: "accepted" },
        ],
    ),
); // ["Tooth Fairy", "Frosty the Snowman"]
