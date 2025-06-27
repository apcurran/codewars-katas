"use strict";

/**
 *
 * @param {string} str
 * @returns {string|null}
 */
function array(str) {
    const splitArr = str.split(",");
    splitArr.shift();
    splitArr.pop();
    const resultStr = splitArr.join(" ");

    return resultStr === "" ? null : resultStr;
}

console.log(array("1,2,3")); // "2"
console.log(array("1,2,3,4")); // "2 3"
console.log(array("")); // null
console.log(array("1")); // null
console.log(array("1,2")); // null
