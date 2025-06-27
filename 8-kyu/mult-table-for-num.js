"use strict";

/**
 * solution 1
 * time: O(1) -- technically the same time/string length no matter the input
 * space: O(1)
 *
 * @param {number} number
 * @returns {string}
 */
function multiTable(number) {
    let tableStrs = [];

    for (let i = 1; i <= 10; i++) {
        const multValue = i * number;
        const multStr = `${i} * ${number} = ${multValue}`;
        tableStrs.push(multStr);
    }

    return tableStrs.join("\n");
}

console.log(multiTable(5));
// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
