"use strict";

/**
 * @typedef {{
 *   firstName: String,
 *   lastName: String,
 *   country: String,
 *   continent: String,
 *   age: Number,
 *   language: String,
 * }} Person
 */

/**
 * solution 1 -- hashset
 * time: O(n)
 * space: O(n)
 * 
 * @param {Person[]} list 
 * @returns {boolean}
 */
function allContinents(list) {
    const CONTINENTS_TOTAL = 5;
    let seenContinents = new Set();

    for (let person of list) {
        seenContinents.add(person.continent);
    }

    return seenContinents.size === CONTINENTS_TOTAL;
}

const list1 = [
    { firstName: "Fatima", lastName: "A.", country: "Algeria", continent: "Africa", age: 25, language: "JavaScript" },
    { firstName: "Agustín", lastName: "M.", country: "Chile", continent: "Americas", age: 37, language: "C" },
    { firstName: "Jing", lastName: "X.", country: "China", continent: "Asia", age: 39, language: "Ruby" },
    { firstName: "Laia", lastName: "P.", country: "Andorra", continent: "Europe", age: 55, language: "Ruby" },
    { firstName: "Oliver", lastName: "Q.", country: "Australia", continent: "Oceania", age: 65, language: "PHP" },
];

console.log(allContinents(list1)); // true
