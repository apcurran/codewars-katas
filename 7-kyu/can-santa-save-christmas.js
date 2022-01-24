"use strict";

/**
 * 
 * @param {string[]} durations 
 * @returns {boolean}
 */
function determineTime(durations) {
    if (durations.length === 0) return true;

    const santaTimeLimit = 24 * 60 * 60; // 24 hrs to seconds
    let totalTime = 0;

    for (let giftDuration of durations) {
        const [hoursStr, minutesStr, secondsStr] = giftDuration.split(":");

        const hoursToSecondsTotal = Number(hoursStr) * 60 * 60;
        const minutesToSecondsTotal = Number(minutesStr) * 60;
        const secondsTotal = Number(secondsStr);
        const giftTotalTime = hoursToSecondsTotal + minutesToSecondsTotal + secondsTotal;

        totalTime += giftTotalTime;
    }

    return totalTime <= santaTimeLimit;
}

console.log( determineTime(["00:30:00", "02:30:00", "00:15:00"]) ); // true
console.log( determineTime([]) ); // true
console.log( determineTime(["12:00:00", "12:00:00"]) ); // true
console.log( determineTime(["06:00:00","12:00:00","06:30:00"]) ); // false