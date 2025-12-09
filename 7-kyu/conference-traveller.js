"use strict";

/**
 * solution 1
 * n = citiesOffered
 * m = citiesVisited
 * time: O(n * m)
 * space: O(1)
 *
 * @param {string[]} citiesVisited
 * @param {string[]} citiesOffered
 * @returns {string}
 */
function conferencePicker(citiesVisited, citiesOffered) {
    for (let availableCity of citiesOffered) {
        if (!citiesVisited.includes(availableCity)) {
            return availableCity;
        }
    }

    return "No worthwhile conferences this year!";
}

console.log(
    conferencePicker(
        ["Mexico City", "Johannesburg", "Stockholm", "Osaka", "Saint Petersburg", "London"],
        ["Stockholm", "Paris", "Melbourne"],
    ),
); // "Paris"
console.log(
    conferencePicker(
        [
            "London",
            "Berlin",
            "Mexico City",
            "Melbourne",
            "Buenos Aires",
            "Hong Kong",
            "Madrid",
            "Paris",
        ],
        ["Berlin", "Melbourne"],
    ),
); // "No worthwhile conferences this year!"
