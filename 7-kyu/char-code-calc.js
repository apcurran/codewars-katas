"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str
 * @returns {number}
 */
function calc(str) {
    // take str and convert each char to ASCII code (total1)
    const total1StrArr = [...str]
                            .map((letter) => letter.charCodeAt(0))
                            .join("");
    // replace 7s with 1s (store as total2)
    const total2StrArr = total1StrArr.replace(/7/g, "1");
    
    // sum digits of total1 and sub from sum total2
    const total1Num = total1StrArr
                        .split("")
                        .reduce((strDigit, sum) => Number(sum) + Number(strDigit), 0);

    const total2Num = total2StrArr
                        .split("")
                        .reduce((strDigit, sum) => Number(sum) + Number(strDigit), 0);
    // return final diff
    return total1Num - total2Num;
}

console.log( calc("ABC") ); // 6
console.log( calc("aaaaaddddr") ); // 30
