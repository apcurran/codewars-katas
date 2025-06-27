"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number} newspapers
 * @returns {number}
 */
function cheapestQuote(newspapers) {
    let newspapersCount = newspapers;
    let totalPrice = 0;

    while (newspapersCount > 0) {
        if (newspapersCount / 40 >= 1) {
            const bundlesOf40 = Math.floor(newspapersCount / 40);
            const bundlesOf40Cost = bundlesOf40 * 3.85;
            totalPrice += bundlesOf40Cost;

            // update newspapers count
            newspapersCount = newspapersCount % 40;
        } else if (newspapersCount / 20 >= 1) {
            const bundlesOf20 = Math.floor(newspapersCount / 20);
            const bundlesOf20Cost = bundlesOf20 * 1.93;
            totalPrice += bundlesOf20Cost;

            newspapersCount = newspapersCount % 20;
        } else if (newspapersCount / 10 >= 1) {
            const bundlesOf10 = Math.floor(newspapersCount / 10);
            const bundlesOf10Cost = bundlesOf10 * 0.97;
            totalPrice += bundlesOf10Cost;

            newspapersCount = newspapersCount % 10;
        } else if (newspapersCount / 5 >= 1) {
            const bundlesOf5 = Math.floor(newspapersCount / 5);
            const bundlesOf5Cost = bundlesOf5 * 0.49;
            totalPrice += bundlesOf5Cost;

            newspapersCount = newspapersCount % 5;
        } else {
            const bundlesOf1 = Math.floor(newspapersCount / 1);
            const bundlesOf1Cost = bundlesOf1 * 0.1;
            totalPrice += bundlesOf1Cost;

            newspapersCount = newspapersCount % 1;
        }
    }

    return Math.round(totalPrice * 100) / 100;
}

console.log(cheapestQuote(40)); // 3.85
console.log(cheapestQuote(20)); // 1.93
console.log(cheapestQuote(10)); // 0.97
console.log(cheapestQuote(5)); // 0.49
console.log(cheapestQuote(1)); // 0.10
console.log(cheapestQuote(41)); // 3.95
