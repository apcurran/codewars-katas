"use strict";

/** 
 * @typedef {Object} Item
 * @property {string} type - the type of the item
 * @property {string} material - the primary material of the item
 * @property {string} [secondMaterial] - the secondary material of the item (optional)
 */

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {Item[]} items 
 * @returns {string[][]}
 */
function recycle(items) {
    let paperItems = [];
    let glassItems = [];
    let organicItems = [];
    let plasticItems = [];

    for (let item of items) {
        if (item.material === "paper" || item.secondMaterial === "paper") {
            paperItems.push(item.type);
        }
        
        if (item.material === "glass" || item.secondMaterial === "glass") {
            glassItems.push(item.type);
        }
        
        if (item.material === "organic" || item.secondMaterial === "organic") {
            organicItems.push(item.type);
        }
        
        if (item.material === "plastic" || item.secondMaterial === "plastic") {
            plasticItems.push(item.type);
        }
    }

    return [
        paperItems,
        glassItems,
        organicItems,
        plasticItems,
    ];
}

const input = [
    { "type": "rotten apples", "material": "organic" },
    { "type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic" },
    { "type": "wine bottle", "material": "glass", "secondMaterial": "paper" },
    { "type": "amazon box", "material": "paper" },
    { "type": "beer bottle", "material": "glass", "secondMaterial": "paper" },
];
console.log(recycle(input));
// [
//     ["wine bottle", "amazon box", "beer bottle"],
//     ["wine bottle", "beer bottle"],
//     ["rotten apples", "out of date yogurt"],
//     ["out of date yogurt"]
// ];
