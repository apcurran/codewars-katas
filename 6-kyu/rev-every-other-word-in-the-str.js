"use strict";

/**
 * solution 1
 * n = str len
 * m = word len
 * time: O(n * m)
 * space: O(n + m)
 * 
 * @param {string} str 
 * @returns {string}
 */
function reverse(str) {
    // remove leading/trailing whitespace
    return str
        .trim()
        .split(" ")
        .map((word, index) =>  {
            // rev every other word
            if (index % 2 !== 0) {
                return revStr(word);
            }

            return word;
        })
    // one space between words
        .join(" ");
}

function revStr(str) {
    let resStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        resStr += str[i];
    }

    return resStr;
}

console.log( reverse("Reverse this string, please!") ); // "Reverse siht string, !esaelp"
console.log( reverse("I really don't like reversing strings!") ); // "I yllaer don't ekil reversing !sgnirts"
