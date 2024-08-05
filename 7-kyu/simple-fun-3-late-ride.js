"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} totalMinutes 
 * @returns {number}
 */
function lateRide(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const time = String(hours) + String(minutes);
    let timeDigitsSum = 0;

    for (let digitStr of time) {
        const digitNum = Number(digitStr);
        timeDigitsSum += digitNum;
    }

    return timeDigitsSum;
}

console.log(lateRide(240)); // 4
console.log(lateRide(808)); // 14
