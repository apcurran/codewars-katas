"use strict";

obfuscate = function (email) {
    let result = "";

    for (let char of email) {
        if (char === ".") {
            result += " [dot] ";
        } else if (char === "@") {
            result += " [at] ";
        } else {
            result += char;
        }
    }

    return result;
};