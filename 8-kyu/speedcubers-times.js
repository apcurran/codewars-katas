"use strict";

/**
 *
 * @param {array} times
 * @returns {array} - an array containing the speedcuber's avg time to two decimal places (highest and lowest removed), and the second elem is the fastest (smallest) time
 */
function cubeTimes(times) {
    const sortedTimes = [...times].sort((a, b) => a - b);
    // Mutate sortedTimes array to remove min and max vals
    const minTime = sortedTimes.shift();
    sortedTimes.pop();
    // Calc avgTime with min and max times removed
    const avgTime = +(
        sortedTimes.reduce((total, currNum) => total + currNum, 0) / 3
    ).toFixed(2);

    return [avgTime, minTime];
}

console.log(cubeTimes([9.5, 7.6, 11.4, 10.5, 8.1])); // [9.37, 7.6]
