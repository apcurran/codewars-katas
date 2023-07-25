"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} cost 
 * @returns {number}
 */
function climbingStairs(cost) {
    for (let i = 2; i < cost.length; i++) {
        const singleJumpCost = cost[i - 1];
        const doubleJumpCost = cost[i - 2];
        cost[i] += Math.min(singleJumpCost, doubleJumpCost);
    }

    return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
}

console.log(climbingStairs([0, 2, 2, 1])); // 2
console.log(climbingStairs([0, 2, 3, 2])); // 3
console.log(climbingStairs([10, 15, 20])); // 15
