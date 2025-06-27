"use strict";

// /**
//  * solution 1
//  * time: O(n) -- stringify num
//  * space: O(n) -- stringify num
//  *
//  * @param {number} battery
//  * @param {number} charger
//  * @returns {number} rounded to 2 decimal places
//  */
// function calculateTime(battery, charger) {
//     const zeroToEightyFivePercent = (battery * .85) / charger;
//     const eightyFiveToNinetyFivePercent = (battery * .1) / (charger * .5);
//     const ninetyFiveToFull = (battery * .05) / (charger * .2);
//     const totalTime = zeroToEightyFivePercent + eightyFiveToNinetyFivePercent + ninetyFiveToFull;

//     return Number(totalTime.toFixed(2));
// }

/**
 * solution 2 -- no stringification of num
 * time: O(1)
 * space: O(1)
 *
 * @param {number} battery
 * @param {number} charger
 * @returns {number} rounded to 2 decimal places
 */
function calculateTime(battery, charger) {
    const zeroToEightyFivePercent = (battery * 0.85) / charger;
    const eightyFiveToNinetyFivePercent = (battery * 0.1) / (charger * 0.5);
    const ninetyFiveToFull = (battery * 0.05) / (charger * 0.2);
    const totalTime =
        zeroToEightyFivePercent +
        eightyFiveToNinetyFivePercent +
        ninetyFiveToFull;

    return Math.round(totalTime * 100) / 100;
}

console.log(calculateTime(1000, 500)); // 2.6
