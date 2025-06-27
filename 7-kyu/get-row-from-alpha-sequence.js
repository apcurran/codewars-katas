"use strict";

/**
 * solution 1 -- hashmap
 * time: O(1)
 * space: O(1)
 *
 * @param {number} n
 * @returns {string|undefined}
 */
function getRow(n) {
    const alphabetMap = new Map([
        [1, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
        [2, "BBCDEFGHIJKLMNOPQRSTUVWXYZ"],
        [3, "CCCDEFGHIJKLMNOPQRSTUVWXYZ"],
        [4, "DDDDEFGHIJKLMNOPQRSTUVWXYZ"],
        [5, "EEEEEFGHIJKLMNOPQRSTUVWXYZ"],
        [6, "FFFFFFGHIJKLMNOPQRSTUVWXYZ"],
        [7, "GGGGGGGHIJKLMNOPQRSTUVWXYZ"],
        [8, "HHHHHHHHIJKLMNOPQRSTUVWXYZ"],
        [9, "IIIIIIIIIJKLMNOPQRSTUVWXYZ"],
        [10, "JJJJJJJJJJKLMNOPQRSTUVWXYZ"],
        [11, "KKKKKKKKKKKLMNOPQRSTUVWXYZ"],
        [12, "LLLLLLLLLLLLMNOPQRSTUVWXYZ"],
        [13, "MMMMMMMMMMMMMNOPQRSTUVWXYZ"],
        [14, "NNNNNNNNNNNNNNOPQRSTUVWXYZ"],
        [15, "OOOOOOOOOOOOOOOPQRSTUVWXYZ"],
        [16, "PPPPPPPPPPPPPPPPQRSTUVWXYZ"],
        [17, "QQQQQQQQQQQQQQQQQRSTUVWXYZ"],
        [18, "RRRRRRRRRRRRRRRRRRSTUVWXYZ"],
        [19, "SSSSSSSSSSSSSSSSSSSTUVWXYZ"],
        [20, "TTTTTTTTTTTTTTTTTTTTUVWXYZ"],
        [21, "UUUUUUUUUUUUUUUUUUUUUVWXYZ"],
        [22, "VVVVVVVVVVVVVVVVVVVVVVWXYZ"],
        [23, "WWWWWWWWWWWWWWWWWWWWWWWXYZ"],
        [24, "XXXXXXXXXXXXXXXXXXXXXXXXYZ"],
        [25, "YYYYYYYYYYYYYYYYYYYYYYYYYZ"],
        [26, "ZZZZZZZZZZZZZZZZZZZZZZZZZZ"],
    ]);

    const index = n > 26 ? n % 26 : n;

    if (index === 0) {
        return alphabetMap.get(26);
    } else {
        return alphabetMap.get(index);
    }
}

console.log(getRow(1)); // "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(getRow(26)); // "ZZZZZZZZZZZZZZZZZZZZZZZZZZ"
console.log(getRow(15)); // "OOOOOOOOOOOOOOOPQRSTUVWXYZ"
console.log(getRow(27)); // "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
