"use strict";

/**
 * solution 1
 * time: O(n * m)
 * 
 * @param {string[][]} input 
 * @returns {number[]}
 */
function xMarksTheSpot(input) {
    let xAppearanceCount = 0;
    let resArr = [];
    
    for (let i = 0; i < input.length; i++) {
        const row = input[i];
        const xIndex = row.indexOf("x");
        
        if (xIndex > -1) {
            // record
            resArr.push(i, xIndex);
            xAppearanceCount++;
        }
    }
    
    // return [] if x is not inside arr or if x appears mult times
    if (xAppearanceCount > 1 || xAppearanceCount === 0) return [];

    return resArr;
}

console.log( xMarksTheSpot([
    ["x", "o"],
    ["o", "o"]
]) ); // [0, 0]

console.log( xMarksTheSpot([
    ["o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "x", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o"]
]) ); // [4, 6]

console.log( xMarksTheSpot([
    ["o", "o"],
    ["o", "o"]
]) ); // []


