"use strict";

/**
 * solution 1
 * n = sections length
 * m = section length
 * time: O(n * m)
 * space: O(n)
 * 
 * @param {string} code 
 * @returns {string}
 */
function decrypt(code) {
    const sections = code.split(" ");
    const sectionValues = sections.map(function getSums(section) {
        const isDigit = /[0-9]/;
        let sum = 0;

        for (let char of section) {
            if (isDigit.test(char)) {
                sum += Number(char);
            }
        }

        return sum;
    });
    const charsMap = new Map([
        [0, " "],
        [1, "a"],
        [2, "b"],
        [3, "c"],
        [4, "d"],
        [5, "e"],
        [6, "f"],
        [7, "g"],
        [8, "h"],
        [9, "i"],
        [10, "j"],
        [11, "k"],
        [12, "l"],
        [13, "m"],
        [14, "n"],
        [15, "o"],
        [16, "p"],
        [17, "q"],
        [18, "r"],
        [19, "s"],
        [20, "t"],
        [21, "u"],
        [22, "v"],
        [23, "w"],
        [24, "x"],
        [25, "y"],
        [26, "z"],
    ]);

    let secretMessage = "";
    
    for (let value of sectionValues) {
        // if the num goes over 26
        const myValue = value > 26 ? (value % 27) : value;
        const char = charsMap.get(myValue);
        secretMessage += char;
    }

    return secretMessage;
}

console.log(decrypt("x20*6<xY y_r9L")); // "8 9" -> "hi"
console.log(decrypt("8S6 K00= 3Ob28W4")); // "n q"
console.log(decrypt("2@I51Rk 6@95I4R8k B23A1W6BZ O231I!W6BZ 3k&4E7h1")); // "hello"
