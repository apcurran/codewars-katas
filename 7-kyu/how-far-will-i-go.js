"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} totalTime 
 * @param {number} runTime 
 * @param {number} restTime 
 * @param {number} speed 
 * @returns {number} total distance traveled
 */
function travel(totalTime, runTime, restTime, speed) {
    const cycleTime = runTime + restTime;
    const completedFullCycles = Math.floor(totalTime / cycleTime);
    const completedFullCycleTime = completedFullCycles * runTime;

    const leftoverTime = totalTime % cycleTime;
    const partialRunTime = Math.min(leftoverTime, runTime);
    const totalRunTime = completedFullCycleTime + partialRunTime;

    return totalRunTime * speed;
}

console.log(travel(500, 60, 45, 14)); // 4200 (m)
