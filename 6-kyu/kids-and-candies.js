"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(1)
 *
 * @param {number} kids
 * @returns {number}
 */
function candiesToBuy(kids) {
    let fewestCandiesCount = 1;

    for (let i = 2; i <= kids; i++) {
        fewestCandiesCount = lcm(fewestCandiesCount, i);
    }

    return fewestCandiesCount;
}

console.log(candiesToBuy(5)); // 60

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}
