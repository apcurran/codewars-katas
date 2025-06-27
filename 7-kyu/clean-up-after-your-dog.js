"use strict";

/**
 * solution 1
 * n = total gardenSpaces in arr
 * time: O(n)
 * space: O(n) -- array.flat() call creates a new array
 * 
 * @param {string[][]} arr 
 * @param {number} bags 
 * @param {number} cap 
 * @returns {string}
 */
function crap(arr, bags, cap) {
    const totalCapacity = bags * cap;
    const flattenedArray = arr.flat();
    let presentsCount = 0;

    for (let gardenSpace of flattenedArray) {
        if (gardenSpace === "@") {
            presentsCount++;
        } else if (gardenSpace === "D") {
            return "Dog!!";
        }
    }

    return presentsCount > totalCapacity ? "Cr@p" : "Clean";
}

console.log(crap([["_", "_", "_", "_"], ["_", "_", "_", "@"], ["_", "_", "@", "_"]], 2, 2));
// "Clean"
