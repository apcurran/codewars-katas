"use strict";

/**
 * Solution 1
 * Time: O(n*m)
 * Space: O(n+m)
 * 
 * @param {string} str 
 * @returns {string}
 */
function explode(str) {
    let resStr = "";

    for (let strNum of str) {
        const repeatedStrNum = strNum.repeat(Number(strNum));
        resStr += repeatedStrNum;
    }

    return resStr;
}

console.log( explode("312") ); // "333122"
