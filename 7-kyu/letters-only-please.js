"use strict";

/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} s 
 * @returns {string}
 */
function removeChars(s) {
    return s.replace(/[^a-zA-Z ]+/g, "");
}

console.log(removeChars(".tree1")); // "tree"
console.log(removeChars("that's a pie&ce o_f p#ie!")); // "thats a piece of pie"
console.log(removeChars("john.dope@dopington.com")); //  "johndopedopingtoncom"
console.log(removeChars("my_list = [\"a\",\"b\",\"c\"]")); //  "mylist  abc"
console.log(removeChars("1 + 1 = 2")); //  "    "
