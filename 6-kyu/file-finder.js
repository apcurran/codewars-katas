"use strict";

/**
 * solution 1 -- recursion
 * time: O(n)
 * space: O(n)
 * @param {object} files
 * @returns {string} path to file
 */
function search(files, currentPath = "") {
    // not another obj, but file
    if (typeof files === "string") {
        return currentPath;
    }

    for (let prop in files) {
        const value = files[prop];
        // if currentPath is empty (top level), just use prop
        // otherwise, append /${prop} to the existing path
        const filePath = currentPath ? `${currentPath}/${prop}` : prop;

        try {
            return search(value, filePath);
        } catch (err) {}
    }

    throw new Error("No files!");
}

console.log(
    search({
        "New folder": {
            "New folder": {},
        },
        "New folder (1)": {
            "New folder": {
                "funnyjoke.txt": "lol i pranked you!!!",
            },
        },
        "New folder (2)": {},
    }),
); // 'New folder (1)/New folder/funnyjoke.txt'
