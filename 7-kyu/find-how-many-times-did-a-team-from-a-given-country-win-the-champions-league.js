"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {{
//  *   season: string,
//  *   team: string,
//  *   country: string
//  * }[]} winnerList
//  * @param {string} country 
//  * @returns {number}
//  */
// function countWins(winnerList, country) {
//     return winnerList.filter((winner) => winner.country === country)
//                      .length;
// }

/**
 * solution 2
 * time: O(n)
 * space: O(1)
 * 
 * @param {{
 *   season: string,
 *   team: string,
 *   country: string
 * }[]} winnerList
 * @param {string} country 
 * @returns {number}
 */
function countWins(winnerList, country) {
    let winnerCount = 0;

    for (let winner of winnerList) {
        if (winner.country === country) {
            winnerCount++;
        }
    }

    return winnerCount;
}
