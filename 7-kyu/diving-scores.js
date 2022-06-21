"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number[]} scores 
 * @param {number} tariff 
 * @returns {string}
 */
function scoreOfDive(scores, tariff) {
    const validScoresSum = [...scores]
                            .sort((a, b) => a - b)
                            .slice(2, -2)
                            .reduce((sum, currNum) => sum + currNum, 0);

    const divingScore = validScoresSum * tariff;
    
    return divingScore.toFixed(2);                
}

console.log( scoreOfDive([7, 7.5, 8, 7.5, 6, 7, 7], 3) ); // '64.50'
console.log( scoreOfDive([5, 6.5, 5.5, 5, 6, 4.5, 6], 3.2) ); // '52.80'
