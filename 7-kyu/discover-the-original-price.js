"use strict";

/**
 * solution 1 
 * time: O(n) -- string conversion
 * space: O(n) -- string conversion
 * 
 * @param {number} discountedPrice 
 * @param {number} salePercentage 
 * @returns {number}
 */
function discoverOriginalPrice(discountedPrice, salePercentage) {
    const originalPrice = discountedPrice / (1 - (salePercentage / 100));

    return Number(originalPrice.toFixed(2));
}

console.log( discoverOriginalPrice(75, 25) ); // 100
console.log( discoverOriginalPrice(25, 75) ); // 100
console.log( discoverOriginalPrice(75.75, 25) ); // 101
