"use strict";

/**
 * solution 1
 * n = a to b list
 * m = binaryStr of each num
 * time: O(n * m)
 * space: O(m)
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function rangeBitCount(a, b) {
    let totalOneBitsCount = 0;

    for (let i = a; i <= b; i++) {
        const binaryNum = i.toString(2);
        let binaryNumOneBitsCount = 0;

        for (let digitStr of binaryNum) {
            if (digitStr === "1") binaryNumOneBitsCount++;
        }

        totalOneBitsCount += binaryNumOneBitsCount;
    }

    return totalOneBitsCount;
}

console.log(rangeBitCount(2, 7)); // 11
console.log(rangeBitCount(0, 1)); // 1
console.log(rangeBitCount(4, 4)); // 1
