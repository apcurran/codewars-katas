"use strict";

// /**
//  * solution 1 -- brute-force TLE
//  * time: O((a * b) + (a * c))
//  * space: O(1)
//  * 
//  * @param {number[]} a 
//  * @param {number[]} b 
//  * @param {number[]} c 
//  * @returns {number} sum of elements common to all three arrs
//  */
// function common(a, b, c) {
//     let sum = 0;

//     for (let i = 0; i < a.length; i++) {
//         const aValue = a[i];
//         const bIncludesIndex = b.indexOf(aValue);
//         const cIncludesIndex = c.indexOf(aValue);

//         if (bIncludesIndex > -1 && cIncludesIndex > -1) {
//             sum += aValue;

//             // replace value with 0 (does not affect sum now) for b and c arrs
//             b[bIncludesIndex] = 0;
//             c[cIncludesIndex] = 0;
//         }
//     }

//     return sum;
// }

/**
 * solution 2 -- brute-force TLE
 * time: O((a * log a) + (b * log b) + (c * log c))
 * space: O(a + b + c) -- sort method is O(n)
 * 
 * @param {number[]} a 
 * @param {number[]} b 
 * @param {number[]} c 
 * @returns {number} sum of elements common to all three arrs
 */
function common(a, b, c) {
    a.sort((a, b) => a - b);
    b.sort((a, b) => a - b);
    c.sort((a, b) => a - b);

    let i = 0;
    let j = 0;
    let k = 0;
    let sum = 0;

    while (i < a.length && j < b.length && k < c.length) {
        if (a[i] === b[j] && a[i] === c[k]) {
            sum += a[i];
            // move pointers
            i++;
            j++;
            k++;
        } else if (a[i] < b[j]) {
            i++;
        } else if (b[j] < c[k]) {
            j++;
        } else {
            k++;
        }
    }

    return sum;
}

console.log(common([1,2,3],[5,3,2],[7,3,2])); // 5 (2 + 3)
console.log(common([1,2,2,3],[5,3,2,2],[7,3,2,2])); // 7 (2 + 2 + 3)
