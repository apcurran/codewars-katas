"use strict";

/**
 * solution 1 -- recursion
 * time: O(n)
 * space: O(n)
 * @param {object} files
 * @returns {string} path to file
 */
function search(files, currentPath = "") {
    if (typeof files === "string") {
        return currentPath.slice();
    }

    for (let prop in files) {
        const value = files[prop];
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
