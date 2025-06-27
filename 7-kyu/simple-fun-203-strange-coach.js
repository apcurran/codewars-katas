"use strict";

/**
 * soltuion 1 -- hashmap
 * time: O(n * log n) -- sorting results
 * space: O(n)
 *
 * @param {string[]} players
 * @returns {string}
 */
function strangeCoach(players) {
    let firstLetters = new Map();

    for (let player of players) {
        const firstLetter = player[0];
        const previousLetterCount = firstLetters.get(firstLetter) || 0;
        firstLetters.set(firstLetter, previousLetterCount + 1);
    }

    let results = [];

    for (let [char, charCount] of firstLetters) {
        if (charCount >= 5) {
            results.push(char);
        }
    }

    if (results.length === 0) {
        return "forfeit";
    }

    return results.sort().join("");
}

console.log(
    strangeCoach(["michael", "jordan", "lebron", "james", "kobe", "bryant"]),
); // "forfeit"
console.log(
    strangeCoach([
        "babic",
        "keksic",
        "boric",
        "bukic",
        "sarmic",
        "balic",
        "kruzic",
        "hrenovkic",
        "beslic",
        "boksic",
        "krafnic",
        "pecivic",
        "klavirkovic",
        "kukumaric",
        "sunkic",
        "kolacic",
        "kovacic",
        "prijestolonasljednikovic",
    ]),
); // "bk"
