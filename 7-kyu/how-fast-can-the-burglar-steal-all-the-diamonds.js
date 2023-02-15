"use strict";

/**
 * solution 1
 * n = locker length (num of rows)
 * m = row str length
 * time: O(n * m)
 * space: O(1)
 * 
 * @param {string[]} locker 
 * @returns {number}
 */
function diamondBurglar(locker) {
    let totalRepsToStealDiamonds = 0;

    for (let row of locker) {
        for (let i = 0; i < row.length; i++) {
            const isCurrentCharADiamond = row[i] === "*";
            const isNextCharADiamond = row[i + 1] === "*";

            if (isCurrentCharADiamond) {
                if (isNextCharADiamond) i += 1;

                totalRepsToStealDiamonds += 1;
            }
        }
    }

    return totalRepsToStealDiamonds;
}

console.log(diamondBurglar(
    [
        "*.*.*.*.*.",
        "...*..**..",
        "**.**...*.",
        "**..**..**"
    ]
)); // 13
