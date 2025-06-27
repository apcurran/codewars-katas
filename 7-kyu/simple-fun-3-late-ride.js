"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {number} totalMinutes
//  * @returns {number}
//  */
// function lateRide(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = totalMinutes % 60;
//     const time = String(hours) + String(minutes);
//     let timeDigitsSum = 0;

//     for (let digitStr of time) {
//         const digitNum = Number(digitStr);
//         timeDigitsSum += digitNum;
//     }

//     return timeDigitsSum;
// }

/**
 * solution 2 -- math
 * time: O(1)
 * space: O(1)
 *
 * @param {number} totalMinutes
 * @returns {number}
 */
function lateRide(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    const hourDigit1 = Math.floor(hours / 10);
    const hourDigit2 = hours % 10;
    const minuteDigit1 = Math.floor(minutes / 10);
    const minuteDigit2 = minutes % 10;

    return hourDigit1 + hourDigit2 + minuteDigit1 + minuteDigit2;
}

console.log(lateRide(240)); // 4
console.log(lateRide(808)); // 14
