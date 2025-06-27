"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {any[]} list
 * @returns {[number, string]}
 */
function mean(list) {
    let sum = 0;
    let letters = "";

    for (let value of list) {
        const numValue = Number(value);

        if (Number.isNaN(numValue)) {
            letters += value;
        } else {
            sum += numValue;
        }
    }

    const mean = sum / 10;

    return [mean, letters];
}

console.log(
    mean([
        "u",
        "6",
        "d",
        "1",
        "i",
        "w",
        "6",
        "s",
        "t",
        "4",
        "a",
        "6",
        "g",
        "1",
        "2",
        "w",
        "8",
        "o",
        "2",
        "0",
    ]),
);
// [3.6, "udiwstagwo"]
