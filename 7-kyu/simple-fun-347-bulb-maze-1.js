"use strict";

/**
 * solution 1 -- direct simulation
 * time: O(n^2)
 * space: O(n)
 *
 * @param {string} maze
 * @returns {boolean}
 */
function bulbMaze(maze) {
    let index = 0;

    while (index !== maze.length) {
        // check the current character
        // ensure no "o" on light bulbs
        if (maze[index] === "o") return false;
        // replace string with swapped "x" and "o" chars
        const updatedStr = maze.replace(
            /[xo]/g,
            function swapChar(matchedChar) {
                if (matchedChar === "x") {
                    return "o";
                } else {
                    return "x";
                }
            },
        );
        maze = updatedStr;
        // move pointer
        index++;
    }

    // we made it!
    return true;
}

console.log(bulbMaze("xo oxox")); // true
console.log(bulbMaze("xo  oxox")); // false
