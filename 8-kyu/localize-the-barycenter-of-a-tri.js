"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @returns {number[]}
 */
function barTriang(p1, p2, p3) {
    const barcenterX = (p1[0] + p2[0] + p3[0]) / 3;
    const barcenterY = (p1[1] + p2[1] + p3[1]) / 3;
    const barcenterXRounded = Number(barcenterX.toFixed(4));
    const barcenterYRounded = Number(barcenterY.toFixed(4));

    return [barcenterXRounded, barcenterYRounded];
}

console.log(barTriang([4, 6], [12, 4], [10, 10])); // [8.6667, 6.6667]
