"use strict";

/**
 * solution 1
 * n = tickets length
 * m = letters string length
 * time: O(n * m)
 * space: O(m)
 * 
 * @param {array[]} tickets 
 * @param {number} winAmount 
 * @returns {string}
 */
function bingo(tickets, winAmount) {
    let miniWinsCount = 0;
    // count mini-wins for each tuple
    for (let [letters, winningNumber] of tickets) {
        const lettersList = letters.split("");
        const hasWinningNumber = lettersList.some((letter) => letter.charCodeAt(0) === winningNumber);
        
        if (hasWinningNumber) miniWinsCount++;
    }
    // compare win total to mini-wins
    // if >= return "Winner!"
    // else return "Loser!"
    return miniWinsCount >= winAmount ? "Winner!" : "Loser!";
}

console.log( bingo([["ABC", 65], ["HGR", 74], ["BYHT", 74]], 2) ); // "Loser!"
console.log( bingo([["ABC", 65], ["HGR", 74], ["BYHT", 74]], 1) ); // "Winner!"
