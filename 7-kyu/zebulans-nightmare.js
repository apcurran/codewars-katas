"use strict";

/**
 * 
 * @param {string} functionName 
 * @returns {string}
 */
function zebulansNightmare(functionName) {
    const strings = functionName.split("_");

    return strings
        .map((str, index) => {
            if (index === 0) return str;

            return titleCaseString(str);
        })
        .join("");
}

/**
 * @param {string} str
 * @returns {string}
 */
function titleCaseString(str) {
    return str[0].toUpperCase() + str.slice(1);
}

console.log( zebulansNightmare("camel_case") ); // 'camelCase'
console.log( zebulansNightmare("main") ); // 'main'
