"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} formData 
 * @returns {string}
 */
function htmlspecialchars(formData) {
    let resStr = "";

    for (let char of formData) {
        if (char === "<") {
            resStr += "&lt;";
        } else if (char === ">") {
            resStr += "&gt;";
        } else if (char === "\"") {
            resStr += "&quot;";
        } else if (char === "&") {
            resStr += "&amp;";
        } else {
            resStr += char;
        }
    }

    return resStr;
}

console.log( htmlspecialchars("<h2>Hello World</h2>") ); // "&lt;h2&gt;Hello World&lt;/h2&gt;"
