"use strict";

/**
 * 
 * @param {string} str - Str with characters, numbers, or combo of both 
 * @returns {number}
 */
function filterStr(str) {
    const numStr = str.replace(/\D/g, "");
    
    return Number(numStr);
}

console.log(filterStr("a1b2c3")); // 123