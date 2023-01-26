"use strict";

/**
 * solution 1
 * n = str1 length
 * m = str2 length
 * time: O(n^2 * m)
 * space: O(n + m)
 * 
 * @param {string} str1 
 * @param {string} str2 
 * @returns {boolean}
 */
function SubstringTest(str1, str2) {
    const lowerStr1 = str1.toLowerCase();
    const lowerStr2 = str2.toLowerCase();

    for (let i = 0; i < lowerStr1.length; i++) {

        let subString = "";

        for (let j = i; j < lowerStr1.length; j++) {
            const letter = lowerStr1[j];
            subString += letter;

            const str2ContainsSubString = lowerStr2.includes(subString);

            if (str2ContainsSubString && subString.length > 1) {
                return true;
            }
        }
    }

    return false;
}

console.log( SubstringTest("Something","Home") ); // true
console.log( SubstringTest("Something","Fun") ); // false
