"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {string[]} bagOfFruits 
 * @returns {string[]}
 */
function removeRotten(bagOfFruits) {
    if (!bagOfFruits) return [];

    const freshFruit = bagOfFruits.map((fruit) => {
        return fruit
                .replace("rotten", "")
                .toLowerCase();
    });

    return freshFruit;
}

console.log( removeRotten(["apple", "rottenBanana", "apple"]) ); // ["apple","banana","apple"]
console.log( removeRotten(["apple", "banana", "kiwi", "melone", "orange"]) ); // ["apple","banana","kiwi","melone","orange"]
console.log( removeRotten([]) ); // []
