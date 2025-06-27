"use strict";

/**
 * solution 1 -- hashmap
 * n = outer arr
 * m = temps inner array
 * time: O(n * m)
 * space: O(m) -- not including results array, just tempsFrequencies map
 *
 * @param {object} json
 * @returns {number[]}
 */
function getMostFrequent(json) {
    const twoDArray = json.temperature;
    let results = [];

    for (let arr of twoDArray) {
        let tempsFrequencies = new Map();

        for (let temp of arr) {
            const tempPreviousCount = tempsFrequencies.get(temp) || 0;
            tempsFrequencies.set(temp, tempPreviousCount + 1);
        }

        const maxFrequency = Math.max(...tempsFrequencies.values());

        for (let i = arr.length - 1; i >= 0; i--) {
            const temp = arr[i];
            const tempFreq = tempsFrequencies.get(temp);

            if (tempFreq === maxFrequency) {
                results.push(temp);

                break;
            }
        }
    }

    return results;
}

console.log(
    getMostFrequent({
        temperature: [
            [15, 17, 19, 21, 21, 21, 20, 16],
            [16, 17, 22, 22, 22, 22, 20, 16],
            [12, 17, 19, 20, 20, 20, 20, 18],
            [14, 15, 19, 19, 20, 22, 18, 17],
            [15, 17, 24, 24, 24, 20, 20, 20],
        ],
    }),
); // [21, 22, 20, 19, 20]
