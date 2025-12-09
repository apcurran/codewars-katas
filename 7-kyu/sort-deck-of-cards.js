"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 *
 * @param {Array} array
 * @return {Array}
 */
function sortCards(array) {
    if (array.length === 1) return array;

    const cardWeights = new Map([
        ["A", 1],
        ["2", 2],
        ["3", 3],
        ["4", 4],
        ["5", 5],
        ["6", 6],
        ["7", 7],
        ["8", 8],
        ["9", 9],
        ["T", 10],
        ["J", 11],
        ["Q", 12],
        ["K", 13],
    ]);

    return array.sort((cardA, cardB) => {
        const cardAWeight = cardWeights.get(String(cardA));
        const cardBWeight = cardWeights.get(String(cardB));

        return cardAWeight - cardBWeight;
    });
}

console.log(sortCards(["3", "9", "A", "5", "T", "8", "2", "4", "Q", "7", "J", "6", "K"]));
// ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']
console.log(sortCards([3, 9, "A", 5, "T", 8, 2, 4, "Q", 7, "J", 6, "K"]));
// ["A",2,3,4,5,6,7,8,9,"T","J","Q","K"]
