"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number} s
 * @param {number[]} distArr
 * @returns {number}
 */
function gps(s, distArr) {
    if (distArr.length <= 1) return 0;

    let distSubs = [];

    for (let i = 0; i < distArr.length - 1; i++) {
        const currDist = distArr[i];
        const nextDist = distArr[i + 1];
        const distDiff = Math.abs(nextDist - currDist);
        distSubs.push(distDiff);
    }

    const speedArr = distSubs.map((dist) => (3600 * dist) / s);
    const maxSpeed = Math.max(...speedArr);

    return Math.floor(maxSpeed);
}

console.log(gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25])); // 74
