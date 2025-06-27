"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} arr
 * @returns {{ pos: number[], peaks: number[] }}
 */
function pickPeaks(arr) {
    let results = {
        pos: [],
        peaks: [],
    };

    if (arr.length <= 2) {
        return results;
    }

    // otherwise,
    let lastPosition = -1;

    for (let i = 1; i < arr.length; i++) {
        // current is bigger than previous
        if (arr[i] > arr[i - 1]) {
            lastPosition = i;
        } else if (arr[i] < arr[i - 1] && lastPosition !== -1) {
            results.pos.push(lastPosition);
            results.peaks.push(arr[lastPosition]);
            lastPosition = -1;
        }
    }

    return results;
}

console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]));
// {
//     pos: [3, 7],
//     peaks: [6, 3]
// }
