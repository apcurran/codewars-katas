"use strict";

/**
 * solution 1 -- brute-force TLE
 * time: O(a * b + a * c)
 * space: O(1)
 * 
 * @param {number[]} a 
 * @param {number[]} b 
 * @param {number[]} c 
 * @returns {number} sum of elements common to all three arrs
 */
function common(a, b, c) {
    let sum = 0;

    for (let i = 0; i < a.length; i++) {
        const aValue = a[i];
        const bIncludesIndex = b.indexOf(aValue);
        const cIncludesIndex = c.indexOf(aValue);

        if (bIncludesIndex > -1 && cIncludesIndex > -1) {
            sum += aValue;

            // remove value from b and c arrs
            b.splice(bIncludesIndex, 1);
            c.splice(cIncludesIndex, 1);
        }
    }

    return sum;
}

console.log(common([1,2,3],[5,3,2],[7,3,2])); // 5 (2 + 3)
console.log(common([1,2,2,3],[5,3,2,2],[7,3,2,2])); // 7 (2 + 2 + 3)
