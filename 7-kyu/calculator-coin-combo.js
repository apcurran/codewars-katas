"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} cents 
 * @returns {[number, number, number, number]} [pennies, nickels, dimes, quarters]
 */
function coinCombo(cents) {
    let penniesCount = 0;
    let nickelsCount = 0;
    let dimesCount = 0;
    let quartersCount = 0;

    while (cents !== 0) {
        if (cents / 25 >= 1) {
            const quarters = Math.floor(cents / 25);
            quartersCount += quarters;
            cents = cents % 25;
        } else if (cents / 10 >= 1) {
            const dimes = Math.floor(cents / 10);
            dimesCount += dimes;
            cents = cents % 10;
        } else if (cents / 5 >= 1) {
            const nickels = Math.floor(cents / 5);
            nickelsCount += nickels;
            cents = cents % 5;
        } else if (cents / 1 >= 1) {
            const pennies = Math.floor(cents / 1);
            penniesCount += pennies;
            cents = cents % 1;
        }
    }

    return [penniesCount, nickelsCount, dimesCount, quartersCount];
}

console.log(coinCombo(6)); // [1, 1, 0, 0]
