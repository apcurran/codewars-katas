"use strict";

/**
 * Return a string with dash'-'marks before and after each odd integer,
 * but do not begin or end the string with a dash mark.
 *
 * solution 1 -- regex
 * time: O(n)
 * space: O(n)
 *
 * @param {number} num
 * @returns {string}
 */
function dashatize(num) {
    if (!Number.isInteger(num)) return "NaN";

    const positiveNum = Math.abs(num);
    const positiveNumStr = String(positiveNum);
    let resStr = "";

    for (let digitStr of positiveNumStr) {
        if (Number(digitStr) % 2 === 0) {
            resStr += digitStr;
        } else {
            resStr += `-${digitStr}-`;
        }
    }

    const onlySingleDashes = resStr.replace(/--/g, "-");
    const trimmedEndingDashes = onlySingleDashes.replace(/^-|-$/g, "");

    return trimmedEndingDashes;
}

console.log(dashatize(5311)); // "5-3-1-1"
console.log(dashatize(-28369)); // "28-3-6-9"
console.log(dashatize(274)); // "2-7-4"
