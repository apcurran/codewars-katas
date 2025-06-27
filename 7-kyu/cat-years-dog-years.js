"use strict";

/**
 * solution 1 -- math
 * time: O(1)
 * space: O(1)
 *
 * @param {number} catYears
 * @param {number} dogYears
 * @returns {[number, number]} [catOwnedYears, dogOwnedYears]
 */
function ownedCatAndDog(catYears, dogYears) {
    const catOwnedYears = catYears < 24 ? catYears / 15 : (catYears - 16) / 4;
    const dogOwnedYears = dogYears < 24 ? dogYears / 15 : (dogYears - 14) / 5;

    return [Math.floor(catOwnedYears), Math.floor(dogOwnedYears)];
}

console.log(ownedCatAndDog(15, 15)); // [1, 1]
console.log(ownedCatAndDog(24, 24)); // [2, 2]
console.log(ownedCatAndDog(56, 64)); // [10, 10]
