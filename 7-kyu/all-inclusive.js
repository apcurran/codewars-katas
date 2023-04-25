"use strict";

/**
 * solution 1
 * n = str length
 * m = arr length
 * time: O((n^2) + (n * m))
 * space: O(n)
 * 
 * @param {string} str 
 * @param {string[]} arr 
 * @returns {boolean}
 */
function containAllRots(str, arr) {
    let letters = [...str];

    if (!arr.includes(str)) return false;

    for (let i = 0; i < str.length - 1; i++) {
        const endingLetter = letters.pop();
        letters.unshift(endingLetter);
        const updatedWord = letters.join("");

        if (!arr.includes(updatedWord)) return false;
    }

    return true;
}

console.log( containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) ); // true
console.log( containAllRots("Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) ); // false
