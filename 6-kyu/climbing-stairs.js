"use strict";

// /**
//  * solution 1 -- dynamic programming (with mutation of input)
//  * time: O(n)
//  * space: O(1)
//  * 
//  * @param {number[]} cost 
//  * @returns {number}
//  */
// function climbingStairs(cost) {
//     for (let i = 2; i < cost.length; i++) {
//         const singleJumpCost = cost[i - 1];
//         const doubleJumpCost = cost[i - 2];
//         cost[i] += Math.min(singleJumpCost, doubleJumpCost);
//     }

//     return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
// }

/**
 * solution 2 -- dynamic programming (no mutation of input)
 * time: O(n)
 * space: O(n) -- dp cache
 * 
 * @param {number[]} cost 
 * @returns {number}
 */
function climbingStairs(cost) {
    let dpCache = new Array(cost.length);
    dpCache[0] = cost[0];
    dpCache[1] = cost[1];

    for (let i = 2; i < cost.length; i++) {
        const singleJumpCost = dpCache[i - 1];
        const doubleJumpCost = dpCache[i - 2];
        dpCache[i] = cost[i] + Math.min(singleJumpCost, doubleJumpCost);
    }

    return Math.min(dpCache[dpCache.length - 1], dpCache[dpCache.length - 2]);
}

console.log(climbingStairs([0, 2, 2, 1])); // 2
console.log(climbingStairs([0, 2, 3, 2])); // 3
console.log(climbingStairs([10, 15, 20])); // 15
