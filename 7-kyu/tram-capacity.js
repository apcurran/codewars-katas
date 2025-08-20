"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number} stops
 * @param {number[]} descending
 * @param {number[]} onboarding
 * @returns {number}
 */
function tram(stops, descending, onboarding) {
    let currentCapacity = 0;
    let maxCapacity = 0;

    for (let i = 0; i < stops; i++) {
        currentCapacity -= descending[i];
        currentCapacity += onboarding[i];
        maxCapacity = Math.max(maxCapacity, currentCapacity);
    }

    return maxCapacity;
}

console.log(tram(4, [0, 2, 4, 4], [3, 5, 2, 0])); // 6
