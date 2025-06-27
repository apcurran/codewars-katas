"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 *
 * @param {number} n
 * @returns {number}
 */
function procedure(n) {
    let multiplesOfN = [];

    for (let i = n; i <= 100; i += n) {
        multiplesOfN.push(i);
    }

    return multiplesOfN
        .map((num) => {
            return String(num)
                .split("")
                .reduce((sum, digit) => Number(sum) + Number(digit), 0);
        })
        .reduce((sum, num) => sum + num, 0);
}

console.log(procedure(30)); // 18
console.log(procedure(12)); // 72
console.log(procedure(49)); // 30
console.log(procedure(17)); // 48
console.log(procedure(10)); // 46
