"use strict";

/**
 * solution 1 -- math formula
 * time: O(1)
 * space: O(1)
 *
 * @param {number} presents
 * @returns {number}
 */
function reindeers(presents) {
    if (presents > 180) throw new Error("Too many presents");

    const SANTA_AND_SLEIGH_DEER = 2;
    const PRESENTS_PER_DEER = 30;

    return Math.ceil(presents / PRESENTS_PER_DEER) + SANTA_AND_SLEIGH_DEER;
}

console.log(reindeers(0)); // 2
console.log(reindeers(1)); // 3
console.log(reindeers(30)); // 3
console.log(reindeers(45)); // 4
console.log(reindeers(200)); // Error
