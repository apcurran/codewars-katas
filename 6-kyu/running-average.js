"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @returns {function}
 */
function runningAverage() {
    let numsCount = 0;
    let sum = 0;

    /**
     * @param {number} value 
     * @returns {number} average of all values
     */
    function getAverage(value) {
        sum += value;
        numsCount++;

        // calc avg
        return Number((sum / numsCount).toFixed(2));
    }

    return getAverage;
}

const rAvg = runningAverage();
console.log(rAvg(10)); // 10.0;
console.log(rAvg(11)); // 10.5;
console.log(rAvg(12)); // 11;

