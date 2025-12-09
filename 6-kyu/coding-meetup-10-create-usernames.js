"use strict";

/**
 * solution 1 -- map method
 * n = list length
 * m = person's first and last names
 * time: O(n * m)
 * space: O(n + m)
 *
 * @param {{
 *  firstName: String,
 *  lastName: String,
 *  country: String,
 *  continent: String,
 *  age: Number,
 *  language: String
 * }[]} list
 * @returns {{
 *  firstName: String,
 *  lastName: String,
 *  country: String,
 *  continent: String,
 *  age: Number,
 *  language: String,
 *  username: String
 * }[]}
 */
function addUsername(list) {
    const CURRENT_YEAR = 2020;

    return list.map(function updateWithUsername(person) {
        const birthYear = CURRENT_YEAR - person.age;
        const username =
            person.firstName.toLowerCase() + person.lastName[0].toLowerCase() + birthYear;

        return {
            ...person,
            username,
        };
    });
}

const list1 = [
    {
        firstName: "Emily",
        lastName: "N.",
        country: "Ireland",
        continent: "Europe",
        age: 30,
        language: "Ruby",
    },
    {
        firstName: "Nor",
        lastName: "E.",
        country: "Malaysia",
        continent: "Asia",
        age: 20,
        language: "Clojure",
    },
];
console.log(addUsername(list1));
// [
//     {
//         firstName: "Emily", lastName: "N.", country: "Ireland", continent: "Europe", age: 30, language: "Ruby",
//         username: "emilyn1990"
//     },
//     {
//         firstName: "Nor", lastName: "E.", country: "Malaysia", continent: "Asia", age: 20, language: "Clojure",
//         username: "nore2000"
//     }
// ];
