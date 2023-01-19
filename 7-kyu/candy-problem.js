"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} kidsCandies 
 */
function candies(kidsCandies) {
    if (kidsCandies.length <= 1) return -1;

    const maxKidCandy = Math.max(...kidsCandies);
    let candyCounter = 0;

    for (let kidsCandy of kidsCandies) {
        const candyDifference = maxKidCandy - kidsCandy;
        candyCounter += candyDifference;
    }

    return candyCounter;
}

console.log( candies([5,8,6,4]) ); // 9
