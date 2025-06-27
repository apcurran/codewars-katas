"use strict";

/**
 * solution 1
 * time: O(n * log n) linear time for iteration of nums, log time for getCollatzLength() func
 * space: O(1) -- constant amount of variables used, no external data structures
 *
 * @param {number[]} nums
 * @returns {number} num with longest collatz sequence (that comes first if equal to another)
 */
function longestCollatz(nums) {
    let longestCollatzNum = -Infinity;
    let longestCollatzNumLength = -1;

    for (let num of nums) {
        const currentNumCollatzLength = getCollatzLength(num);

        if (currentNumCollatzLength > longestCollatzNumLength) {
            longestCollatzNum = num;
            longestCollatzNumLength = currentNumCollatzLength;
        }
    }

    return longestCollatzNum;
}

console.log(longestCollatz([1, 5, 27, 4])); // 27
console.log(longestCollatz([64, 64, 27, 64])); // 27
console.log(longestCollatz([75, 226, 113, 340])); // 75
console.log(longestCollatz([340, 113, 226, 75])); // 75
console.log(longestCollatz([75, 113, 226, 75])); // 75

/**
 * @param {number} num
 * @returns {number}
 */
function getCollatzLength(num) {
    let counter = 0;

    while (num !== 1) {
        if (num % 2 === 0) {
            // even num
            num /= 2;
        } else {
            num = 3 * num + 1;
        }

        counter++;
    }

    return counter;
}
