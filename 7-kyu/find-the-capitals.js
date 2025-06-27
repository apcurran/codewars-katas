"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {object[]} capitals
 * @returns {string[]}
 */
function capital(capitals) {
    return capitals.map((obj) => {
        const capital = obj.capital;
        const stateOrCountry = obj.state || obj.country;

        return `The capital of ${stateOrCountry} is ${capital}`;
    });
}

console.log(capital([{ state: "Maine", capital: "Augusta" }])[0]); // "The capital of Maine is Augusta"
console.log(capital([{ country: "Spain", capital: "Madrid" }])[0]); // "The capital of Spain is Madrid"
