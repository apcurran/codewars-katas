"use strict";

// /**
//  * solution 1
//  * time: O(n) -- string conversion
//  * space: O(n) -- string conversion
//  *
//  * @param {number} discountedPrice
//  * @param {number} salePercentage
//  * @returns {number}
//  */
// function discoverOriginalPrice(discountedPrice, salePercentage) {
//     const originalPrice = discountedPrice / (1 - (salePercentage / 100));

//     return Number(originalPrice.toFixed(2));
// }

/**
 * solution 2 -- number manipulation to get O(1) time
 * time: O(1)
 * space: O(1)
 *
 * @param {number} discountedPrice
 * @param {number} salePercentage
 * @returns {number}
 */
function discoverOriginalPrice(discountedPrice, salePercentage) {
    const originalPrice =
        Math.round((discountedPrice / (1 - salePercentage / 100)) * 100) / 100;

    return originalPrice;
}

console.log(discoverOriginalPrice(75, 25)); // 100
console.log(discoverOriginalPrice(25, 75)); // 100
console.log(discoverOriginalPrice(75.75, 25)); // 101
