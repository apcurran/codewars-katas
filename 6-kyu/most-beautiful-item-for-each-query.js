"use strict";

// /**
//  * solution 1 -- brute force, TLE
//  * n = queries length
//  * m = items length
//  * time: O(n * m)
//  * space: O(n)
//  * 
//  * @param {number[][]} items
//  * @param {number[]} queries
//  * @return {number[]}
//  */
// function maximumBeauty(items, queries) {
//     let maxBeauties = [];

//     for (let query of queries) {
//         let currentMaxBeautyValue = 0; // default value based on problem description

//         for (let [itemPrice, itemBeauty] of items) {
//             // get item with price <= current query
//             // obtain max beauty for an item with above criteria
//             if (itemPrice <= query) {
//                 currentMaxBeautyValue = Math.max(currentMaxBeautyValue, itemBeauty);
//             }
//         }
//         // add this max amount to results
//         maxBeauties.push(currentMaxBeautyValue);
//     }

//     return maxBeauties;
// }

/**
 * solution 2 -- sort & binary search
 * time: O((m + n) * log m)
 * space: O(n + m)
 * 
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
function maximumBeauty(items, queries) {
    items.sort(function sortByPrice(itemA, itemB) {
        const itemAPrice = itemA[0];
        const itemBPrice = itemB[0];
        
        return itemAPrice - itemBPrice;
    });
    
    let priceBeauties = [];
    let maxBeauty = 0;

    for (let [price, beauty] of items) {
        maxBeauty = Math.max(maxBeauty, beauty);
        priceBeauties.push([price, maxBeauty]);
    }

    return queries.map(function getMaxBeauties(query) {
        let left = 0;
        let right = priceBeauties.length - 1;

        while (left <= right) {
            const midIndex = left + Math.floor((right - left) / 2);
            const midPrice = priceBeauties[midIndex][0];

            if (midPrice <= query) {
                left = midIndex + 1;
            } else {
                right = midIndex - 1;
            }
        }

        if (right >= 0) {
            const beautyVal = priceBeauties[right][1];

            return beautyVal;
        } else {
            return 0;
        }
    });
}

console.log(maximumBeauty([[1, 2], [3, 2], [2, 4], [5, 6], [3, 5]], [1, 2, 3, 4, 5, 6]));
// [2,4,5,5,6,6]
console.log(maximumBeauty([[1, 2], [1, 2], [1, 3], [1, 4]], [1]));
// [4]
