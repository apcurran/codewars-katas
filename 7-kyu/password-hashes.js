"use strict";

const { createHash } = require("node:crypto");

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {string}
 */
function passHash(str) {
    const md5Hash = createHash("md5");
    md5Hash.update(str);

    return md5Hash.digest("hex");
}

console.log(passHash("password")); // '5f4dcc3b5aa765d61d8327deb882cf99'
console.log(passHash("abc123")); // 'e99a18c428cb38d5f260853678922e03'
