"use strict";

/**
 * @typedef {{
 *   firstName: String,
 *   lastName: String,
 *   country: String,
 *   continent: String,
 *   age: Number,
 *   language: String
 * }} Person
 */

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 *
 * @param {Person[]} list
 * @returns {Person[]}
 */
function sortByLanguage(list) {
    // sort programming language alpha
    return list.sort(function sortLanguageThenFirstName(personA, personB) {
        if (personA.language < personB.language) {
            return -1;
        } else if (personA.language > personB.language) {
            return 1;
        } else {
            // same language, sort by firstName alpha
            return personA.firstName.localeCompare(personB.firstName);
        }
    });
}

const list1 = [
    {
        firstName: "Nikau",
        lastName: "R.",
        country: "New Zealand",
        continent: "Oceania",
        age: 39,
        language: "Ruby",
    },
    {
        firstName: "Precious",
        lastName: "G.",
        country: "South Africa",
        continent: "Africa",
        age: 22,
        language: "JavaScript",
    },
    {
        firstName: "Maria",
        lastName: "S.",
        country: "Peru",
        continent: "Americas",
        age: 30,
        language: "C",
    },
    {
        firstName: "Agustin",
        lastName: "V.",
        country: "Uruguay",
        continent: "Americas",
        age: 19,
        language: "JavaScript",
    },
];

console.log(sortByLanguage(list1));
// [
//     { firstName: "Maria", lastName: "S.", country: "Peru", continent: "Americas", age: 30, language: "C" },
//     { firstName: "Agustin", lastName: "V.", country: "Uruguay", continent: "Americas", age: 19, language: "JavaScript" },
//     { firstName: "Precious", lastName: "G.", country: "South Africa", continent: "Africa", age: 22, language: "JavaScript" },
//     { firstName: "Nikau", lastName: "R.", country: "New Zealand", continent: "Oceania", age: 39, language: "Ruby" }
// ];
