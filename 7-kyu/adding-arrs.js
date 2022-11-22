"use strict";

/**
 * solution 1
 * x = total chars in 2d arr
 * time: O(n * m)
 * space: O(n * m)
 * 
 * @param {string[][]} arr 
 * @returns {string}
 */
function arrAdder(arr) {
    let res = "";

    for (let i = 0; i < arr[0].length; i++) {
        for (let j = 0; j < arr.length; j++) {
            const char = arr[j][i];
            res += char;
        }

        // add a space between words
        res += " ";
    }

    return res.trim();
}

const arr = [["J","L","L","M"]
,["u","i","i","a"]
,["s","v","f","n"]
,["t","e","e",""]];

console.log( arrAdder(arr) ); // "Just Live Life Man"
