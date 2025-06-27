"use strict";

const workers = new Map([
    ["Monday", "James"],
    ["Tuesday", "John"],
    ["Wednesday", "Robert"],
    ["Thursday", "Michael"],
    ["Friday", "William"],
]);

/**
 * @param {string} weekday
 * @param {number} numTrees
 * @param {number} costOfOneLitre
 * @returns {string} - Formatted sentence
 */
function task(weekday, numTrees, costOfOneLitre) {
    const currEmployee = workers.get(weekday);
    const totalLiquidCost = costOfOneLitre * numTrees;

    return `It is ${weekday} today, ${currEmployee}, you have to work, you must spray ${numTrees} trees and you need ${totalLiquidCost} dollars to buy liquid`;
}

console.log(task("Wednesday", 10, 2)); // 'It is Wednesday today, Robert, you have to work, you must spray 10 trees and you need 20 dollars to buy liquid'
