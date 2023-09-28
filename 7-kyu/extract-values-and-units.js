"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {String} str 
 * @returns {{ val: Number, units: String }}
 */
function valAndUnits(str) {
    const value = parseFloat(str);
    let unit = "";

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const coercedChar = Number(char);

        if (char === "-" || char === ".") {
            continue;
        }

        if (Number.isNaN(coercedChar)) {
            // this is a string character
            unit += char;
        }
    }

    return {
        val: value,
        units: unit
    };
}

console.log(valAndUnits("12px")); // { val: 12, units: "px" }
console.log(valAndUnits("-1rem")); // { val: -1, units: "rem" }
console.log(valAndUnits("12.5kg")); // { val: 12.5, units: "kg" }
