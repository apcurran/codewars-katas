"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} name
 * @returns {number}
 */
function getWeight(name) {
    let totalWeight = 0;

    for (let char of name) {
        const charCode = char.charCodeAt(0);

        if (charCode >= 65 && charCode <= 90) {
            const adjustedCharCodeValue = charCode + 32;
            totalWeight += adjustedCharCodeValue;
        } else if (charCode >= 97 && charCode <= 122) {
            const adjustedCharCodeValue = charCode - 32;
            totalWeight += adjustedCharCodeValue;
        }
    }

    return totalWeight;
}

console.log(getWeight("Joe")); // 254
console.log(getWeight("CJ")); // 205
console.log(getWeight("cj")); // 141
