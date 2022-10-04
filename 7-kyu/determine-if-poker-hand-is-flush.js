"use strict";

// /**
//  * solution 1 -- Set obj
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {string[]} cards 
//  * @returns {boolean}
//  */
// function isFlush(cards) {
//     const cardSuits = cards.map((card) => card[card.length - 1]);
//     const cardSuitsNoDups = new Set(cardSuits);
    
//     return cardSuitsNoDups.size === 1;
// }

/**
 * solution 2 -- array.every() method
 * time: O(n)
 * space: O(1)
 * 
 * @param {string[]} cards 
 * @returns {boolean}
 */
function isFlush(cards) {
    return cards.every((card, index, arr) => {
        const currCardSuit = card[card.length - 1];
        const firstCardSuit = arr[0][arr[0].length - 1];

        return currCardSuit === firstCardSuit;
    });
}

console.log( isFlush(["AS", "3S", "9S", "KS", "4S"]) ); // true
console.log( isFlush(["AD", "4S", "7H", "KS", "10S"]) ); // false
