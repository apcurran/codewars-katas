"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} data
 * @returns {string}
 */
function countMe(data) {
    const hasNonNumeric = /[^0-9]/g.test(data);
    let result = "";

    if (hasNonNumeric) return result;

    let intCounter = 1;

    for (let i = 0; i < data.length; i++) {
        const currentInt = data[i];
        const nextValue = data[i + 1];

        if (nextValue === currentInt) {
            intCounter++;
        } else {
            const chunk = `${intCounter}${currentInt}`;
            result += chunk;
            // reset counter
            intCounter = 1;
        }
    }

    return result;
}

console.log(countMe("1123")); // "211213"
console.log(countMe("123a")); // ""
console.log(countMe("1211")); // '111221'
console.log(countMe("12322212223443")); // '111213321132132413'
