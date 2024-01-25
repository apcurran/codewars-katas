"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string[]} actions 
 * @returns {string}
 */
function whatListAmIOn(actions) {
    let naughtyCount = 0;
    let niceCount = 0;

    for (let action of actions) {
        const beginningLetter = action[0];

        if (beginningLetter === "b" ||
            beginningLetter === "f" ||
            beginningLetter === "k") {
            naughtyCount++;
        }

        if (beginningLetter === "g" ||
            beginningLetter === "s" ||
            beginningLetter === "n") {
            niceCount++;
        }
    }

    return naughtyCount >= niceCount ? "naughty" : "nice";
}

console.log(whatListAmIOn(["broke someone's window", "fought over a toaster", "killed a bug"]));
// "naughty"
console.log(whatListAmIOn(["got someone a new car", "saved a man from drowning", "never got into a fight"]));
// "nice"
console.log(whatListAmIOn(["broke a vending machine", "never got into a fight", "tied someone's shoes"]));
// "naughty"
