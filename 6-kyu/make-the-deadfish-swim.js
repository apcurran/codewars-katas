"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} data
 * @returns {number[]}
 */
function parse(data) {
    let resArr = [];
    let currNum = 0;

    for (let char of data) {
        if (char === "i") {
            currNum++;
        } else if (char === "d") {
            currNum--;
        } else if (char === "s") {
            currNum = currNum * currNum;
        } else if (char === "o") {
            resArr.push(currNum);
        }
    }

    return resArr;
}

console.log(parse("iiisdoso")); // [8, 64]
