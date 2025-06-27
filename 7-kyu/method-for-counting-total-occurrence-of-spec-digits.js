"use strict";

function List() {
    /**
     * solution 1
     * n = integers list length
     * m = integer digits length
     * d = digits list length
     * time: O(n * m + d)
     * space: O(n + m)
     *
     * @param {number[]} integersList
     * @param {number[]} digitsList
     * @returns {number[][]}
     */
    this.countSpecDigits = function (integersList, digitsList) {
        let numsCache = new Map();

        for (let num of integersList) {
            const numDigitsStrs = String(num).split("");

            for (let digitStr of numDigitsStrs) {
                // skip negative symbols
                if (digitStr === "-") continue;

                const digitNum = Number(digitStr);
                const previousNumCount = numsCache.get(digitNum) || 0;
                numsCache.set(digitNum, previousNumCount + 1);
            }
        }

        let results = [];

        for (let num of digitsList) {
            const numCount = numsCache.get(num) || 0;
            const numTuple = [num, numCount];
            results.push(numTuple);
        }

        return results;
    };
}

const l = new List();

const integersList = [-18, -31, 81, -19, 111, -888];
const digitsList = [1, 8, 4];
console.log(l.countSpecDigits(integersList, digitsList)); // [[1, 7], [8, 5], [4, 0]]
