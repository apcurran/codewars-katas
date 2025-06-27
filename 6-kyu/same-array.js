"use strict";

/**
 * solution 1
 * a = aArr length
 * b = bArr length
 * time: O((a * log n) + (b * log b))
 * space: O(a + b)
 *
 * @param {number[][]} aArr
 * @param {number[][]} bArr
 * @returns
 */
function same(aArr, bArr) {
    // sort inner subarrays, then sort outer arrays holding subarrays
    const aOrdered = aArr.map((subArr) => subArr.sort()).sort();
    const bOrdered = bArr.map((subArr) => subArr.sort()).sort();

    return String(aOrdered) === String(bOrdered);
}

console.log(
    same(
        [
            [2, 5],
            [3, 6],
        ],
        [
            [5, 2],
            [3, 6],
        ],
    ),
); //  same -> true
