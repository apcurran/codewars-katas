"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} start 
 * @param {number} finish 
 * @returns {number}
 */
function solution(start, finish) {
    if (finish === start) return 0;

    const stepsToClimb = finish - start;
    const totalSmallJumps = stepsToClimb % 3;
    const totalBigJumps = Math.floor(stepsToClimb / 3);

    return totalSmallJumps + totalBigJumps;
}