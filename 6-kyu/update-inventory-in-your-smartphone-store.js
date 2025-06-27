"use strict";

/** @typedef {[number, string]} item */

/**
 * solution 1
 * n = newStock array
 * m = curStock array
 * time: O(n * m + (n * log n))
 * space: O(m + n)
 *
 * @param {item[]} curStock
 * @param {item[]} newStock
 * @returns {item[]} sorted alpha by item name
 */
function updateInventory(curStock, newStock) {
    const collator = new Intl.Collator("en");
    let results = curStock.slice();
    // iterate newStock array
    outerLoop: for (let [newItemCount, newItemName] of newStock) {
        // check if current new stock item is in array
        for (let i = 0; i < results.length; i++) {
            const itemName = results[i][1];

            if (itemName === newItemName) {
                // if yes, then add count
                results[i][0] += newItemCount;

                continue outerLoop;
            }
        }
        // if no, then add full item to current stock array
        results.push([newItemCount, newItemName]);
    }
    return results.sort(function sortByAlphaName(itemA, itemB) {
        // sort results by alpha name
        return collator.compare(itemA[1], itemB[1]);
    });
}

const currentStock = [
    [25, "HTC"],
    [1000, "Nokia"],
    [50, "Samsung"],
    [33, "Sony"],
    [10, "Apple"],
];
const newStock = [
    [5, "LG"],
    [10, "Sony"],
    [4, "Samsung"],
    [5, "Apple"],
];
console.log(updateInventory(currentStock, newStock));
// [
//     [15, "Apple"],
//     [25, "HTC"],
//     [5, "LG"],
//     [1000, "Nokia"],
//     [54, "Samsung"],
//     [43, "Sony"],
// ];
