"use strict";

/**
 * solution 1 -- regex replace
 * time: O(n)
 * space: O(n)
 *
 * @param {string} phrase
 * @returns {string}
 */
function filterWords(phrase) {
    return phrase.replace(/(bad|mean|ugly|horrible|hideous)/gi, "awesome");
}

console.log(filterWords("You're Bad! timmy!")); // "You're awesome! timmy!"
console.log(filterWords("You're MEAN! timmy!")); // "You're awesome! timmy!"
