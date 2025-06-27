"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(1)
 *
 * @param {number} m
 * @param {number} n
 * @returns {number}
 */
function S2N(m, n) {
    let sum = 0;

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            const poweredValue = j ** i;
            sum += poweredValue;
        }
    }

    return sum;
}

console.log(S2N(2, 3)); // 20
console.log(S2N(3, 5)); // 434
