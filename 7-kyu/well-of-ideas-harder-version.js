"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(1)
 * 
 * @param {string[][]} arr 
 * @returns {string}
 */
function well(arr){
    let goodCount = 0;

    for (let row = 0; row < arr.length; row++) {
        const currentRow = arr[row];

        for (let column = 0; column < currentRow.length; column++) {
            const value = currentRow[column];

            if (typeof value === "string" && value.toLowerCase() === "good") goodCount++;
        }
    }

    if (goodCount === 0) {
        return "Fail!";
    } else if (goodCount <= 2) {
        return "Publish!";
    } else {
        return "I smell a series!";
    }
}

console.log( well([["bad", "bAd", "bad"], ["bad", "bAd", "bad"], ["bad", "bAd", "bad"]]) ); // "Fail!"
console.log( well([["gOOd", "bad", "BAD", "bad", "bad"], ["bad", "bAd", "bad"], ["GOOD", "bad", "bad", "bAd"]]) ); // "Publish!"
console.log( well([["gOOd", "bAd", "BAD", "bad", "bad", "GOOD"], ["bad"], ["gOOd", "BAD"]]) ); // "I smell a series!"