"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n) -- including results array
 *
 * @param {number} legs
 * @returns {number[]} possible number of people sorted ASC
 */
function houseOfCats(legs) {
    const LEGS_PER_HUMAN = 2;
    const LEGS_PER_CAT = 4;
    let results = [];

    for (let i = 0; i <= legs; i += 2) {
        // check if i can go into results with subtracted difference being divisible evenly by 4 (for cats)
        const isPossible = (legs - i) % LEGS_PER_CAT === 0;

        if (isPossible) {
            const humansCount = i / LEGS_PER_HUMAN;
            results.push(humansCount);
        }
    }

    return results;
}

console.log(houseOfCats(6)); // [1, 3]
console.log(houseOfCats(2)); // [1]
console.log(houseOfCats(8)); // [0, 2, 4]
