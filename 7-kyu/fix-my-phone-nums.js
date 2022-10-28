"use strict";

/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function isItANum(str) {
    const justNumsStr = str.replace(/\D/g, "");
    const invalidMsg = "Not a phone number";
    // must start with a 0 digit and then 10 digits
    const isPhoneNum = /^0\d{10}$/.test(justNumsStr);

    return isPhoneNum ? justNumsStr : invalidMsg;
}

console.log( isItANum("S:)0207ERGQREG88349F82!efRF)") ); // "02078834982"
console.log( isItANum("sjfniebienvr12312312312ehfWh") ); // "Not a phone number"
