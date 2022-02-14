"use strict";

/**
 * Solution 1
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number} n 
 * @returns {number}
 */
function doors(n) {
    let doorsArr = new Array(n + 1).fill(-1);

    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j += i) {
            doorsArr[j] = -doorsArr[j];
        }
    }

    return doorsArr
            .filter((num) => num > 0)
            .length;
}

console.log( doors(5) ); // 2
