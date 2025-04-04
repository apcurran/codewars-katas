"use strict";

/**
 * @typedef {Object} Person
 * @property {string} name
 * @property {number} chickenwings
 * @property {number} hamburgers
 * @property {number} hotdogs
 */

/**
 * @typedef {Object} PersonScore
 * @property {string} name
 * @property {number} score
 */

/**
 * solution 1
 * time: O(n * log n) -- due to sorting
 * space: O(n)
 * 
 * @param {Person[]} whoAteWhat - list of people 
 * @returns {PersonScore[]} 
 */
function scoreboard(whoAteWhat) {
    const collator = new Intl.Collator("en");

    return whoAteWhat
        .map(function calcPersonScore(person) {
            const chickenwingsPoints = person.chickenwings * 5;
            const hamburgersPoints = person.hamburgers * 3;
            const hotdogsPoints = person.hotdogs * 2;
            const scoreTotal = chickenwingsPoints + hamburgersPoints + hotdogsPoints;

            return {
                name: person.name,
                score: scoreTotal,
            };
        })
        .sort(function sortScoreThenAlpha(personA, personB) {
            if (personA.score === personB.score) {
                return collator.compare(personA.name, personB.name);
            } else {
                // sort DESC
                return personB.score - personA.score;
            }
        });
}

const whoAteWhat = [
    { name: "Billy The Beast", chickenwings: 17, hamburgers: 7, hotdogs: 8 },
    { name: "Habanero Hillary", chickenwings: 5, hamburgers: 17, hotdogs: 11 },
    { name: "Joey Jaws", chickenwings: 8, hamburgers: 8, hotdogs: 15 },
    { name: "Big Bob", chickenwings: 20, hamburgers: 4, hotdogs: 11 },
];
console.log(scoreboard(whoAteWhat));
// [
//     { name: "Big Bob", score: 134 },
//     { name: "Billy The Beast", score: 122 },
//     { name: "Habanero Hillary", score: 98 },
//     { name: "Joey Jaws", score: 94 },
// ];
