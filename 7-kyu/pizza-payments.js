"use strict";

/**
 * solution 1
 * time: O(n) -- string converion
 * space: O(n) -- string conversion
 *
 * @param {number} pizzaCost
 * @returns {number}
 */
function michaelPays(pizzaCost) {
    let michaelsCost = 0;

    if (pizzaCost < 5) {
        michaelsCost += pizzaCost;
    } else if (pizzaCost <= 30) {
        const katesPortion = pizzaCost * (1 / 3);

        michaelsCost += pizzaCost - katesPortion;
    } else {
        const katesMaxPortion = 10;

        michaelsCost += pizzaCost - katesMaxPortion;
    }

    return Number(michaelsCost.toFixed(2));
}

console.log(michaelPays(15)); // 10
console.log(michaelPays(4)); // 4
console.log(michaelPays(30)); // 20
console.log(michaelPays(80)); // 70
console.log(michaelPays(22)); // 14.67
console.log(michaelPays(5.9181)); // 3.95
console.log(michaelPays(28.789)); // 19.19
console.log(michaelPays(4.325)); // 4.33
