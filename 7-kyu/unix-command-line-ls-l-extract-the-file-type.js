"use strict";

/**
 * solution 1 -- object mapping
 * time: O(1)
 * space: O(1)
 *
 * @param {string} fileAttribute
 * @returns {string}
 */
function linuxType(fileAttribute) {
    const fileTypes = {
        "-": "file",
        d: "directory",
        l: "symlink",
        c: "character_file",
        b: "block_file",
        p: "pipe",
        s: "socket",
        D: "door",
    };

    return fileTypes[fileAttribute[0]];
}

console.log(linuxType("-rwxrwxrwx")); //"file"
console.log(linuxType("Drwxr-xr-x")); //"door"
console.log(linuxType("lrwxrw-rw-")); //"symlink"
console.log(linuxType("srwxrwxrwx")); //"socket"
