"use strict";

// /**
//  * solution 1
//  * time: O(n) -- .toFixed() converts to string
//  * space: O(n) -- .toFixed() call
//  *
//  * @param {number} diameter
//  * @param {number} price
//  * @returns {number}
//  */
// function pizzaPrice(diameter, price) {
//     if (!diameter || typeof diameter !== "number" ||
//         !price || typeof price !== "number") {
//         return 0;
//     }

//     const areaOfPizza = Math.PI * ((diameter / 2) ** 2);

//     return Number((price / areaOfPizza).toFixed(2)); // cost per square inch
// }

/**
 * solution 2
 * time: O(1)
 * space: O(1)
 *
 * @param {number} diameter
 * @param {number} price
 * @returns {number}
 */
function pizzaPrice(diameter, price) {
    if (!diameter || typeof diameter !== "number" || !price || typeof price !== "number") {
        return 0;
    }

    const areaOfPizza = Math.PI * (diameter / 2) ** 2;
    const pricePerSquareInchRoundedTwoDecimals = Math.round(100 * (price / areaOfPizza)) / 100;

    return pricePerSquareInchRoundedTwoDecimals;
}

console.log(pizzaPrice(7, 4.3)); // 0.11
