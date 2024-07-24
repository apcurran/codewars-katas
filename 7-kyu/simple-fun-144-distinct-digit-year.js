"use strict";

/**
 * solution 1 -- hashset
 * time: O(n * m)
 * space: O(m)
 * 
 * @param {number} year 
 * @returns {number}
 */
function distinctDigitYear(year) {
    for (let currentYear = year + 1; currentYear <= 9000; currentYear++) {
        if (areNumDigitsDistinct(currentYear)) {
            return currentYear;
        }
    }

    return 0;
}

function areNumDigitsDistinct(num) {
    const strNum = String(num);
    const distinctStrDigits = new Set(strNum);

    return distinctStrDigits.size === strNum.length;
}

console.log(distinctDigitYear(1987)); // 2013
console.log(distinctDigitYear(2013)); // 2014
