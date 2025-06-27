"use strict";

/**
 * time: O(n) -- charKeystrokes does not change in length, so fixed inner loop size
 * space: O(1)
 *
 * @param {string} str
 * @returns {number}
 */
function mobileKeyboard(str) {
    const charKeystrokes = new Map([
        ["0123456789*#", 1],
        ["adgjmptw", 2],
        ["behknqux", 3],
        ["cfilorvy", 4],
        ["sz", 5],
    ]);
    let totalKeystrokes = 0;

    for (let char of str) {
        // iterate over map keys
        for (let [charKeystrokeStr, charKeystrokeCount] of charKeystrokes) {
            if (charKeystrokeStr.includes(char)) {
                totalKeystrokes += charKeystrokeCount;
            }
        }
    }

    return totalKeystrokes;
}

console.log(mobileKeyboard("*#")); // 2
console.log(mobileKeyboard("123")); // 3
console.log(mobileKeyboard("abc")); // 9
