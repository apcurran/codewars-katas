"use strict";

/**
 * solution 1
 * time: O(1) -- technically bounded (letters can't be more than VALID_LETTERS nums <= 60)
 * space: O(1)
 * 
 * @param {string} a 
 * @returns {string}
 */
function planeSeat(a) {
    const VALID_LETTERS = "ABCDEFGHK";
    const CLUSTER_LEFT = "ABC";
    const CLUSTER_MIDDLE = "DEF";
    const CLUSTER_RIGHT = "GHK";
    const matchNumbersAndLetters = /[a-zA-Z]+|[0-9]+/g;
    const [num, letter] = a.match(matchNumbersAndLetters);
    
    // no valid numbers less than 0 or greater than 60
    if (!VALID_LETTERS.includes(letter) || num < 0 || num > 60) {
        return "No Seat!!";
    }

    let section = "";
    
    if (num >= 1 && num <= 20) {
        section = "Front";
    } else if (num > 20 && num <= 40) {
        section = "Middle";
    } else if (num >= 40 && num <= 60) {
        section = "Back";
    }
    
    let cluster = "";

    if (CLUSTER_LEFT.includes(letter)) {
        cluster = "Left";
    } else if (CLUSTER_MIDDLE.includes(letter)) {
        cluster = "Middle";
    } else if (CLUSTER_RIGHT.includes(letter)) {
        cluster = "Right";
    }

    return `${section}-${cluster}`;
}

console.log(planeSeat("2B")); // "Front-Left"
console.log(planeSeat("20B")); // "Front-Left"
console.log(planeSeat("58I")); // "No Seat!!"
