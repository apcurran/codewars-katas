"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} peepsArr 
 * @returns {number[]}
 */
function rowWeights(peepsArr) {
    let team1 = 0;
    let team2 = 0;

    for (let [index, personWeight] of peepsArr.entries()) {
        if (index % 2 === 0) {
            team1 += personWeight;
        } else {
            team2 += personWeight;
        }
    }

    return [team1, team2];
}

console.log( rowWeights([13, 27, 49]) ); // [62, 27]
console.log( rowWeights([50, 60, 70, 80]) ); // [120, 140]
