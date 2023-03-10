"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function bandNameGenerator(str) {
    const firstLetter = str[0];
    const lastLetter = str[str.length - 1];
    const upperCasedFirstLetter = firstLetter.toUpperCase();

    if (firstLetter === lastLetter) {
        const strLettersAfterFirst = str.slice(1);

        return `${upperCasedFirstLetter}${strLettersAfterFirst}${strLettersAfterFirst}`;
    }

    const titleCasedNoun = upperCasedFirstLetter + str.slice(1);

    return `The ${titleCasedNoun}`;
}

console.log( bandNameGenerator("dolphin") ); // "The Dolphin"
console.log( bandNameGenerator("alaska") ); // "Alaskalaska"
