"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} waterInLiters 
 * @param {number[]} dwellerAges 
 * @returns {number}
 */
function thirstyIn(waterInLiters, dwellerAges) {
    if (dwellerAges.length === 0) return -1;

    let waterLitersPerDay = 0;

    for (let dwellerAge of dwellerAges) {
        if (dwellerAge < 18) {
            waterLitersPerDay += 1;
        } else if (dwellerAge > 50) {
            waterLitersPerDay += 1.5;
        } else {
            waterLitersPerDay += 2;
        }
    }

    return Math.floor(waterInLiters / waterLitersPerDay);
}

console.log(thirstyIn(150, [5, 30, 10])); // 37
