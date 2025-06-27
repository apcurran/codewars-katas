"use strict";

/**
 * solution 1 -- Gauss summation formula
 * time: O(1)
 * space: O(1)
 *
 * @param {number} n
 * @returns {string} "Chris ate {number} flies, Tom ate {number} flies and Cat ate {number} flies"
 */
function frogContest(n) {
    const chrisFliesTotal = getSummation(n);
    const tomNFlies = Math.floor(chrisFliesTotal / 2);
    const tomFliesTotal = getSummation(tomNFlies);
    const catNFlies = chrisFliesTotal + tomFliesTotal;
    const catFliesTotal = getSummation(catNFlies);

    return `Chris ate ${chrisFliesTotal} flies, Tom ate ${tomFliesTotal} flies and Cat ate ${catFliesTotal} flies`;
}

/**
 * @param {number} n
 * @returns {number}
 */
function getSummation(n) {
    return (n * (n + 1)) / 2;
}

console.log(frogContest(5)); // "Chris ate 15 flies, Tom ate 28 flies and Cat ate 946 flies"
console.log(frogContest(8)); // "Chris ate 36 flies, Tom ate 171 flies and Cat ate 21528 flies"
