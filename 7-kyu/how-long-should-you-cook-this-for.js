"use strict";

/**
 * solution 1 -- math
 * time: O(1)
 * space: O(1)
 *
 * @param {string} neededPower
 * @param {number} minutes
 * @param {number} seconds
 * @param {string} power
 * @returns {string} format time in minutes and seconds
 */
function cookingTime(neededPower, minutes, seconds, power) {
    const neededPowerInWatts = parseInt(neededPower);
    const actualPowerInWatts = parseInt(power);
    const timeProvidedInSeconds = minutes * 60 + seconds;
    const adjustedTimeInSeconds = Math.ceil(
        (timeProvidedInSeconds * neededPowerInWatts) / actualPowerInWatts,
    );
    const adjustedTimeMinutes = Math.trunc(adjustedTimeInSeconds / 60);
    const adjustedTimeSecondsLeftover = adjustedTimeInSeconds % 60;

    return `${adjustedTimeMinutes} minutes ${adjustedTimeSecondsLeftover} seconds`;
}

console.log(cookingTime("600W", 4, 20, "800W")); // "3 minutes 15 seconds"
