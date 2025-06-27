"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(n)
 * 
 * @param {number[][]} wall
 * @return {number}
 */
function leastBricks(wall) {
    let countGap = new Map();
    let globalMax = 0;

    for (let row of wall) {
        let total = 0;

        for (let j = 0; j < row.length - 1; j++) {
            total += row[j];
            const count = countGap.get(total) || 1;
            countGap.set(total, count + 1);
            globalMax = Math.max(globalMax, count);
        }
    }

    return wall.length - globalMax;
}

console.log( leastBricks([
    [1, 2, 2, 1],
    [3, 1, 2],
    [1, 3, 2],
    [2, 4],
    [3, 1, 2],
    [1, 3, 1, 1],
]) ); // 2

console.log( leastBricks([
    [1],
    [1],
    [1],
]) ); // 3

