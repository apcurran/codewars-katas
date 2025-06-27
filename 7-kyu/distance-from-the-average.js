"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} arr
 * @returns {number[]} distances from the average
 */
function distancesFromAverage(arr) {
    const average = arr.reduce((sum, curr) => sum + curr, 0) / arr.length;

    return arr.map(function getCurrentDistanceFromAverage(num) {
        const distanceFromAverage = average - num;

        // round to second decimal place
        return Math.round(distanceFromAverage * 100) / 100;
    });
}

console.log(distancesFromAverage([55, 95, 62, 36, 48])); // [4.2, -35.8, -2.8, 23.2, 11.2]
