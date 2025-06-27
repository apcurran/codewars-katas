"use strict";

/**
 * Each exclamation mark's weight is 2;
 * each question mark's weight is 3.
 * Putting two strings left and right on the balance - are they balanced?
 * 
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {string} left 
 * @param {string} right 
 * @returns {string} - "Left", "Right", or "Balance"
 */
function balance(left, right) {
    const splitLeftStrArr = left.split("");
    const splitRightStrArr = right.split("");
    let leftStrScore = 0;
    let rightStrScore = 0;

    for (let char of splitLeftStrArr) {
        if (char === "!") {
            leftStrScore += 2;
        } else {
            leftStrScore += 3;
        }
    }

    for (let char of splitRightStrArr) {
        if (char === "!") {
            rightStrScore += 2;
        } else {
            rightStrScore += 3;
        }
    }
    
    if (leftStrScore > rightStrScore) {
        return "Left";
    } else if (rightStrScore > leftStrScore) {
        return "Right";
    } else {
        return "Balance";
    }
}

console.log( balance("!!", "??") ); // 4 < 6 -> "Right"
console.log( balance("!??", "?!!") ); // "Left"
console.log( balance("!?!!", "?!?") ); // "Left"
