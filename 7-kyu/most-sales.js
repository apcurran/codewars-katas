"use strict";

/**
 * solution 1 -- map & sort combo
 * time: O(n * log n) -- sorting
 * space: O(n)
 * 
 * @param {string[]} products 
 * @param {number[]} amounts 
 * @param {number[]} prices 
 * @returns {string[]} - top 3 product names ordered from highest revenue to lowest
 */
function top3(products, amounts, prices) {
    let productsWithRevenue = products.map(function mapNameWithRevenue(product, index) {
        const productRevenue = amounts[index] * prices[index];

        return {
            productName: product,
            productRevenue,
            index,
        };
    });

    return productsWithRevenue
        .sort(function sortByRevenue(productA, productB) {
            if (productA.productRevenue === productB.productRevenue) {
                return productA.index - productB.index;
            } else {
                return productB.productRevenue - productA.productRevenue;
            }
        })
        .slice(0, 3)
        .map(function getNamesOnly(productObj) {
            return productObj.productName;
        });
}

console.log(top3(["Computer", "Cell Phones", "Vacuum Cleaner"], [3, 24, 8], [199, 299, 399]));
// ["Cell Phones", "Vacuum Cleaner", "Computer"]
console.log(top3(["Cell Phones", "Vacuum Cleaner", "Computer", "Autos", "Gold", "Fishing Rods", "Lego", " Speakers"], [5, 25, 2, 7, 10, 3, 2, 24], [51, 225, 22, 47, 510, 83, 82, 124]));
// ['Vacuum Cleaner', 'Gold', ' Speakers']
