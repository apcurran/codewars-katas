"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} rainTotal 
 * @returns {string}
 */
function rainAmount(rainTotal) {
    const NECESSARY_WATER_AMT =  40;
    
    if (rainTotal >= NECESSARY_WATER_AMT) {
        return "Your plant has had more than enough water for today!";
    }

    return `You need to give your plant ${NECESSARY_WATER_AMT - rainTotal}mm of water`;
}

console.log( rainAmount(100) ); // "Your plant has had more than enough water for today!"
console.log( rainAmount(39) ); // "You need to give your plant 1mm of water"
